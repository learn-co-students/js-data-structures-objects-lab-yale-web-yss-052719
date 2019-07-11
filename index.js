let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
	let updated = {...driver }
	updated[key] = value
	return updated
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
	let updated = driver
	updated[key] = value
	return updated
}

function deleteFromDriverByKey(driver, key){
	let updated = {... driver }
	delete updated[key]
	return updated
}
	

function destructivelyDeleteFromDriverByKey(driver, key){
	delete driver[key]
	return driver
}