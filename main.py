strip: neopixel.Strip = None
range2: neopixel.Strip = None

def on_forever():
    pins.digital_write_pin(DigitalPin.P12, 1)
    pins.digital_write_pin(DigitalPin.P16, 0)
    pins.digital_write_pin(DigitalPin.P5, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P16, 1)
    pins.digital_write_pin(DigitalPin.P5, 0)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P16, 0)
    pins.digital_write_pin(DigitalPin.P5, 1)
    basic.pause(500)
    pins.digital_write_pin(DigitalPin.P12, 1)
    pins.digital_write_pin(DigitalPin.P16, 1)
    basic.pause(500)
basic.forever(on_forever)

def on_forever2():
    if sonar.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.CENTIMETERS) < 10:
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.show_number(sonar.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.CENTIMETERS))
    basic.pause(500)
basic.forever(on_forever2)

def on_forever3():
    global strip, range2
    strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
    range2 = neopixel.create(DigitalPin.P13, 1, NeoPixelMode.RGB)
    strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
    range2.show_color(neopixel.colors(NeoPixelColors.BLUE))
basic.forever(on_forever3)
