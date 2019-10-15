module.exports = {
    presets: [["@vue/app", {
        useBuiltIns: "entry", polyfills: [
            'es6.promise', // already default included now
            'es6.array.iterator', // already default included now
            'es6.symbol',
            'es6.object.assign'
        ]
    }]],
    plugins: [
        [
            "component",
            {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk"
            }
        ]
    ]
};
