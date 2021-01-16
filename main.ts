let strip: neopixel.Strip = null
let range2: neopixel.Strip = null
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P5, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(500)
})
// 需要5伏電壓
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Centimeters
    ) > 10) {
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
    basic.showNumber(sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Centimeters
    ))
    basic.pause(500)
})
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
    range2 = neopixel.create(DigitalPin.P13, 1, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    range2.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
    range2 = neopixel.create(DigitalPin.P13, 1, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
    range2 = neopixel.create(DigitalPin.P13, 1, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    range2.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
    range2 = neopixel.create(DigitalPin.P13, 1, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    range2.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
})
