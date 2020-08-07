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
