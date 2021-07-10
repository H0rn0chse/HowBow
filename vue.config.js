module.exports = {
    transpileDependencies: [
        "vuetify",
    ],
    pages: {
        index: {
            entry: "src/app.js",
            title: "HowBow"
        },
    },
    pluginOptions: {
        electronBuilder: {
            mainProcessFile: "background.js",
            builderOptions: {
            }
        }
    }
};
