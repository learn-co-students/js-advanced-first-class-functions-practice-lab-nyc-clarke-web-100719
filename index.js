// Code your solution in this file!

function logDriverNames(drivers) {
    // ES6 WAY
    //  drivers.forEach(element => {
    //     console.log(element.name);
    // });
    //ES5 WAY
    drivers.forEach(function(ele){
        console.log(ele.name);
        
    });
}

function logDriversByHometown(drivers, town) {
     return drivers.filter(function (obj) {
        if (obj.hometown === town) {
             console.log(obj.name);
        }
    });
}

 function driversByRevenue(drivers) {
     return drivers.slice().sort(function (ele1, ele2) {
        return ele1.revenue - ele2.revenue;
    });
    
}

function driversByName(drivers) {
    return drivers.slice().sort(function (ele1, ele2) {
        return ele1.name.localeCompare(ele2.name);
});
}

function totalRevenue(drivers) {
    return drivers.reduce(function (acu, ele) {
       return  acu += ele.revenue; 
    }, 0);
}

function averageRevenue(drivers) {
    let sum = totalRevenue(drivers) ;
    return sum / drivers.length;
}