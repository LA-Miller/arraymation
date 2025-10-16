const bjornData = {
    walkImgs: [
        "runninge0000.png", "runninge0001.png", "runninge0002.png", "runninge0003.png", "runninge0004.png",
        "runninge0005.png", "runninge0006.png", "runninge0007.png"
    ],

    attackImgs: [
        "attacke0000.png", "attacke0001.png", "attacke0002.png", "attacke0003.png", "attacke0004.png", "attacke0005.png", "attacke0006.png",
        "attacke0007.png", "attacke0008.png", "attacke0009.png", "attacke0010.png", "attacke0011.png"
    ],

    poseNumber: 0,

    elem: document.querySelector("#bjorn"),

    screenWidth: document.querySelector('#forest').clientWidth,

    screenHeight: document.querySelector('#forest').scrollHeight,

    x: 0,

    y: document.querySelector('#forest').scrollHeight - 100,

    timerId: null
}

const knightData = {
    walkImgs: [
        "runningw0000.png", "runningw0001.png", "runningw0002.png", "runningw0003.png", "runningw0004.png",
        "runningw0005.png", "runningw0006.png", "runningw0007.png", "runningw0008.png"
    ],

    attackImgs: [
        "attackw0000.png", "attackw0001.png", "attackw0002.png", "attackw0003.png", "attackw0004.png", "attackw0005.png", "attackw0006.png",
        "attackw0007.png", "attackw0008.png", "attackw0009.png", "attackw0010.png", "attackw0011.png"
    ],

    poseNumber: 0,

    elem: document.querySelector("#knight"),

    screenWidth: document.querySelector('#forest').clientWidth,

    screenHeight: document.querySelector('#forest').scrollHeight,

    x: 0,

    y: document.querySelector('#forest').scrollHeight - 100,

    timerId: null
}

knightData.x = knightData.screenWidth - 150 - 5;
knightData.elem.style.top = knightData.y + "px";
knightData.elem.style.left = knightData.x + "px";

function move() {
    bjornData.timerId = setInterval(frame, 100);
    knightData.timerId = setInterval(frame, 100);
}

function frame() {

    if (bjornData.x > bjornData.screenWidth - 150) {

        bjornData.x = 5;

    } else {

        bjornData.x += 5;

        bjornData.elem.style.top = bjornData.y + "px";

        bjornData.elem.style.left = bjornData.x + "px";

        bjornData.elem.src =

            "bjorn\\" + bjornData.walkImgs[bjornData.poseNumber];

        console.log(bjornData.elem.src);

        bjornData.poseNumber = (bjornData.poseNumber + 1) % bjornData.walkImgs.length;

    }

    knightData.x -= 5;

    if(knightData.x <= -150) {
        knightData.x = knightData.screenWidth -150 - 5;
    }

    knightData.elem.style.top = knightData.y + "px";

    knightData.elem.style.left = knightData.x + "px";

    knightData.elem.src =

        "knight\\" + knightData.walkImgs[knightData.poseNumber];

    console.log(knightData.elem.src);

    knightData.poseNumber = (knightData.poseNumber + 1) % knightData.walkImgs.length;

    let distance = Math.abs(knightData.x - bjornData.x);
    console.log(distance);

    if(distance <= 100) {
        stopMoving();
        attack();
    }
}


function stopMoving() {
    clearInterval(bjornData.timerId);
    clearInterval(knightData.timerId);
}

function attack() {
    bjornData.poseNumber = 0;
    knightData.poseNumber = 0;

    bjornData.timerId = setInterval(attackFrame, 150);
    knightData.timerId = setInterval(attackFrame, 150);   
}

function attackFrame() {
    bjornData.elem.src =

        "bjorn\\" + bjornData.attackImgs[bjornData.poseNumber];

    console.log(bjornData.elem.src);

    bjornData.poseNumber = (bjornData.poseNumber + 1) % bjornData.attackImgs.length;

    knightData.elem.src =

        "knight\\" + knightData.attackImgs[knightData.poseNumber];

    console.log(knightData.elem.src);

    knightData.poseNumber = (knightData.poseNumber + 1) % knightData.attackImgs.length;
}