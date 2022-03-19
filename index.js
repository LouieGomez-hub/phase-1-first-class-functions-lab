const returnFirstTwoDrivers = function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const firstTwoDrivers = [drivers[0], drivers[1]];
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const lastTwoDrivers = [drivers[2], drivers[3]];
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier() {
    return function(fare) {
        return fare ** 2;
    }
}

const fareDoubler = function(fare) {
    return fare * 2;
}

const fareTripler = function(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, functionName) {
    if (returnFirstTwoDrivers === functionName)
    return [drivers[0], drivers[1]]
    else return [drivers[2], drivers[3]]
}