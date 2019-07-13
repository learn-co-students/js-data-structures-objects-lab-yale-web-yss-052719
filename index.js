// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   return Object.assign(driver, {[key]: value})
}


function deleteFromDriverByKey(driver, key){
    const driver1 = Object.assign({}, driver)
    delete driver1[key];
    return driver1
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}