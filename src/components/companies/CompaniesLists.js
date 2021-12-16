import React from 'react'
import { connect } from 'react-redux'
import { deleteCompanyData } from '../../store/actions';

const CompaniesLists = (props) => {
	if(!props.company || props.company.length === 0) return <div>There is no companies created yet</div>

	const confirmDelete = (id) =>{
		if(window.confirm('Are You Sure Delete the Company and related office?')){
			props.deleteCompanyData(id)
		}
	}

	return (
		<div className="company-item-wrapper">
			<div className="row">
			{
				props.company && props.company.map(item => (
					<div className="col-md-6" key={item.id}>
						<div className="item">
							<div className="item-header">
								<h4 onClick={() => props.history.push(`/company/${item.id}`)}>{item.name}</h4><span onClick={() => confirmDelete(item.id)}>x</span>
							</div>
							<div className="item-content">
								<div className="item-meta-data">
									<span className="label">Address:</span>
									<span className="value">{item.address}</span>
								</div>
								<div className="item-meta-data">
									<span className="label">Revenue:</span>
									<span className="value">{item.revenue}</span>
								</div>
								<div className="item-meta-data">
									<span className="label">Phone</span>
									<span className="value">{`(${item.code}) ${item.phone}`}</span>
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

const mapDispatchToProps = (dispatch) => ({
	deleteCompanyData: (id) => dispatch(deleteCompanyData(id))
})

export default connect(null, mapDispatchToProps)(CompaniesLists)
