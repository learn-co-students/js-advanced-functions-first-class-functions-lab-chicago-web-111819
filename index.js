const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
]

const createFareMultiplier = (multiplier) => {
    return (value) => {
        return value*multiplier
    }
}


const fareDoubler = (fare) => {
    return fare*2
}

const fareTripler = (fare) => {
    return fare*3
}

const selectDifferentDrivers = (arr, fn) => {
    if (fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arr)
    } else {
        return returnLastTwoDrivers(arr)
    }
}