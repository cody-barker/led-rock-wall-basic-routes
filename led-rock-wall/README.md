# LED Rock Wall

## Electrical

### LED Specs

Each LED uses 20mA per RGB value, so 60mA at peak brightness (255, 255, 255).

For example:

- a CRGB value of (0, 0, 255) uses 20mA.
- a CRGB value of (0, 255, 255) uses 40mA.
- a CRGB value of (255, 255, 255) uses 60mA.

To maximize the available number of LEDs and to power the wall safely, it is best to limit the current to each LED to 20mA.

Use a resistor of 330 ohms between the arduino and the LED data strip pin to reduce noise.

### Maximum Current Loads for Arduino

#### USB Cable

- ~400mA
- ~20 LEDs

#### 9-12v Barrel Connector

- ~900mA
- ~45 LEDs

#### External 5v 6A Power Supply

- > 900mA (assuming 6000mA)
- Use a capacitor of 100 microferrets across the 5v and ground

### Creating Routes

Define the new route:
- as an array
- with a unique name
- with the number of LEDs you wish to turn on
- with the LED numbers as elements in the array

For example:

- int medium[5] = {1, 4, 7, 9, 13}
- this creates an array of integers, called medium, with 5 elements, defined as LEDS numbers 1, 4, 7, 9 and 13.