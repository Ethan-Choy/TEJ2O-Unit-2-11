/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program compares 2 random numbers
*/


// variables
let randomNumber1:number = 0
let randomNumber2: number = 0

// get random numbers
basic.clearScreen()
basic.showIcon(IconNames.Happy)
randomNumber1 = randint(0, 99)
randomNumber2 = randint(0, 99)

// show randomNumber1
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString("1:")
    basic.showNumber(randomNumber1)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// show randomNumber2
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("2:")
    basic.showNumber(randomNumber2)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// compare randomNumbers 
input.onGesture(Gesture.Shake, function() {
    basic.clearScreen()
    if (randomNumber1 > randomNumber2){
        basic.showNumber(randomNumber1)
        basic.showString(">")
        basic.showNumber(randomNumber2)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
}else {
    basic.clearScreen()
        basic.showNumber(randomNumber1)
        basic.showString("<")
        basic.showNumber(randomNumber2)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
}
})