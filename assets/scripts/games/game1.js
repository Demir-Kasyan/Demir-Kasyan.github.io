function loadImages(sources, callback) {
    var assetDir = '../../assets/images/games/game1/';
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

    // image positions
    var animals = {
        tree: {
            x: 0,
            y: 500,
        },
        human_green: {
            x: 190,
            y: 525,
        },
        human_blue: {
            x: 275,
            y: 525,
        },
        human_pink: {
            x: 320,
            y: 520,
        },
        books: {
            x: 150,
            y: 640,
        },
        fire: {
            x: 400,
            y: 640,
        },
        red_book: {
            x: 40,
            y: 660,
        },
        blue_book: {
            x: 60,
            y: 640,
        }
    };
    var outlines = {
        tree_black: {
            x: 345,
            y: 109,
        },
        blue_book_black: {
            x: 344,
            y: 228,
        },
        human_green_black: {
            x: 281,
            y: 216,
        },
        human_blue_black: {
            x: 71,
            y: 203,
        },
        human_pink_black: {
            x: 156,
            y: 135,
        },
        books_black: {
            x: 175,
            y: 355,
        },
        fire_black: {
            x: 219,
            y: 274,
        },
        red_book_black: {
            x: 228.7,
            y: 126.6,
        }
    };

    // create draggable objects
    for (var key in animals) {
        // anonymous function to induce scope
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
            /*
             * check if object is in the right spot and
             * snap into place if it is
             */
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

                    // disable drag and drop
                    setTimeout(function () {
                        object.draggable(false);
                    }, 50);
                }
            });
            // make object glow on mouseover
            object.on('mouseover', function () {
                document.body.style.cursor = 'pointer';
            });
            // return on mouseout
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
    // create outlines
    for (var key in outlines) {
        // anonymous function to induce scope
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
    tree: 'tree.png',
    human_green: 'human_green.png',
    human_blue: 'human_blue.png',
    human_pink: 'human_pink.png',
    books: 'books.png',
    fire: 'fire.png',
    red_book: 'red_book.png',
    blue_book: 'blue_book.png',
};
loadImages(sources, initStage);
