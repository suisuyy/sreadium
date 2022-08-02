const MODE = "";
const cacheName = 'cache-v1';


const DEFAULT_CONFIG = {
    "scroll": "scroll-continuous",
}

//set scroll mode to scroll-continuous use config strored in localStorage with key "reader"
let localConfig = getObjFromStorage("reader");
localConfig.scroll = DEFAULT_CONFIG.scroll;
setObjToStorage("reader", localConfig);

// bookMarks look lik this: 
//{
//     bookName: {
//         markName: `{"idref":"item43","contentCFI":"/4/18 / 2 / 2 / 2 / 2 / 36"}`
//     }

// }

const appModel = {
    bookMarks: getObjFromStorage("bookMarks") || {},
    reader: getObjFromStorage("reader") || {},

    getCurrentBookMarks: function () {
        return this.bookMarks[getBookName()] || {};
    }
    ,
    addBookMark: function (bookName, bookMark) {
        let bookMarks = this.bookMarks;
        if (!bookMarks[bookName]) {
            bookMarks[bookName] = {};
        }
        bookMarks[bookName][bookMark.name] = bookMark;
        setObjToStorage("bookMarks", bookMarks);
        view.render(document.body)
    }
    ,

    deleteBookMark: function (bookName, markName) {
        let bookMarks = this.bookMarks;
        if (bookMarks[bookName]) {
            delete bookMarks[bookName][markName];
        }
        setObjToStorage("bookMarks", bookMarks);
    },

}


let view = {
    init: function (navbar) {
        this.renderBookMarkBtn(navbar);
        document.querySelector("#app-navbar > div.btn-group.navbar-right > button.btn.icon-library")?.addEventListener("click", () => {
            document.querySelector("#bookMarkContainer")?.remove();
        });
    },
    renderLibraryNavbarBtnAlways: function (navbar) {

        setInterval(() => {
            if (getBookName() !== null) {
                return;
            }
            if (document.querySelector("#openLocalBtn") === null) {
                this.renderOpenLocalBtn(navbar);
                this.renderShowDownloadBtn(navbar);
                console.log("rendered openlocal")
            }
        }, 2000);

    }
    ,
    render: function (navbar) {

        this.renderBookMarkBtn(navbar);
        this.renderBookmarkView(document.body);

    },
    renderBookMarkBtn: function (navbar) {

        if (document.querySelector("#bookMarkBtn") !== null) {
            return;
        }
        let bookMarkBtn = document.createElement("button");
        bookMarkBtn.className = "btn icon-bookmark";
        bookMarkBtn.id = "bookMarkBtn";
        bookMarkBtn.innerHTML = `<span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>`;
        navbar.appendChild(bookMarkBtn)
        bookMarkBtn.addEventListener("click", () => {
            if (document.querySelector("#bookMarkContainer") !== null) {
                document.querySelector("#bookMarkContainer").remove();
            }
            else {
                this.renderBookmarkView(document.body);
            }
        });

    },
    renderOpenLocalBtn: function (navbar) {
        if (document.querySelector("#openLocalBtn") !== null) {
            return;
        }
        let openLocalBtn = document.createElement("button");
        openLocalBtn.className = "btn icon-add";
        openLocalBtn.id = "openLocalBtn";
        openLocalBtn.innerHTML =
            `<label  for=bookfile class="glyphicon glyphicon-file" aria-hidden="true"></label>
            <input type="file" name="bookfile" id="bookfile" style="display: none" />`;
        navbar.appendChild(openLocalBtn)

        document.querySelector("#bookfile").addEventListener("change", (ev) => {
            var files = ev.target.files || ev.originalEvent.dataTransfer.files;
            if (files.length) {
                var file = files[0];
                console.log("File drag-n-drop:");
                console.log(file.name);
                console.log(file.type);
                console.log(file.size);

                if (file.type == "application/epub+zip" || (/\.epub[3?]$/.test(file.name))) {
                    //this totally a hack bad hack, Epublibrary is from readium-js-viewer_all.js line206
                    EpubLibrary(window).triggerHandler('readepub', { epub: file });
                }
            }
        })




    },

    renderShowDownloadBtn: function (navbar) {
        if (document.querySelector("#showDownloadBtn") !== null) {
            return;
        }
        let showDownloadBtn = document.createElement("button");
        showDownloadBtn.className = "btn icon-add";
        showDownloadBtn.id = "showDownloadBtn";
        showDownloadBtn.innerHTML =
            `<span   class="glyphicon glyphicon-download" aria-hidden="true"></span>`;
        navbar.appendChild(showDownloadBtn)

        showDownloadBtn.addEventListener("click", (ev) => {
            this.renderDownloadBtns();
        })




    },
    renderDownloadBtns: function () {
        document.querySelectorAll('.read').forEach(elem => {
            console.log(elem?.dataset?.book)
            let btn = document.createElement("button");
            btn.classList.add(['downloadBtn', 'btn',])
            btn.style.width = "auto";
            btn.style.border = "0";
            btn.style.backgroundColor = "#ffffff00";
            btn.style.color = "white"
            btn.style.position = "absolute";
            btn.style.top = "5%";
            btn.style.right = "5%";

            btn.innerHTML = `<span class="glyphicon glyphicon-download" style="font-size:large"/>`
            elem.appendChild(btn);

            btn.addEventListener('click', evt => {
                alert("Download start");
                evt.stopPropagation();
                caches.open(cacheName).then(cache => {
                    cache.addAll([btn.parentElement.dataset.book]).then(res => alert('Downloaded ' + btn.parentElement.dataset.book))
                })

            })
        })
    }
    ,
    renderBookmarkView: function (container) {
        document.querySelector("#bookMarkContainer")?.remove();

        let bookMarkContainer = document.createElement("div");
        let bookMarkList = document.createElement("ol");
        bookMarkContainer.appendChild(bookMarkList);
        bookMarkContainer.id = "bookMarkContainer";
        container.appendChild(bookMarkContainer);
        let addBookMarkLi = document.createElement("li");
        addBookMarkLi.innerHTML = "Bookmark now";
        addBookMarkLi.className = "bookmarkli"
        bookMarkList.appendChild(addBookMarkLi);
        addBookMarkLi.addEventListener("click", () => {
            let bookMarkName = prompt("bookMark name");
            if (bookMarkName) {
                appModel.addBookMark(getBookName(), createMark(bookMarkName));

            }
        });
        let bookMarksObj = appModel.getCurrentBookMarks();
        for (let key in bookMarksObj) {
            let bookMarkLi = document.createElement("li");
            bookMarkLi.innerHTML = key;
            bookMarkList.appendChild(bookMarkLi);
            bookMarkLi.addEventListener("click", () => {
                openBookMark(bookMarksObj[key]);
            });
            bookMarkLi.className = "bookmarkli"

        };

    }

}


