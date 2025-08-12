export interface GalleryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
    // Optional: for special cases like background overlays or wrappers
    wrapperClassName?: string;
    isBackground?: boolean;
}

export interface GalleryLayout {
    left: GalleryImage[][]; // rows of images
    center: GalleryImage[]; // single image (or array for future flexibility)
    right: GalleryImage[][]; // rows of images
}

export const galleryLayout: GalleryLayout = {
    left: [
        [
            {
                src: 'https://interiorwalaa.smepulse.in/ourgallaryimg1.jpg',
                alt: 'Gallery Image 1',
                width: 204,
                height: 286,
                className: 'absolute inset-0 w-full h-[143px] sm:h-[214px] md:h-[250px] lg:h-[286px] object-cover',
                wrapperClassName: 'relative w-[38%]',
                isBackground: true,
            },
            {
                src: 'https://interiorwalaa.smepulse.in/ourgallaryimg3.jpg',
                alt: 'Gallery Image 2',
                width: 338,
                height: 234,
                className: 'w-[62%] h-[117px] sm:h-[175px] md:h-[204px] lg:h-[234px] object-cover self-end',
            },
        ],
        [
            {
                src: 'https://interiorwalaa.smepulse.in/ourgallaryimg2.jpg',
                alt: 'Gallery Image 3',
                width: 284,
                height: 242,
                className: 'w-[52%] h-[121px] sm:h-[181px] md:h-[211px] lg:h-[242px] object-cover self-center',
            },
            {
                src: 'https://interiorwalaa.smepulse.in/ourgallaryimg4.jpg',
                alt: 'Gallery Image 4',
                width: 258,
                height: 180,
                className: 'w-[46%] h-[90px] sm:h-[135px] md:h-[157px] lg:h-[180px] object-cover',
            },
        ],
    ],
    center: [
        {
            src: 'https://interiorwalaa.smepulse.in/ourgallaryimg5.jpg',
            alt: 'Gallery Image 5',
            width: 220,
            height: 294,
            className: 'w-full lg:w-[16%] h-[147px] sm:h-[220px] md:h-[257px] lg:h-[294px] object-cover mt-[12px] sm:mt-[87px] md:mt-[101px] lg:mt-[116px]',
        },
    ],
    right: [
        [
            {
                src: 'https://interiorwalaa.smepulse.in/ourgallaryimg6.jpg',
                alt: 'Gallery Image 6',
                width: 216,
                height: 260,
                className: 'w-[40%] h-[130px] sm:h-[195px] md:h-[227px] lg:h-[260px] object-cover self-end',
            },
            {
                src: 'https://interiorwalaa.smepulse.in/ourgallaryimg7.jpg',
                alt: 'Gallery Image 7',
                width: 318,
                height: 324,
                className: 'w-[58%] h-[162px] sm:h-[243px] md:h-[283px] lg:h-[324px] object-cover',
            },
        ],
        [
            {
                src: 'https://interiorwalaa.smepulse.in/ourgallaryimg8.jpg',
                alt: 'Gallery Image 8',
                width: 132,
                height: 180,
                className: 'w-[24%] h-[90px] sm:h-[135px] md:h-[157px] lg:h-[180px] object-cover',
            },
            {
                src: 'https://interiorwalaa.smepulse.in/ourgallaryimg9.jpg',
                alt: 'Gallery Image 9',
                width: 192,
                height: 146,
                className: 'w-[36%] h-[73px] sm:h-[109px] md:h-[127px] lg:h-[146px] object-cover',
            },
            {
                src: 'https://interiorwalaa.smepulse.in/ourgallaryimg10.jpg',
                alt: 'Gallery Image 10',
                width: 196,
                height: 234,
                className: 'w-[38%] h-[117px] sm:h-[175px] md:h-[204px] lg:h-[234px] object-cover self-center',
            },
        ],
    ],
};
