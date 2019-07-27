// Write your solution in this file!
// define driver
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
  // need to merge into empty {} for it to be nondestructive
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
  let clone = Object.assign({}, driver)
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  let clone = Object.assign(driver)
  delete clone[key];
  return clone; 
}
