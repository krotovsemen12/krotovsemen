# krotovsemen

A Node.js module to calculate the phase of the moon based on a given date.

## Installation

You can install this module via npm: `npm install krotovsemen`

## Usage
```javascript
const lunarPhaseCalculator = require('lunar-phase-calculator');

// Example usage
const date = '2024-03-16';
const phase = lunarPhaseCalculator.calculateLunarPhase(date);
console.log(`The moon phase on ${date} is: ${phase}`);
```

