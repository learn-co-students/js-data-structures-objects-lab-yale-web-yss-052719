// Write your solution in this file!
const driver = Object.create(null)


function updateDriverWithKeyAndValue(driver, key, value) {
  //  driver[key] = value
    const newDriver = Object.assign({}, driver) 
    newDriver[key] = value
    console.log(driver)
    window.print()
    return newDriver
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver

}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver) 
    delete newDriver[key]


    console.log(driver)
   // window.print()
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}
//console.log(driver); 