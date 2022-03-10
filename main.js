function preLoad() {

}

function setUp() {
    canvas = createCanvas(600, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 600, 400);
    tint(tint_color)
}

function applyFilter() {
    tint_color = document.getElementById("color_name").ariaValueMax;
}

function take_snapshot() {
    save('tintedSlefie.png')
}