import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// 网络面板组件
const NetworkPanel: React.FC = () => {
  const [online, setOnline] = useState(navigator.onLine); // 初始值为浏览器状态
  const [effectiveType, setEffectiveType] = useState('');
  const redux_theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    // 类型断言 + 安全检查
    const connection = (navigator as any).connection as {
      effectiveType?: string;
      addEventListener?: (type: string, callback: () => void) => void;
      removeEventListener?: (type: string, callback: () => void) => void;
    };

    const checkNetwork = () => {
      setOnline(navigator.onLine);
      if (connection?.effectiveType) {
        setEffectiveType(connection.effectiveType);
      } else {
        setEffectiveType('');
      }
    };

    // 初始检查一次
    checkNetwork();

    // 注册事件监听器
    window.addEventListener('online', checkNetwork);
    window.addEventListener('offline', checkNetwork);
    connection?.addEventListener?.('change', checkNetwork);

    const interval = setInterval(checkNetwork, 5000); // 定时更新
    // 清理
    return () => {
      window.removeEventListener('online', checkNetwork);
      window.removeEventListener('offline', checkNetwork);
      connection?.removeEventListener?.('change', checkNetwork);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`w-full dark:text-white px-5 ${redux_theme}`}>
      {online ? (
        <div className="flex justify-between before-dot text-green-500 pl-2">
          <span>在线</span>
          <span>{effectiveType.toUpperCase() || '未知'}</span>
        </div>
      ) : (
        <div className="flex justify-between before-dot text-red-500 pl-2">
          <span>离线</span>
          <span>未知</span>
        </div>
      )}
    </div>
  );
};

export default NetworkPanel;
