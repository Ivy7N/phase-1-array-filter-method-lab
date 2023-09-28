// Code your solution here
function findMatching(drivers, query){
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}
const drivers = ["Tom", "Peter", "Bob", "Alex"];
const matchingDrivers = findMatching(drivers, "ALEX");
console.log(matchingDrivers);

function fuzzyMatch(drivers, query){
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}
const fuzzyMatchingDrivers = fuzzyMatch(drivers, "PETER");
console.log(fuzzyMatchingDrivers);

function matchName(drivers, query){
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());   
}
const nameMatchingDrivers = matchName(driverObjects, "ALEX");
console.log(nameMatchingDrivers);

const driverObjects = [
    {name:"Tom", hometown: "Canada"},
    {name:"Peter", hometown: "Japan"},
    {name:"Bob", hometown: "Califonia"},
    {name:"Alex", hometown: "New York"},
];
