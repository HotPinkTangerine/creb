controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (theG.vy == 0) {
        theG.vy = -150
    }
})
function makeBacon () {
    baconScore = sprites.create(img`
        . . e e e e e . . . . . . . . . 
        e e 2 2 2 2 2 e . . . . . . . . 
        e 2 d d d d 2 2 e e e . . e e e 
        e d 3 3 3 3 d 2 2 2 2 e e 2 2 e 
        e 3 3 3 2 2 3 d d d 2 2 2 2 d e 
        e 2 2 2 d d 2 2 2 3 d d d d 2 e 
        e d d d 2 2 d d d 2 2 2 2 2 d e 
        e 2 2 2 e 2 2 2 2 d d d d d 2 e 
        e e e e . e e e 2 2 2 2 2 2 2 e 
        . . . . . . . . e e e e e e e . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(baconScore, assets.tile`myTile3`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})
let baconScore: Sprite = null
let theG: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
theG = sprites.create(img`
    ....dd............dd....
    .eddd333........333dddd.
    eeedccc333....333cccdddd
    .dddcbbcddddddddcbbcddd.
    .ddcbbddddddddddddbbcdd.
    ..3bbddddddddeeedddbb3..
    ..333dd1ddddeeee1dd333..
    ....dddfdddddeedfddd....
    ....dddfdddddeedfddd....
    ...ddeddd333333ddddee...
    ...eeeed33c33c33ddeee...
    ...eeeed33c33c3eddeee...
    ...eeeed33c33ceeddeee...
    ...beeddd33333edddeeb...
    ....bbddddddddddddbb....
    ......bbbbbbbbbbbb......
    `, SpriteKind.Player)
theG.setPosition(0, 200)
controller.moveSprite(theG, 100, 0)
theG.setStayInScreen(true)
scene.cameraFollowSprite(theG)
theG.ay = 200
info.setScore(0)
forever(function () {
    for (let index = 0; index < 50; index++) {
        makeBacon()
    }
})
