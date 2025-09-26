// 获取图片的尺寸信息
export const getImageFileDimension = (file: File): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve({ width: img.width, height: img.height });
        };
        img.onerror = reject;

        const reader = new FileReader();
        reader.onload = (e) => {
            if (typeof e.target?.result === "string") {
                img.src = e.target.result;
            } else {
                reject("读取文件失败");
            }
        };
        reader.readAsDataURL(file);
    });
};

export const getImageSize = (url: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
        img.onerror = reject;
    });
};