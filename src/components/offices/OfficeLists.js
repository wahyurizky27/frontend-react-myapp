import React from 'react'
import { connect } from 'react-redux'
import { deleteOfficeData } from '../../store/actions'

const OfficeLists = (props) => {
	if(!props.office || props.office.length === 0) return <div>There is no office created yet</div>

	const changeDateFormat = (date) => {
		const splitDate = date.split('-')
		const formattedDate = splitDate[1]+'/'+splitDate[2]+'/'+splitDate[0]
		return formattedDate
	}

	const confirmDelete = (id) => {
		if(window.confirm('Delete this office?')){
			props.deleteOfficeData(id)
		}
	}
	return (
		<div className="company-item-wrapper">
			<div className="row">
			{
				props.office && props.office.map(item => (
					<div className="col-md-6" key={item.id}>
						<div className="item">
							<div className="item-header">
								<h4>{item.name}</h4><span onClick={() => confirmDelete(item.id) }>x</span>
							</div>
							<div className="item-content">
								<div className="item-meta-data">
									<span className="label">Location:</span>
									<span className="value">Lat - {item.latitude}</span>
									<span className="value">Log - {item.longitude}</span>
								</div>
								<div className="item-meta-data">
									<span className="label">Office Start Date:</span>
									<span className="value">{changeDateFormat(item.startdate)}</span>
								</div>
							</div>
						</div>
					</div>
				))
			}
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispath) => ({
	deleteOfficeData: (id) => dispath(deleteOfficeData(id))
})
export default connect(null, mapDispatchToProps)(OfficeLists)