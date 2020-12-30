function loadImages(sources, callback) {
    var assetDir = '../../assets/images/games/game4/';
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
        toy1: {
            x: 10,
            y: 330,
        },
        toy2: {
            x: 65,
            y: 334,
        },
        box1: {
            x: 120,
            y: 340,
        },
        box2: {
            x: 10,
            y: 450,
        },
        box3: {
            x: 115,
            y: 450,
        },
        box4: {
            x: 220,
            y: 450,
        },
        fun1: {
            x: 280,
            y: 350,
        },
        fun2: {
            x: 220,
            y: 350,
        }
    };
    var outlines = {
        toy1_black: {
            x: 33,
            y: -2,
        },
        toy2_black: {
            x: 467,
            y: -7,
        },
        box1_black: {
            x: 91,
            y: 226,
        },
        box2_black: {
            x: 374,
            y: 192.8,
        },
        box3_black: {
            x: 291,
            y: 218.8,
        },
        box4_black: {
            x: 177,
            y: 188.8,
        },
        fun1_black: {
            x: 141.7,
            y: -13.4,
        },
        fun2_black: {
            x: 370,
            y: -11,
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
    toy1: 'toy1.png',
    toy2: 'toy2.png',
    box1: 'box1.png',
    box2: 'box2.png',
    box3: 'box3.png',
    box4: 'box4.png',
    fun1: 'fun1.png',
    fun2: 'fun2.png',
};
loadImages(sources, initStage);