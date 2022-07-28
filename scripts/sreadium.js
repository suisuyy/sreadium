let status = {
    isInited: false,
}




let intervalTaskId = setInterval(() => {
    if (window.READIUM?.reader != null) {
        initConfig();
        clearInterval(intervalTaskId);
        console.log("inited config")
    }
}, 1000);




function initConfig() {
    READIUM.reader.updateSettings({ scroll: "scroll-continuous" })
}
