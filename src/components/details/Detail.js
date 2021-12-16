import React from 'react'
import { connect } from 'react-redux'
import OfficeLists from '../offices/OfficeLists'

const Detail = (props) => {
	const { detail, office } = props
	return (
		<div className="container main-wrapper detail-page">
			<h3 className="title">{detail.name}</h3>
			<div className="item-content detail-single-meta">
				<div className="item-meta-data">
					<span className="label">Address:</span>
					<span className="value">{detail.address}</span>
				</div>
				<div className="item-meta-data">
					<span className="label">Revenue:</span>
					<span className="value">{detail.revenue}</span>
				</div>
				<div className="item-meta-data">
					<span className="label">Phone</span>
					<span className="value">{`(${detail.code}) ${detail.phone}`}</span>
				</div>
				<button className="btn btn-light" onClick={() => props.history.goBack()}>Back to overview</button>
			</div>
			<h3>Offices</h3>
			<br/>
			<OfficeLists office={office}/>
		</div>
	)
}

const mapStateToProps = (state, props) => {
	const id = props.match.params.id
	const details = state.company
	const detail = details.find(item => item.id === parseInt(id))
	const office = state.office && state.office.filter( item => parseInt(item.cid) === parseInt(id))
	return {
		detail: detail,
		office: office
	}
}

export default connect(mapStateToProps)(Detail)