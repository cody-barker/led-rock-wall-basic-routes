#include <FastLED.h>

#define LED_PIN 7
#define NUM_LEDS 198

CRGB leds[NUM_LEDS];

// Your Custom Routes //
int easy[8] = {2, 5, 7, 9, 13, 15, 18, 20};
int medium[5] = {0, 3, 6, 8, 10};
int hard[4] = {1, 5, 10, 19};

void setup() {

  FastLED.addLeds<WS2812, LED_PIN, GRB>(leds, NUM_LEDS);

}

void loop() {
// Change Routes by Changing the Name in the For Loop //
// Change CRGB value to change color. Keep 2 values 0 for safety //
  for (int i : hard) {
    leds[i] = CRGB(0, 0, 255);
    FastLED.show();
    delay(500);
  }
}