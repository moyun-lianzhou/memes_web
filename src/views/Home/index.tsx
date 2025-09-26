import ImageCard from '@/components/Photo/ImageCard';
import React, { useEffect } from "react";
import Select from '@/components/Select/Select';
import { JustifiedGallery } from '@/components/Layout/JustifiedGallery';

const Home: React.FC = () => {
    const photoList = [
        {
            date: '2025-06-06',
            photos: [
                {
                    id: '2025-06-06-1',
                    url: `https://picsum.photos/800/300/?id=2025-06-06-1`,
                    description: '这是一张美丽的风景照片',
                    time: '2025-06-06',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                }, {
                    id: '2025-06-06-2',
                    url: `https://picsum.photos/100/300/?id=2025-06-06-2`,
                    description: '这是一张美丽的风景照片',
                    time: '2025-06-06',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                }, {
                    id: '2025-06-06-3',
                    url: `https://picsum.photos/400/300/?id=2025-06-06-3`,
                    description: '这是一张美丽的风景照片',
                    time: '2025-06-06',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                },
                {
                    id: '2025-06-06-4',
                    url: `https://picsum.photos/400/300/?id=2025-06-06-4`,
                    description: '这是一张美丽的风景照片',
                    time: '2025-06-06',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                }, {
                    id: '2025-06-06-5',
                    url: `https://picsum.photos/400/300/?id=2025-06-06-5`,
                    description: '这是一张美丽的风景照片',
                    time: '2025-06-06',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                }, {
                    id: '2025-06-06-6',
                    url: `https://picsum.photos/400/300/?id=2025-06-06-6`,
                    description: '这是一张美丽的风景照片',
                    time: '2025-06-06',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                }, {
                    id: '2025-06-06-7',
                    url: `https://picsum.photos/400/300/?id=2025-06-06-7`,
                    description: '这是一张美丽的风景照片',
                    time: '2025-06-06',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                },
            ]
        },
        {
            date: '2024-01-01',
            photos: [
                {
                    id: '2024-01-01-1',
                    url: `https://picsum.photos/400/300/?id=2024-01-01-1`,
                    description: '这是一张美丽的风景照片',
                    time: '2024-01-01',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                }, {
                    id: '2024-01-01-2',
                    url: `https://picsum.photos/200/300/?id=2024-01-01-2`,
                    description: '这是一张美丽的风景照片',
                    time: '2024-01-01',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                }, {
                    id: '2024-01-01-3',
                    url: `https://picsum.photos/400/300/?id=2024-01-01-3`,
                    description: '这是一张美丽的风景照片',
                    time: '2024-01-01',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                },
                {
                    id: '2024-01-01-4',
                    url: `https://picsum.photos/400/300/?id=2024-01-01-4`,
                    description: '这是一张美丽的风景照片',
                    time: '2024-01-01',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                }, {
                    id: '2024-01-01-5',
                    url: `https://picsum.photos/500/300/?id=2024-01-01-5`,
                    description: '这是一张美丽的风景照片',
                    time: '2024-01-01',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                }, {
                    id: '2024-01-01-6',
                    url: `https://picsum.photos/400/300/?id=2024-01-01-6`,
                    description: '这是一张美丽的风景照片',
                    time: '2024-01-01',
                    detail: {
                        size: '1.7MB',
                        pixel: '1920x1080',
                        model: '佳能EOS 1000D',
                        location: '北京',
                        tags: ['旅行', '风景'],
                        ifColection: true,
                    },
                }
            ]
        },

        {
            date: '2024-04-26',
            photos: [
                {
                    id: '2024-04-26-1',
                    url: `https://picsum.photos/300/?id=2024-04-26-1`,
                    description: '这是一张美丽的风景照片',
                    time: '2024-04-26',
                    detail: {
                        size: '3.7MB',
                        pixel: '3920x2280',
                        model: '佳能EOS 1000D',
                        location: '西藏',
                        tags: ['旅行', '风景'],
                        ifColection: false,
                    },
                }
            ]
        }
    ]

    // 初始化选中的照片 ID 数组为空
    const [selectedPhotos, setSelectedPhotos] = React.useState<string[]>([]);
    const [selectedDates, setSelectedDates] = React.useState<string[]>([]);

    // 选中的图片发生变化
    useEffect(() => {
        // console.log(selectedPhotos)
    }, [selectedPhotos])

    const handleSelect = (id: string, isSelected: boolean, date: string) => {
        setSelectedPhotos(isSelected ? [...selectedPhotos, id] : selectedPhotos.filter(photoId => photoId !== id)); // 切换选中状态，添加或移除 ID 从数组中
        console.log(`Image ${id} is selected`)
        if (!isSelected) { // 如果该照片已经被选中，则跳过
            setSelectedDates(selectedDates.filter(selectedDate => selectedDate !== date)) // 将该日期从选中的日期数组中移除
            return;
        }
        // 如果该日期的所有照片都被选中，则选中该日期
        const datePhotoIdList = photoList.find((datePhotoList) => datePhotoList.date === date)?.photos.map((photo) => photo.id) || []; // 找到该日期的所有照片 ID 数组
        if (datePhotoIdList.every(selectId => [...selectedPhotos, id].includes(selectId))) {
            console.log("all selected")
            setSelectedDates([...selectedDates, date]) // 将该日期添加到选中的日期数组中
        }
    };

    const handleDateSelect = (date: string, isSelected: boolean) => {
        if (isSelected) {
            setSelectedDates([...selectedDates, date]) // 将该日期添加到选中的日期数组中
            const tmp = []
            for (const datePhotoList of photoList) { // 遍历所有日期的照片列表
                for (const photo of datePhotoList.photos) { // 遍历每个日期的所有照片 ID
                    if (photo.time === date) { // 如果照片的时间戳与选中的日期相同
                        console.log(photo.id + "is selected")
                        if (selectedPhotos.includes(photo.id)) { // 如果该照片已经被选中，则跳过
                            continue;
                        }
                        tmp.push(photo.id)
                    }
                }
            }
            setSelectedPhotos([...selectedPhotos, ...tmp]); // 将该照片 ID 添加到选中的照片 ID 数组中
        } else {
            setSelectedDates(selectedDates.filter(selectedDate => selectedDate !== date)) // 将该日期从选中的日期数组中移除
            const tmp = [...selectedPhotos]
            for (const datePhotoList of photoList) { // 遍历所有日期的照片列表
                for (const photo of datePhotoList.photos) { // 遍历每个日期的所有照片 ID
                    if (photo.time === date) { // 如果照片的时间戳与选中的日期相同
                        console.log(photo.id + "is canceled")
                        tmp.splice(tmp.indexOf(photo.id), 1); // 将该照片 ID 添加到选中的照片 ID 数组中
                    }
                }
            }
            setSelectedPhotos(tmp); // 将该照片 ID 添加到选中的照片 ID 数组中
        }
        console.log(`Date ${date} is ${isSelected ? 'selected' : 'deselected'}`)
    }

    return (
        <div>
            <h1>已选中{selectedPhotos.length}个项目</h1>
            <div>
                {photoList.map((datePhotoList) => (
                    <div key={datePhotoList.date}>
                        <div className='flex justify-start items-center group'>
                            <Select
                                date={datePhotoList.date}
                                isSelected={selectedDates.includes(datePhotoList.date)}
                                onSelect={handleDateSelect}
                            />
                            <span className='text-base font-medium font-mono block py-2 ml-1'>
                                {datePhotoList.date}
                            </span>
                        </div>
                        
                        <JustifiedGallery
                            key={datePhotoList.date}
                            photos={datePhotoList.photos}
                            targetRowHeight={300}
                            gap={8}
                            renderPhoto={(photo, style) => (
                                <ImageCard
                                    key={photo.id}
                                    src={photo.url}
                                    alt="风景照片"
                                    width={style.width as number}
                                    height={style.height as number}
                                    id={photo.id}
                                    date={photo.time}
                                    isSelected={selectedPhotos.includes(photo.id)}
                                    onSelect={handleSelect}
                                    style={style}
                                />
                            )}
                        />
                    </div>
                )
                )}
            </div>

        </div>
    )
}

export default Home;