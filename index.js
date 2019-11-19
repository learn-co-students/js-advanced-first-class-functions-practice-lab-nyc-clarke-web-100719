// Code your solution in this file!
// function logDriverNames(drivers) {
//     drivers.forEach(element => {
//         console.log(element.name)
//     });
// }

function logDriverNames(drivers) {
    drivers.forEach(function (driver) {
        console.log(driver.name);
    });
}


// function logDriversByHometown(drivers, location) {
//     drivers.forEach(element => {
//         if (element.hometown === location) {
//             console.log(element.name);
//         }
//     });
// }

function logDriversByHometown(drivers, location) {
    drivers.forEach(function (driver) {
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    });
}


function driversByRevenue(drivers) {
    return drivers.slice().sort(function(driverA, driverB) {
        return driverA.revenue - driverB.revenue;
    });
}

function driversByName(drivers) {
    return drivers.slice().sort(function(driverA, driverB) {
        return driverA.name.localeCompare(driverB.name);
    });
}

function totalRevenue(drivers) {
    const addRevenue = function(totalRev, driver) {
        return totalRev + driver.revenue;
    }
    return drivers.reduce(addRevenue, 0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}