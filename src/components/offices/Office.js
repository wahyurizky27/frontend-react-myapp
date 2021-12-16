import React from "react";
import { connect } from "react-redux";
import { addNewOffice } from "../../store/actions";

class Office extends React.Component {
  state = {
    id: Date.now(),
    name: "",
    latitude: "",
    longitude: "",
    startdate: "",
    cid: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addNewOffice(this.state);
    this.setState({
      name: "",
      latitude: "",
      longitude: "",
      startdate: "",
      cid: "",
    });
    setTimeout(() => {
      alert("Office created");
    }, 100);
  };

  render() {
    const { company } = this.props;
    const { name, latitude, longitude, startdate, cid } = this.state;
    return (
      <div className="office-wrpper">
        <h3>Create Office</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={this.handleChange}
              value={name}
              required
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Location:</strong>
            </label>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="latitude"
                  onChange={this.handleChange}
                  required
                  value={latitude}
                  placeholder="latitude"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  onChange={this.handleChange}
                  required
                  value={longitude}
                  placeholder="longitude"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>
              <strong>Office Start Date:</strong>
            </label>
            <input
              type="date"
              className="form-control"
              id="startdate"
              onChange={this.handleChange}
              required
              value={startdate}
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Select Company:</strong>
            </label>
            <select
              className="form-control"
              id="cid"
              onChange={this.handleChange}
              required
              value={cid}
            >
              <option>Select Company</option>
              {company &&
                company.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="btn-container d-grid">
            <button type="submit" className="btn btn-secondary">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  company: state.company,
});

const mapDispatchToProps = (dispatch) => ({
  addNewOffice: (newOffice) => dispatch(addNewOffice(newOffice)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Office);
