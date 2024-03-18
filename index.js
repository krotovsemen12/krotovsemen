const moment = require('moment');

// Function to calculate lunar phase
function calculateLunarPhase(date) {
    const moonPhases = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];
    const phasesPerCycle = 29.53; // Average number of days per lunar cycle
    const startDate = moment('2000-01-06'); // Known new moon date for easy calculation
    const daysSinceStart = moment(date).diff(startDate, 'days');
    const phaseIndex = Math.floor((daysSinceStart / phasesPerCycle) * moonPhases.length) % moonPhases.length;
    return moonPhases[phaseIndex];
}

module.exports = {
    calculateLunarPhase
};
