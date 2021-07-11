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
                extraFiles: [
                    {
                        from: "./LICENSE",
                        to: "./LICENSE.HowBow.txt"
                    }
                ],
                win: {
                    extraFiles: [
                        {
                            from: "build/win/",
                            to: ".",
                            filter: [
                                "HowBow.VisualElementsManifest.xml"
                            ]
                        }
                    ],
                    extraResources: [
                        "build/win/*"
                    ]
                },
            }
        }
    }
};
