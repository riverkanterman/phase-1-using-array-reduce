const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce((previousValue, currentValue) => previousValue + currentValue,
)

console.log(totalBatteries)


/*const sum = batteryBatches.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
     totalBatteries
 );

 console.log(sum)*/