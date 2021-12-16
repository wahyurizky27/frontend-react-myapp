import React from "react";
import { connect } from "react-redux";
import { addNewCompany } from "../../store/actions";

class Companies extends React.Component {
  state = {
    id: Date.now(),
    name: "",
    address: "",
    revenue: "",
    code: "",
    phone: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addNewCompany(this.state);
    this.setState({ name: "", address: "", revenue: "", code: "", phone: "" });
    setTimeout(() => {
      alert("Company created");
    }, 100);
  };

  render() {
    const { name, address, revenue, code, phone } = this.state;
    return (
      <div className="wrapper-company">
        <h3>Create Company</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              <strong>Name:</strong>
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="name"
              value={name}
              required
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Address:</strong>
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="address"
              value={address}
              required
              placeholder="address"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Revenue:</strong>
            </label>
            <input
              onChange={this.handleChange}
              type="number"
              className="form-control"
              id="revenue"
              value={revenue}
              required
              placeholder="revenue"
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Phone No:</strong>
            </label>
            <div className="row">
              <div className="col-md-4">
                <input
                  onChange={this.handleChange}
                  type="number"
                  className="form-control"
                  id="code"
                  value={code}
                  required
                  placeholder="code"
                />
              </div>
              <div className="col-md-8">
                <input
                  onChange={this.handleChange}
                  type="number"
                  className="form-control"
                  id="phone"
                  value={phone}
                  required
                  placeholder="phone"
                />
              </div>
            </div>
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

const mapDispatchToProps = (dispatch) => ({
  addNewCompany: (newCompany) => dispatch(addNewCompany(newCompany)),
});

export default connect(null, mapDispatchToProps)(Companies);
