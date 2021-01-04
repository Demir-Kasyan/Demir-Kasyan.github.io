var count = true;

function loadImages(sources, callback) {
    var assetDir = '../../assets/images/games/game3/';
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
        lamps1: {
            x: 10,
            y: 330,
        },
        lamps2: {
            x: 10,
            y: 410,
        },
        date: {
            x: 10,
            y: 480,
        },
        tree: {
            x: 350,
            y: 450,
        },
        fire: {
            x: 10,
            y: 530,
        },
        box1: {
            x: 500,
            y: 390,
        },
        box2: {
            x: 430,
            y: 390,
        },
        box3: {
            x: 360,
            y: 420,
        }
    };
    var outlines = {
        lamps1_black: {
            x: 20,
            y: 12,
        },
        lamps2_black: {
            x: 203,
            y: 11,
        },
        date_black: {
            x: 23,
            y: 14,
        },
        tree_black: {
            x: 390,
            y: 14,
        },
        fire_black: {
            x: -19,
            y: 86,
        },
        box1_black: {
            x: 449,
            y: 263,
        },
        box2_black: {
            x: 398.5,
            y: 283,
        },
        box3_black: {
            x: 490,
            y: 268,
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

                    if (++score >= 8) {
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
    lamps1: 'lamps1.png',
    lamps2: 'lamps2.png',
    date: 'date.png',
    tree: 'tree.png',
    fire: 'fire.png',
    box1: 'box1.png',
    box2: 'box2.png',
    box3: 'box3.png',
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
