var count = true;

function loadImages(sources, callback) {
    var assetDir = '../../assets/images/games/game2/';
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = assetDir + sources[src];
    }
}

function isNearOutline(animal, outline) {
    var a = animal;
    var o = outline;
    var ax = a.x();
    var ay = a.y();

    if (ax > o.x - 20 && ax < o.x + 20 && ay > o.y - 20 && ay < o.y + 20) {
        return true;
    } else {
        return false;
    }
}

function drawBackground(background, beachImg, text) {
    var context = background.getContext();
    context.drawImage(beachImg, 0, 0);
    context.setAttr('font', '20pt Calibri');
    context.setAttr('textAlign', 'center');
    context.setAttr('fillStyle', 'black');
    context.fillText(text, background.getStage().width() / 2, background.getStage().height()-100);
}

function initStage(images) {
    var stage = new Konva.Stage({
        container: 'container',
        width: 560,
        height: 800,
    });
    var background = new Konva.Layer();
    var objectLayer = new Konva.Layer();
    var objectsShapes = [];
    var score = 0;

    var animals = {
        netbook: {
            x: 0,
            y: 550,
        },
        paper: {
            x: 100,
            y: 500,
        },
        line: {
            x: 200,
            y: 500,
        },
        clock: {
            x: 300,
            y: 500,
        },
        micro: {
            x: 400,
            y: 500,
        },
        books: {
            x: 500,
            y: 500,
        },
        bottles: {
            x: 400,
            y: 600,
        },
        backpack: {
            x: 200,
            y: 500,
        },
        cup: {
            x: 100,
            y: 600,
        }
    };
    var outlines = {
        netbook_black: {
            x: 52,
            y: 135,
        },
        paper_black: {
            x: 405,
            y: 169,
        },
        line_black: {
            x: 415,
            y: 353,
        },
        clock_black: {
            x: 255,
            y: 85,
        },
        micro_black: {
            x: 403,
            y: 60,
        },
        books_black: {
            x: 121,
            y: 66,
        },
        bottles_black: {
            x: 262,
            y: 163.5,
        },
        backpack_black: {
            x: 98,
            y: 248.5,
        },
        cup_black: {
            x: 334,
            y: 318.5,
        }
    };

    for (var key in animals) {
        (function () {
            var privKey = key;
            var anim = animals[key];

            var object = new Konva.Image({
                image: images[key],
                x: anim.x,
                y: anim.y,
                draggable: true,
            });

            object.on('dragstart', function () {
                this.moveToTop();
                objectLayer.draw();
            });
            object.on('dragend', function () {
                var outline = outlines[privKey + '_black'];
                if (!object.inRightPlace && isNearOutline(object, outline)) {
                    object.position({
                        x: outline.x,
                        y: outline.y,
                    });
                    objectLayer.draw();
                    object.inRightPlace = true;

                    if (++score >= 9) {
                        var text = 'You win! Enjoy your booty!';
                        drawBackground(background, images.back, text);
                    }

                    setTimeout(function () {
                        object.draggable(false);
                    }, 50);
                }
            });
            object.on('mouseover', function () {
                document.body.style.cursor = 'pointer';
            });
            object.on('mouseout', function () {
                object.image(images[privKey]);
                objectLayer.draw();
                document.body.style.cursor = 'default';
            });
            object.on('dragmove', function () {
                document.body.style.cursor = 'pointer';
            });
            objectLayer.add(object);
            objectsShapes.push(object);
        })();
    }
    for (var key in outlines) {
        (function () {
            var imageObj = images[key];
            var out = outlines[key];

            var outline = new Konva.Image({
                image: imageObj,
                x: out.x,
                y: out.y,
            });

            objectLayer.add(outline);
        })();
    }

    stage.add(background);
    stage.add(objectLayer);

    drawBackground(
        background,
        images.back,
        ''
    );
}

var sources = {
    back: 'back.png',
    netbook: 'netbook.png',
    paper: 'paper.png',
    line: 'line.png',
    clock: 'clock.png',
    micro: 'micro.png',
    books: 'books.png',
    bottles: 'bottles.png',
    backpack: 'backpack.png',
    cup: 'cup.png',
};
loadImages(sources, initStage);

var timer = document.getElementById("timer");
var zero = 0;
function tick(){
    setTimeout(()=>{
        if(count){
            timer.innerText = ++zero + " seconds"
            tick();
        }
    }, 1000);
}
tick();
