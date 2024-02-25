# Nopeustesti - Speden Spelit

Release 1.0.0 available in <https://nopeustesti.surge.sh>

## Install and run

```
yarn
yarn dev
```

## Deploy

Automatic deploy on every push to <https://nopeustesti-dev.surge.sh>

Use manually triggered Github Action to bump the version and make a release to version specific domain e.g. <https://nopeustesti-0-1-0.surge.sh>

## Customization

Button order, colors and quantity can be set by modifying the `GameButtonColor` enum. Although `GameButton.css` needs to be adjusted separately to support different colors and quantities.

Initial speed and acceleration speed can be modified with `INITIAL_TICK_INTERVAL` and `SPEED_UP_INTERVAL`

## Specs

Lighting up the colors:

1. Lights up one button/color at a time
2. Starts with a random color
3. When new one lights up the previous one is switched off
4. The speed of lighting up new colors is increased gradually

Pressing the buttons:

1. Buttons need to be pressed in the same order they are lighted up
2. Speed doesn't matter, only order
3. If player presses a wrong button the game ends

Score:

1. Player gets a point with each correct press of a button
2. Score is shown by the counter
3. When the game ends the score is shown
