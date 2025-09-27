# 第一阶段：构建阶段（build）
# 使用 node:18-alpine 镜像作为基础，这是一个轻量级的 Node.js 环境。
FROM node:18-alpine as build
# 设置工作目录为 /app，后续命令都在这个目录下执行。
WORKDIR /app
# 复制 package.json 和 package-lock.json 到容器中。
COPY package*.json ./
# 安装项目依赖。
RUN npm install
# 复制项目源代码到容器中。
COPY . .
# 执行构建命令（如 react-scripts build），生成静态文件（通常在 dist/ 目录下）。
RUN npm run build

# 第二阶段：运行阶段（Nginx）
# 使用 nginx:alpine 镜像作为基础，这是一个轻量级的 Web 服务器。
FROM nginx:alpine
# 从第一阶段的 build 阶段中，复制构建产物（dist/ 目录）到 Nginx 的默认静态资源目录。
COPY --from=build /app/dist /usr/share/nginx/html
# 替换 Nginx 的默认配置文件，通常是为了支持前端路由（如 React Router）或设置缓存策略等。
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 声明容器对外暴露的端口是 80（HTTP 默认端口）。
EXPOSE 80
# 启动 Nginx，并让它以前台模式运行（daemon off;），这样 Docker 才能正确跟踪进程。
CMD ["nginx", "-g", "daemon off;"]