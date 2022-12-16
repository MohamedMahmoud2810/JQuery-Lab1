$(".slideshow img:gt(0)").hide();

    function changeImg() {
        $(".slideshow img:first")
        .fadeOut(100)
        .hide()
        .next()
        .fadeIn(100)
        .end()
        .appendTo(".slideshow");
    }

    let slider = setInterval(changeImg, 2000);
    const stopBtn = $(".task1 button");
    $(stopBtn).on("click", () => {
        if (stopBtn.text() === "Stop") {
        clearInterval(slider);
        stopBtn.text("Play!");
        } else {
        slider = setInterval(changeImg, 2000);
        stopBtn.text("Stop");
        }
        });





