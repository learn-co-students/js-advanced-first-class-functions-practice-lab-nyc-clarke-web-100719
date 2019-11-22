// Code your solution in this file!

const log = {
  msg: (info) => {
    console.log(info);
  },
  line: () => {
    const arrLine = new Array(50).fill("-");
    console.log(arrLine.join(""));
  }
};


const logDriverNames = (arrObjDrivers) => {
  arrObjDrivers.forEach((objDriver) => {
    log.msg(objDriver.name);
  });
};

const logDriversByHometown = (arrObjDrivers, strHometown) => {
  arrObjDrivers.forEach((objDriver) => {
    if(objDriver.hometown === strHometown){log.msg(objDriver.name)}
  });
};

const driversByRevenue = (arrObjDrivers) => {
  return arrObjDrivers.slice().sort((a,b) => {
    return a.revenue - b.revenue;
  });
};

const driversByName = (arrObjDrivers) => {
  return arrObjDrivers.slice().sort((a,b) => {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = (arrObjDrivers) => {
  return arrObjDrivers.reduce((accumulator, objDriver)  => {
    return objDriver.revenue + accumulator;
  }, 0);
};


const averageRevenue = (arrObjDrivers) => {
  return totalRevenue(arrObjDrivers) / arrObjDrivers.length;
};
