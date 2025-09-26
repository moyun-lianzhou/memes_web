import { RootState } from "@/redux/store";
import { useSelector } from "react-redux"

// 存储面板
const StoragePanel: React.FC = () => {
    const redux_theme = useSelector((state: RootState) => state.theme).theme;
    const used = 28.7
    const total = 100
    const progress = used / total * 100 + '%'
    return (
        <div className={`${redux_theme} mb-4`}>
            <div className="bg-[#F3F4F6] text-black dark:text-white  dark:bg-[#111419] py-4 rounded-lg px-4">
                <span className="font-bold text-left">存储空间</span>
                <div className="py-2">已用：{`28.7 GB / 100 GB`}</div>
                <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" 
                        style={{ width: progress }}
                    />
                </div>
            </div>
        </div>

    )
}

export default StoragePanel