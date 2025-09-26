import React, { useEffect, useState } from 'react';
import { getImageSize } from '@/utils/getImageDimension'

interface Photo {
    id: string;
    url: string;
    description: string;
    time: string;
    detail: {
        size: string;
        pixel: string;
        model: string;
        location: string;
        tags: string[];
        ifColection: boolean;
    };
}


interface PhotoWithSize extends Photo {
    width: number;
    height: number;
}


interface JustifiedGalleryProps {
    photos: Photo[];
    targetRowHeight?: number;
    gap?: number;
    renderPhoto: (photo: PhotoWithSize, style: React.CSSProperties) => React.ReactNode;
}


const calculateRows = (photos: PhotoWithSize[], containerWidth: number, targetRowHeight: number, gap: number) => {
    const rows: PhotoWithSize[][] = [];
    let currentRow: PhotoWithSize[] = [];
    let currentRowWidth = 0;

    for (const photo of photos) {
        const scale = targetRowHeight / photo.height;
        const scaledWidth = photo.width * scale;
        currentRow.push(photo);
        currentRowWidth += scaledWidth + gap;

        if (currentRowWidth >= containerWidth && currentRow.length > 0) {
            rows.push(currentRow);
            currentRow = [];
            currentRowWidth = 0;
        }
    }

    if (currentRow.length > 0) {
        rows.push(currentRow);
    }
    return rows;
};

export const JustifiedGallery: React.FC<JustifiedGalleryProps> = ({
    photos,
    targetRowHeight = 200,
    gap = 8,
    renderPhoto,
}) => {
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [loadedPhotos, setLoadedPhotos] = useState<PhotoWithSize[]>([]);

    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        // ResizeObserver 代替 window.resize 更精确
        const resizeObserver = new ResizeObserver((entries) => {
            if (!entries[0]) return;
            setContainerWidth(entries[0].contentRect.width);
        });
    
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
    
        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        // 图片并发加载，计算宽高
        const loadSizes = async () => {
            const loaded = await Promise.all(photos.map(async (photo) => {
                try {
                    const size = await getImageSize(photo.url);
                    return { ...photo, ...size };
                } catch {
                    return null;
                }
            }));
            setLoadedPhotos(loaded.filter((p): p is PhotoWithSize => p !== null));
        };
        loadSizes();
    }, [photos]);


    const rows = calculateRows(loadedPhotos, containerWidth, targetRowHeight, gap);

    return (
        <div ref={containerRef} className="w-full">
            {rows.map((row, rowIndex) => {
                const totalOriginalWidth = row.reduce((sum, photo) => sum + (photo.width / photo.height) * targetRowHeight, 0);
                // 如果是最后一行，不做拉伸
                const isLastRow = rowIndex === rows.length - 1;
                const scale = isLastRow ? 1 : (containerWidth - (row.length - 1) * gap) / totalOriginalWidth;

                return (
                    <div key={rowIndex} style={{ display: "flex", gap: `${gap}px`, marginBottom: `${gap}px` }}>
                        {row.map((photo) => {
                            const width = ((photo.width / photo.height) * targetRowHeight) * scale;
                            const height = targetRowHeight * scale;

                            return renderPhoto(photo, {
                                width,
                                height
                            });
                        })}
                    </div>
                );
            })}
        </div>
    );
};