const addNewCompany = (newCompany) => {
	return {
		type : 'CREATE_COMPANY',
		payload: newCompany
	}
}

const getCompanyData = () => {
	return { type : 'GET_COMPANY_DATA' }
}

const deleteCompanyData = (id) => {
	return {
		type : 'DELETE_COMPANY',
		id
	}
}

const addNewOffice = (newOffice) => {
	return {
		type: 'CREATE_OFFICE',
		payload: newOffice
	}
}

const getOfficeData = () => {
	return { type: 'GET_OFFICE_DATA'}
}

const deleteOfficeData = (id) => {
	return {
		type: 'DELETE_OFFICE',
		id
	}
}

export { addNewCompany, getCompanyData, deleteCompanyData, addNewOffice, getOfficeData, deleteOfficeData }