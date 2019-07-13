// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value)
{
  var result = { ...driver };
  result[key] = value;

  return result;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key)
{
  let result = { ...driver };
  delete result[key]
  return result;
}

function destructivelyDeleteFromDriverByKey(driver, key)
{
  delete driver[key];
  return driver;
}
