
interval = setInterval(function () {
    if (document.querySelector("body>div")) {
        document.querySelector("body>div").remove()
        clearInterval(interval)
    }
},10);

