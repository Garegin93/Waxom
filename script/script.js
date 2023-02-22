window.onload = function () {

    let video = document.querySelector("#video");
    let button = document.querySelector("#video_btn");
    let hideElementsFirst = document.querySelector(".video_presentation_title"),
        hideElementsSecond = document.querySelector(".video_presentation_phrase"),
        hideElementsThird = document.querySelector(".video_presentation_time");

    function videoOn() {
        if (video) {
            video.play();
            hideElementsFirst.style.display = "none";
            hideElementsSecond.style.display = "none";
            hideElementsThird.style.display = "none";
            button.style.display = "none";
        }
    }

    button.addEventListener("click", videoOn)
}

