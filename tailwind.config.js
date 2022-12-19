/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            minWidth: {
                "2/6": "35%",
            },
            colors: {
                mainColor: "#f5f5f5",
                btnColor: "#b2caeb",
            },
        },
    },
    plugins: [],
};
