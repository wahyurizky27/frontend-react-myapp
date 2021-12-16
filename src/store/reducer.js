import { getData, persistData } from './localstorage'

const initState = {
	company: [],
	office : []
}

const Reducer = (state = initState, action) => {
	let company = state.company || []
	let office = state.office || []

	switch (action.type) {
		case 'GET_COMPANY_DATA' :
			return {
				...state,
				company: getData('company')
			}
			
		case 'CREATE_COMPANY' :
			company.push(action.payload)
			persistData('company', company)

			return {
				...state,
				company: [...company]
			}

		case 'DELETE_COMPANY' :
			let newData = company.filter(item => item.id !== action.id)
			let newOfficeData = office.filter(item => parseInt(item.cid) !== action.id)
			persistData('company', newData)
			persistData('office', newOfficeData)

			return {
				...state,
				company: [...newData],
				office: [...newOfficeData]
			}

		case 'GET_OFFICE_DATA' :
			return {
				...state,
				office: getData('office')
			}

		case 'CREATE_OFFICE' :
			office.push(action.payload)
			persistData('office', office)

			return {
				...state,
				office: [...office]
			}

		case 'DELETE_OFFICE' :
			let newOffice = office.filter(item => item.id !== action.id)
			persistData('office', newOffice)

			return {
				...state,
				office: [...newOffice]
			}
		default :
			return state
	}
}

export default Reducer