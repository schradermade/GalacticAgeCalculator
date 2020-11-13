# _Super Galactic Age Calculator_

#### _Web form to calculate user age on different planets, 11.13.2020_

#### By _**Nathan Schrader**_

## Description

_A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. This application will determine a user's age based on a planet's solar years._
    *  A Mercury year is .24 Earth years, therefore a 35 year old would be "8.4 Mercury years"
    *   A Venus year is .62 Earth years, therefore a 35 year old would be "21.7 Venus years"
    *   A Mars year is .1.88 Earth years, therefore a 35 year old would be "65.8 mars years"
    *   A Jupiter year is 11.86 Earth years, therefore a 35 year old would be "415.1 Jupiter years"
    
Application also determines how many years a user has left to live on each planet, based on a set "user life expectancy". Therefore, for each different planet a user will be returned with both their "planet" age as well las how many years more they are expected to live.

**Example:** if a user inputs a inputs an Earth-age of **35**, and the user wants to know their age data for Mars, the program should display 2 values: **"65.8 Mars age", and "34.2 expected years remaining"** 

## Setup/Installation Requirements

* _Clone this repository_
* _Open a simple HTTP server in the top level of the cloned directory. For a mac, run the following commanad in your terminal:_
    `python -m SimpleHTTPServer`
* _Then open your web browser of choice to localhost:8800_

## Specs

1.
Describe: userAge
Test: "should correctly take in user age and desired life expectancy"
Expect(userInput("35")).toEqual("35")
Expect(userInput("100")).toEqual("100")

2.
Describe: mercuryAge
Test: "should correctly 1. users age 2. user life expectancy 3. years left, all refactored in Mercury years"
expect(mercuryStats.mercury(35, 100)).toEqual("Your Mercury stats: Age - 8.4, Expected life - 24, Years left to live - 15.6")

3.
Describe: venusAge
Test: "should correctly output: 1. users age 2. user life expectancy years left, all refactored in Venus years"
expect(venusStats.venus(35, 100)).toEqual("Your Venus stats: Age - 21.7, Expected life - 62, Years left to live - 40.3")

4.
Describe: marsAge
Test: "should correctly output: 1. users age 2. user life expectancy years left, all refactored in Mars years"
expect(marsStats.mars(35, 100)).toEqual("Your Mars stats: Age - 65.8, Expected life - 188, Years left to live - 122.2")

5.
Describe: jupiterAge
Test: "should correctly output: 1. users age 2. user life expectancy years left, all refactored in Jupiter years"
expect(jupiterStats.jupiter(35, 100)).toEqual("Your Jupiter stats: Age - 415.1, Expected life - 1186, Years left to live - 770.9")

6.
Describe: yearsDynamic
Test: "should correctly assign dynamic value to this.yearsLeft, depending on if users age is below or beyond the expected life"
expect(yearsLeft.yearsDynamic(35, 100)).toEqual("Years left to live - 65")
expect(yearsLeft.yearsDynamic(155, 100)).toEqual("You have outlived your life expectancy by 55 years!)

## Known Bugs

No known bugs at this time.

## Support and contact details

_If you run into any issues or have concerns, please reach out at **nathanschrader@icloud.com**_

## Technologies Used

**HTML
CSS
Bootstrap
JavaScript
jQuery
Visual Studio Code
Github**

## Legal

Copyright (c) 2020 **_Nathan Schrader_**

This software is licensed under the MIT license.
