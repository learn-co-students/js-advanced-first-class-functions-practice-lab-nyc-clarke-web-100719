function logDriverNames(arr) {
    arr.forEach(function(el) {
        console.log(el.name);
    });
}

function logDriversByHometown(arr, loc) {
    arr.forEach(function(el) {
        if (el.hometown === loc)
            console.log(el.name);
    });
}

const driversByRevenue = function(arr) {
    let newArr = arr.slice();
    newArr.sort(function(d1, d2) {
        return d1.revenue - d2.revenue;
    });
    return newArr
}

function driversByName(arr) {
    let newArr = arr.slice();
    newArr.sort(function(d1, d2)  {
        return d1.name.localeCompare(d2.name);
    })
    return newArr
}

function totalRevenue(arr) {
    return arr.reduce(function (total, driver) {
        return total += driver.revenue;
    }, 0);
}

function averageRevenue(arr) {
    let total = arr.reduce(function (total, driver) {
        return total += driver.revenue;
    }, 0);
    return total / arr.length
}