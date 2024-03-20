import localFont from 'next/font/local';

const GlacialIndifference = localFont({
    src: [
        {
            path: '../public/fonts/GlacialIndifference/GlacialIndifference-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/GlacialIndifference/GlacialIndifference-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/GlacialIndifference/GlacialIndifference-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-glacialindifference',
});

export {
    GlacialIndifference
}