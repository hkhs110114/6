input.onButtonPressed(Button.A, function () {
    radio.sendString("hollo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("receivedstring")
})
radio.setGroup(1)
