// Code your solution in this file!
// describe('index.js', function () {
//     const drivers = [
//       { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//       { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//       { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//       { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//       { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
//     ];
  
function logDriverNames(drivers){
    drivers.forEach(function(driver){
        console.log(driver.name)
    });
}

function logDriversByHometown(drivers, location){
    drivers.forEach(function(driver){
        if (driver.hometown == location){
            console.log(driver.name)
        }
    });
}

function driversByRevenue(drivers){
    // let arr = [drivers]
        // drivers.forEach(function(driver){
        //     arr.push(driver.revenue)
        // })
        return drivers.slice().sort(function(a, b){
            return a.revenue - b.revenue
        })

}

function driversByName(drivers){
    return drivers.slice().sort(function(a, b){
        
        return (a.name.localeCompare(b.name));
      
    })
}

function totalRevenue(drivers){
    let revenueHash= drivers.reduce(function(acc,value){
        return {revenue: acc.revenue + value.revenue}
    })
    return revenueHash.revenue;
}

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;
}