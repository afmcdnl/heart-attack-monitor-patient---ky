/**
 * This idea was from a student of mine during the summer of 2020 - KY
 * 
 * I did a little remix of it to clean up some code
 */
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(1000)
})
radio.setGroup(1)
let help_state = 0
// Keep the other micro:bit knowing the temperature of the first micro:bit
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(1000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        help_state = 1
    }
})
basic.forever(function () {
    if (help_state == 1) {
        for (let index = 0; index < 4; index++) {
            radio.sendString("Cancel help")
        }
        help_state = 0
    }
})
