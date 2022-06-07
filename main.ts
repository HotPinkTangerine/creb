controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    theG,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c . . . . . . . . . . . . 
        . c 3 6 c c c c c . . . . . . . 
        . c 6 6 3 3 3 6 6 c . . . . . . 
        c 3 3 3 3 3 3 6 6 6 c . . . . . 
        c 3 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 6 6 6 6 6 c c c . . 
        c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
        c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
        c c 6 6 6 6 6 6 c 3 c c c c 6 c 
        c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
        c 6 3 3 3 3 6 c 6 c c c c 6 c . 
        . c 6 3 3 3 6 c c c c c 6 c . . 
        . . c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c c . . . . . . 
        . c c 6 3 3 3 3 6 6 c . . . . . 
        c 6 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 6 6 6 6 6 c . . . . 
        c 3 3 3 3 6 6 6 6 6 6 c c c . . 
        c c 6 6 6 6 6 6 6 6 c 3 3 3 c . 
        c 6 3 3 3 6 6 6 c c 3 c c c 6 c 
        c 3 3 3 3 3 6 c c c c c c c c c 
        . c c c 6 6 c 4 5 5 c c 4 5 5 c 
        . . . c 6 6 6 c 5 5 5 c 5 5 4 c 
        . . . . c c c c c c c c c c c . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 3 6 6 c . . . . . 
        c 3 3 3 3 3 3 6 6 6 6 c . . . . 
        c 3 3 3 3 3 c c 6 6 c c c c c . 
        c c 3 3 3 c 5 5 c c 3 3 c 5 5 b 
        c c 6 6 6 f f 5 c 3 c c c 5 f f 
        c 3 3 3 3 f f 5 c c c c c 5 f f 
        c 3 3 3 3 3 c 5 5 3 c 3 5 5 b . 
        . c 3 3 3 c c 4 5 5 5 5 4 4 c . 
        . . b b c 4 5 5 4 4 4 4 5 5 4 c 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `,img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c 3 c c c c . c c . . 
        . . c 6 3 3 f f 5 c 6 c 5 f f . 
        . c 3 3 3 3 f f 5 c 6 c 5 f f . 
        c 3 3 3 3 3 c 5 5 5 c 5 5 5 b . 
        c 3 3 3 3 6 c 5 5 5 c 5 5 5 b . 
        c c 3 3 3 6 3 c 5 5 3 5 5 b b . 
        c c 6 6 3 3 3 c 5 5 3 5 5 b b . 
        c 3 3 3 3 c c b 5 5 5 5 5 c c . 
        c 3 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
        . c 3 3 c 5 b b 4 4 4 4 b 4 5 b 
        . . b b c 4 5 5 5 b 4 b 5 5 4 c 
        . b 5 4 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 c . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 3 c 3 5 f f . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 c c b 5 5 5 5 5 c c . 
        . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
        . . b b c 5 b b 4 4 4 4 b 4 5 b 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `,img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 c c b 5 5 5 5 5 c c . 
        . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
        . . b b c 5 b b 4 4 4 4 b 4 5 b 
        . b 5 4 c 4 5 5 5 b 4 b 5 5 4 c 
        . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
        . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
        . c c c . . c c c c c c c c c . 
        `],
    100,
    false
    )
    if (theG.vy == 0) {
        theG.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    theG,
    [img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . . c 5 5 5 5 b c c 3 3 3 3 3 c 
        . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
        . c 5 b 4 4 b b 5 c c b b b . . 
        . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
        . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
        . c 5 c 5 5 5 5 c 4 4 4 c c c . 
        . . c c c c c c c . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . c c c c 6 3 c . . . 
        . . . . . c 6 6 3 3 3 6 c . . . 
        . . . . c 6 6 3 3 3 3 3 3 c . . 
        b c c c 6 6 c c 3 3 3 3 3 3 c . 
        b 5 5 c 6 c 5 5 c 3 3 3 3 3 c . 
        f f 5 c 6 c 5 f f 6 3 3 3 c c . 
        f f 5 c c c 5 f f 6 6 6 6 c c . 
        . b 5 5 3 5 5 c 3 3 3 3 3 3 c . 
        . c 5 5 5 5 4 c c c 3 3 3 3 c . 
        . c 4 5 5 4 4 b 5 5 c 3 3 c . . 
        . c 5 b 4 4 b b 5 c b b c . . . 
        . c c 5 4 c 5 5 5 c c 5 c . . . 
        . . . c c 5 5 5 5 c c c c . . . 
        . . . . c c c c c c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 6 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . b c c c 6 6 c c 3 3 3 3 3 3 c 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . f f 5 c c c 5 f f 6 6 6 6 c c 
        . . b 5 5 3 5 5 c c c 3 3 3 3 c 
        . . c 5 5 5 5 5 b 5 5 c 3 3 3 c 
        . c 4 4 5 5 4 4 b b 5 c 3 3 c . 
        . c 5 5 b 4 4 4 b 5 5 5 b c . . 
        . c 5 5 5 4 4 4 c 5 5 5 c b . . 
        . . c c c c 4 c 5 5 5 5 c c . . 
        . . . . c c c c c c c c c c . . 
        `,img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . c c 5 5 5 5 4 c c 3 3 3 3 3 c 
        c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
        b 5 4 b 4 4 4 c 5 5 5 b c c . . 
        c 4 5 5 b 4 4 c 5 5 5 c b b . . 
        c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
        c 5 5 5 5 c 4 c c c c c c 5 c . 
        . c c c c c c . . . . . c c c . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    theG,
    [img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c b 5 5 5 5 c . . 
        . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
        . . b b b c c 5 b b 4 4 b 5 c . 
        . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
        . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
        . c c c 4 4 4 c 5 5 5 5 c 5 c . 
        . . . . . . . c c c c c c c . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    theG,
    [img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . . c 5 5 5 5 b c c 3 3 3 3 3 c 
        . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
        . c 5 b 4 4 b b 5 c c b b b . . 
        . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
        . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
        . c 5 c 5 5 5 5 c 4 4 4 c c c . 
        . . c c c c c c c . . . . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    theG,
    [img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c b 5 5 5 5 c . . 
        . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
        . . b b b c c 5 b b 4 4 b 5 c . 
        . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
        . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
        . c c c 4 4 4 c 5 5 5 5 c 5 c . 
        . . . . . . . c c c c c c c . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c . . . . . . . . . . 
        . . . c 3 6 c c c c . . . . . . 
        . . . c 6 3 3 3 6 6 c . . . . . 
        . . c 3 3 3 3 3 3 6 6 c . . . . 
        . c 3 3 3 3 3 3 c c 6 6 c c c b 
        . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
        . c c 3 3 3 6 f f 5 c 6 c 5 f f 
        . c c 6 6 6 6 f f 5 c c c 5 f f 
        . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
        . c 3 3 3 3 c c c 4 5 5 5 5 c . 
        . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
        . . . c b b c 5 b b 4 4 b 5 c . 
        . . . c 5 c c 5 5 5 c 4 5 c c . 
        . . . c c c c 5 5 5 5 c c . . . 
        . . . . . . c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 6 6 c . . . . . . 
        . c 3 3 3 3 3 3 6 6 c . . . . . 
        c 3 3 3 3 3 3 c c 6 6 c c c b . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 c c c 5 f f . 
        c 3 3 3 3 c c c 5 5 3 5 5 b . . 
        c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
        . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
        . . c b 5 5 5 b 4 4 4 b 5 5 c . 
        . . b c 5 5 5 c 4 4 4 5 5 5 c . 
        . . c c 5 5 5 5 c 4 c c c c . . 
        . . c c c c c c c c c c . . . . 
        `,img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
        . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
        . . c c b 5 5 5 c 4 4 4 b 4 5 b 
        . . b b c 5 5 5 c 4 4 b 5 5 4 c 
        . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
        . c 5 c c c c c c 4 c 5 5 5 5 c 
        . c c c . . . . . c c c c c c . 
        `],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (theG.vx == 0) {
        animation.runImageAnimation(
        theG,
        [img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
            c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . . b b c 5 b b 4 4 4 4 b 4 5 b 
            . b 5 4 c 4 5 5 5 b 4 b 5 5 4 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 c c 6 c . c c . . 
            c 3 3 3 3 3 c 5 5 c 6 c 5 5 c . 
            c c 3 3 3 6 f f 5 c 6 c 5 f f . 
            c c 6 6 6 6 f f 5 3 c 3 5 f f . 
            c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . . b b c 5 b b 4 4 4 4 b 4 5 b 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c 3 c c c c . c c . . 
            . . c 6 3 3 f f 5 c 6 c 5 f f . 
            . c 3 3 3 3 f f 5 c 6 c 5 f f . 
            c 3 3 3 3 3 c 5 5 5 c 5 5 5 b . 
            c 3 3 3 3 6 c 5 5 5 c 5 5 5 b . 
            c c 3 3 3 6 3 c 5 5 3 5 5 b b . 
            c c 6 6 3 3 3 c 5 5 3 5 5 b b . 
            c 3 3 3 3 c c b 5 5 5 5 5 c c . 
            c 3 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
            . c 3 3 c 5 b b 4 4 4 4 b 4 5 b 
            . . b b c 4 5 5 5 b 4 b 5 5 4 c 
            . b 5 4 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c . . . . . . . 
            . . c 6 3 3 3 3 6 c . . . . . . 
            . c 3 3 3 3 3 3 6 6 c . . . . . 
            c 3 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 c c 6 6 c c c c c . 
            c c 3 3 3 c 5 5 c c 3 3 c 5 5 b 
            c c 6 6 6 f f 5 c 3 c c c 5 f f 
            c 3 3 3 3 f f 5 c c c c c 5 f f 
            c 3 3 3 3 3 c 5 5 3 c 3 5 5 b . 
            . c 3 3 3 c c 4 5 5 5 5 4 4 c . 
            . . b b c 4 5 5 4 4 4 4 5 5 4 c 
            . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
            . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
            . c c c . . c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c . . . . . . . . . . . 
            . . c 3 6 c c c c c . . . . . . 
            . c c 6 3 3 3 3 6 6 c . . . . . 
            c 6 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 6 6 6 6 6 c . . . . 
            c 3 3 3 3 6 6 6 6 6 6 c c c . . 
            c c 6 6 6 6 6 6 6 6 c 3 3 3 c . 
            c 6 3 3 3 6 6 6 c c 3 c c c 6 c 
            c 3 3 3 3 3 6 c c c c c c c c c 
            . c c c 6 6 c 4 5 5 c c 4 5 5 c 
            . . . c 6 6 6 c 5 5 5 c 5 5 4 c 
            . . . . c c c c c c c c c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . c c . . . . . . . . . . . . 
            . c 3 6 c c c c c . . . . . . . 
            . c 6 6 3 3 3 6 6 c . . . . . . 
            c 3 3 3 3 3 3 6 6 6 c . . . . . 
            c 3 3 3 3 3 3 6 6 6 6 c . . . . 
            c 3 3 3 3 3 6 6 6 6 6 c c c . . 
            c 3 3 3 3 6 6 6 6 6 c 3 3 3 c . 
            c c 3 3 6 6 6 6 6 c 3 c c c 3 c 
            c c 6 6 6 6 6 6 c 3 c c c c 6 c 
            c 3 3 3 3 6 6 c 6 6 c c c c 6 c 
            c 6 3 3 3 3 6 c 6 c c c c 6 c . 
            . c 6 3 3 3 6 c c c c c 6 c . . 
            . . c c c c c c c c c c c . . . 
            `],
        100,
        false
        )
    }
    while (true) {
        theG.vx = 0
    }
})
let theG: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
theG = sprites.create(img`
    . . . c c . . . . . . . . . . . 
    . . c 3 6 c c c c . . . . . . . 
    . . c 6 3 3 3 3 6 c . . . . . . 
    . c 3 3 3 3 3 c c 6 c . c c . . 
    c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
    c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
    c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
    c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
    c 3 3 3 3 c c b 5 5 5 5 5 c c . 
    . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
    . . b b c 5 b b 4 4 4 4 b 4 5 b 
    . b 5 4 c 4 5 5 5 b 4 b 5 5 4 c 
    . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
    . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
    . c c c . . c c c c c c c c c . 
    `, SpriteKind.Player)
controller.moveSprite(theG, 100, 0)
theG.ay = 300
scene.cameraFollowSprite(theG)
theG.setStayInScreen(true)
forever(function () {
	
})
