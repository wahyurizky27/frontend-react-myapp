import React from 'react'
import { connect } from 'react-redux'
import Companies from '../companies/Companies'
import Office from '../offices/Office'
import CompaniesLists from '../companies/CompaniesLists'

const Overview = (props) => {
	return (
		<div className="container main-wrapper">
			<div className="row block-form">
				<div className="col-md-6 block-company">
					<Companies />
				</div>
				<div className="col-md-6 block-office">
					<Office />
				</div>
			</div>
			<div className="block-data-company">
				<h3>Companies</h3>
				<br />
				<CompaniesLists company={props.company} history={props.history}/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	company: state.company,
	office: state.office
})

export default connect(mapStateToProps)(Overview)