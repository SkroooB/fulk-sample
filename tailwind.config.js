module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            white: '#fff',
            gray: '#6B7280',
            grayLight: '#F3F4F6',
            red: '#EF4444',
            yellow: '#FBBF24',
            fulk: {
                light: '#3AC9DD',
                DEFAULT: '#5989E5',
                dark: '#001233',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}