import p5 from 'p5';

var title_element: HTMLElement | null = null;
var cnv;
var splash: number;
var menubg: p5.Image;
var loli: boolean = false;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function loadAssets() {
    const asset_path: string = "../osuclone_assets"
    cursor(`${asset_path}/osucursor.png`);
    menubg = loadImage(`${asset_path}/menu.jpg`);
}

function setup() {
    cnv = createCanvas(800, 600);
    centerCanvas();
    background(128);
    loadAssets();
    const splashtext: string[] = ["better than ppy!", "Electric Boogaloo"];
    splash = Math.floor(Math.random() * splashtext.length);
    setTitle(`osu!clone.js : ${splashtext[splash]}`);
}

function windowResized() {
    centerCanvas();
}

function draw() {
    if(!loli) {
        background(menubg);
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(50);
        //text(mapname, 400, 500);
        //text(mapplaying, 400, 550);
        fill(255, 192, 203);
        textSize(100);
        if (mouseX > 250 && mouseX < 550 && mouseY > 82.5 && mouseY < 467.5) {
            ellipse(400, 275, 300, 385);
            fill(255);
            text("PLAY", 400, 275);
            if (mouseIsPressed && mouseButton == LEFT) {
                //start = millis();
                loli = true;
            }
        }
        //todo use createFileInput() to make box to drop a .level file in
    } else {
        if (mouseIsPressed) {
            fill(0);
        } else {
            fill(255);
        }
        ellipse(mouseX, mouseY, 80, 80);
    }
}
function setTitle(title: string) {
    if (title_element == null)
        title_element = document.getElementById("osu_title");
    const el: HTMLElement = title_element!!;
    el.textContent = title;
    return el.textContent;
}