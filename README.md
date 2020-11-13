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
Describe: userInput
Test: "Takes in user age and their desired life expectancy"
Expect(userInput("35")).toEqual("35")

2.
Describe: createArray
Test: "Creates an array of integers ranging from 0 to the user's inputed integer"
Expect(createArray("5")).toEqual([0, 1, 2, 3, 4, 5]);

3.
Describe: createString
Test: "Takes array of integers and converts them to an array of strings"
Expect(createString([0, 1, 2, 3, 4, 5])).toEqual(["0", "1", "2", "3", "4", "5"])

4.
Describe: transformString
Test: "Transforms string based on instructed logic given in Project guidelines"
Expect(transformString(["0", "1", "2", "3", "4", "5"])).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"])


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
