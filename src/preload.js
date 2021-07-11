const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
    for: "bar"
});
