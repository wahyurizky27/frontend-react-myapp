const persistData = (key, data) => {
	let value = JSON.stringify(data)
	localStorage.setItem(key, value)
}

const getData = (key) => {
	return JSON.parse(localStorage.getItem(key))
}

export { persistData, getData }