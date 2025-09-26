import { Menu } from "@/components/Menu";
import React from "react";

const Collection: React.FC = () => {
  return (
    <div>
      <Menu mode="vertical" defaultSelectedKey="1" onSelect={console.log}>
        <Menu.Item key="1">照片管理</Menu.Item>
        <Menu.Item key="2" disabled>
          回收站
        </Menu.Item>
        <Menu.Item key="3">
          <div className="flex items-center gap-2">
            <i className="iconfont icon-album" />
            相册列表
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Collection;
