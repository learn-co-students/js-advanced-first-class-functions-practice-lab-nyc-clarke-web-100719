// Code your solution in this file!
function logDriverNames(drivers){
   drivers.forEach(function(driver){
       console.log(driver.name);
   });
}


function logDriversByHometown(drivers,location){
    drivers.forEach(function(driver){
        if (driver.hometown === location){
            console.log(driver.name);
        }
    });
}

function driversByRevenue(drivers){
    let driverss = Array.from(drivers);
    return driverss.sort(function(driver1, driver2){
        return driver1.revenue - driver2.revenue;
    });
}


function driversByName(drivers){
    let driverss = Array.from(drivers);
    return driverss.sort(function(driver1,driver2){
        return driver1.name.localeCompare(driver2.name);
    });
}

function totalRevenue(drivers){
    
    return drivers.reduce(function(num, driver){
        return (num + driver.revenue); 
    }, 0);
}

function averageRevenue(drivers){
    let driverNum = drivers.length;
    return totalRevenue(drivers)/driverNum;
}