import React, { Component } from "react";

export default class FormThemSV extends Component {

    state = {
        id: '',
        fullName: '',
        phoneNumber: '',
        email: ''
    }

    handleChange = (e) => {
        // If the value input content changed when users type in every time, get that value
        let tagInput = e.target;
        let {name, value} = tagInput;

        this.setState({
            [name]:value
        }, () => {
            console.log(this.state);
        })
    }

  render() {
    return (
      <div className="container mb-4">
        <div className="card text-start">
          <div className="card-header bg-dark text-white">
            <h3>Thông Tin Sinh Viên</h3>
          </div>
          <div className="card-body">
            <form action="">
                <div className="row mb-3">
                    <div className="form-group col-6">
                        <span>Mã SV</span>
                        <input className="form-control" type="text" name="id" value={this.state.id} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-6">
                        <span>Họ tên</span>
                        <input className="form-control" type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group col-6">
                        <span>Số điện thoại</span>
                        <input className="form-control" type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-6">
                        <span>Email</span>
                        <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success">Thêm sinh viên</button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}