//show object on page
window.onload = function () {
    if (MODE === "D") {
        showObjectOnPage(appModel);
    }
    let intervalId = setInterval(() => {
        let navbar;
        if (navbar = document.querySelector("#app-navbar")) {
            clearInterval(intervalId);
            view.renderLibraryNavbarBtnAlways(navbar);
        }
    }, 1000)


}






//TODO:bookmark support


//TODO: pin navi-bar


function sreadiumInitConfig(e, n) {
    console.log("sreadiumInitConfig start");
    if (navbar = document.querySelector("#app-navbar > div.btn-group.navbar-right")) {
        view.init(navbar);

    }

    // READIUM.reader.updateSettings({ scroll: "scroll-continuous" })

    // READIUM.reader.on(ReadiumSDK.Events.CONTENT_DOCUMENT_LOADED, function ($iframe, spineItem) {
    //     // do something
    //     console.log("sreadium init")

    // });


}











//helper function
function getBookName() {
    let bookName = new URL(location.href).searchParams.get("epub")
    return bookName
}
function createMark(name) {
    return {
        name: name,
        content: READIUM.reader.bookmarkCurrentPage()  //bookMark is str
    }
}
function openBookMark(bookMark) {
    READIUM.reader.openSpineItemElementCfi(JSON.parse(bookMark.content).idref, JSON.parse(bookMark.content).contentCFI, READIUM.reader)
}



function getObjFromStorage(name) {
    return (
        JSON.parse(window.localStorage.getItem(name)) ||
        {}
    );
}

function setObjToStorage(name, obj) {
    window.localStorage.setItem(name, JSON.stringify(obj));
}

function updateLabelInStrogeLabel(name, label) {
    let labels = getObjFromStorage(name);
    labels[label.id] = label;
    setObjToStorage(name, labels);
}




function showObjectOnPage(obj, w, h) {
    let objDispalyer = document.createElement("textarea");
    document.body.appendChild(objDispalyer);
    objDispalyer.value = JSON.stringify(obj, null, 4);
    objDispalyer.style.position = "fixed";
    objDispalyer.style.bottom = "0";
    objDispalyer.style.left = "0";

    objDispalyer.style.width = w || "50vw";
    objDispalyer.style.height = h || "50vh";

    objDispalyer.style.zIndex = "9999";

    setInterval(() => {

        objDispalyer.value = JSON.stringify(obj, null, 4);
    }, 500);
}













//unsed code

// let intervalTaskId = setInterval(() => {
//     if (window.READIUM?.reader != null) {
//         initConfig();
//         clearInterval(intervalTaskId);
//         console.log("inited config")
//     }
// }, 1000);

