/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Ensure this points to your source code
        './app/**/*.{js,tsx,ts,jsx}',
    ],
    present: [require("nativewind/preset")]

    , theme: {
        extend: {},
    },
    plugins: [],
};
