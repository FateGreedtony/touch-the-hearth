input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Asleep)
    }
})
