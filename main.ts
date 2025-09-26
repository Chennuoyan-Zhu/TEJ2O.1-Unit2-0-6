/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program turns an LED on a breadboard on and off.
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)

//turn on LED
input.onButtonPressed(Button.A, function(){
  basic.showIcon(IconNames.Yes)
  pins.digitalWritePin(DigitalPin.P16, 1)
})

//turn off LED
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})