input.onButtonPressed(Button.A, function () {
    if (waterlevel > 0) {
        waterlevel += -1
        tekenWaterlevel()
    }
})
function tekenWaterlevel () {
    if (waterlevel == 0) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (waterlevel == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            . # # # .
            `)
    } else if (waterlevel == 2) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (waterlevel == 3) {
        basic.showLeds(`
            # . . . #
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (waterlevel == 4) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else {
    	
    }
}
let waterlevel = 0
waterlevel = 0
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
loops.everyInterval(3000, function () {
    if (waterlevel < 4) {
        waterlevel += 1
    } else {
    	
    }
    tekenWaterlevel()
})
