// Code your solution in this file!
const returnFirstTwoDrivers = function(drivArr) {
    return drivArr.slice(0,2)
}

const returnLastTwoDrivers = function(drivArr) {
    return drivArr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {return fare * multiplier}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivArr, func) {
    return func(drivArr)
}