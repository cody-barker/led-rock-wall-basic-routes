# LED Rock Wall

## Electrical

### LED Specs

Each LED uses 20mA per RGB, so 60mA at peak brightness.

For example:
- a CRGB value of (0, 0, 255) uses 20mA.
- a CRGB value of (255, 255, 255) uses 60mA.

To power the wall safely, it is best to limit the CRGB values to a single color band, like (0, 0, 255).

Use a resistor of 330ohms between the arduino and the LED data strip pin.

### Max Current Load for Arduino

#### USB Cable

- ~400mA
- ~20 LEDs

#### 9-12v Barrel Connector

- ~900mA
- ~45 LEDs

#### External 5v 6A Power Supply

- > 900mA (assuming 6000mA)
- Use a capacitor of 100 microferrets across the 5v and ground






