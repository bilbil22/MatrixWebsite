const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const aboutContent = document.querySelector("#about-content")
const contactContent = document.querySelector("#contact-content")

about.addEventListener("click", () => {
    const aboutBox = new WinBox({
        title: "About me",
        // background: "#00aa00",
        width: "400px",
        height: "400px",
        top: 50,
        right: 50,
        bottom: 50,
        left: 50, /* top, right, bottom, left will position the winBox and cannot go over this parameters */
        // html: "<h1>Test</h1>", //this ill add text to the WinBox but instead we can use mount from line 17
        mount: aboutContent, //this will take the (aboutContent) from the DOM 
        onfocus: function () {
            this.setBackground("#00aa00")
        },
        onblur: function () {
            this.setBackground("#777")
        },
    })
})

contact.addEventListener("click", () => {
    const aboutBox = new WinBox({
        title: "Contact me",
        modal: true, //usefull for overlay
        background: "#00aa00",
        width: "400px",
        height: "400px",
        top: 150,
        right: 50,
        bottom: 50,
        left: 250, /* top, right, bottom, left will position the winBox and cannot go over this parameters */
        mount: contactContent, //this will take the (aboutContent) from the DOM 
        onfocus: function () {
            this.setBackground("#00aa00")
        },
        onblur: function () {
            this.setBackground("#777")
        },
    })
})