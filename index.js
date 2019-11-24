function logDriverNames(driver) {
    driver.forEach(driver => {
        console.log(driver.name)
    });
};

function logDriversByHometown(driver, location) {
    driver.forEach(driver => {
        if (driver.hometown === location) console.log(driver.name)
    });
};

// driversByRevenue() — Receives an array of driver objects and return
//  a new array of driver objects sorted by their revenue attribute from lowest to highest.

function driversByRevenue(driver) {
    return driver.slice().sort(function(driver1, driver2) {
        return driver1.revenue - driver2.revenue
    });
};

function driversByName(driver) {
    return driver.slice().sort(function(driver1, driver2) {
        return driver1.name.localeCompare(driver2.name)
    });
};

function totalRevenue(driver) {
    let revenueArr = driver.map(driver => driver.revenue)
    return revenueArr.reduce((total, currentValue) => total + currentValue)
};

function averageRevenue(driver) {
    let total = totalRevenue(driver)
    return total/driver.length
};