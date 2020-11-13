# _Mr. Roboger's Neighborhood_

#### _Web form to transform user's inputted number, 10.30.2020_

#### By _**Nathan Schrader**_

## Description

_This web application will take a number from a user and return a range of numbers from 0 to the user inputted number with the following exceptions:_
    *   Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
    *   Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
    *   Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
    
These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example:
    *   The number 13 should be replaced with "Won't you be my neighbor?"
    *   The number 21 should be replaced with "Boop"
    *   The number 32 should be replaced with "Won't you be my neighbor?"
    
A user should be able to enter a new number and see new reults over and over again.

**Example:** if a user inputs a inputs a **5**, the program should display a list of values: **"0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5** 

## Setup/Installation Requirements

* _Clone this repository_
* _Open a simple HTTP server in the top level of the cloned directory. For a mac, run the following commanad in your terminal:_
    `python -m SimpleHTTPServer`
* _Then open your web browser of choice to localhost:8800_

## Specs

1.
Describe: userInput
Test: "Takes in user input, converts to integer and stores it in a variable"
Expect(userInput("5")).toEqual([5])

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
