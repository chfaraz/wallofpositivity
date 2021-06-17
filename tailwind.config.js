module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                Dancing: ['Dancing'],
                Limelight: ['Limelight'],
                Lobster: ['Lobster'],
                Noto: ['Noto'],
                Roboto: ['Roboto'],
                ZCOOL: ['ZCOOL'],
            },
            backgroundImage: (theme) => ({
                bg1: "url('/1.jpeg')",
                bg2: "url('/2.jpg')",
                bg3: "url('/3.jpg')",
            }),
            boxShadow: {
                lg: '2px 2px 5px 3px rgb(120, 120, 120)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
