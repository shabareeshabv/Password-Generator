import React, { useState } from "react";
import { PasswordService } from "../services/passwordservice";  // Update the path accordingly


const PasswordGenerator = () => {
  let [state, setState] = useState({
    generatedPassword: '',
    passwordlength: 20,
    symbols: false,
    numbers: false,
    lower: false,
    upper: false
  });

  let updateInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  let updateCheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  }

  let submit = (event) => {
    event.preventDefault();
    let passwordObj = PasswordService.getPasswordObj(state);
    let thepassword=PasswordService.generatePassword(passwordObj,state.passwordlength);
setState({...state,generatedPassword:thepassword});
    // Now you can use the passwordObj to generate the complete password
  };

  return (
    <React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card shadow-lg">
                    <div className="card-header bg-warning p-3">
                        <p className="h4">
                            Password Generator
                        </p>
                    </div>
                    <div className="card-body bg-warning">
                        <form onSubmit={submit}>
                            <div className="mb-2">
                                <div className="input-group">
                                    <span className="input-group-text"> Password</span>
                                    <input
                                        value={state.generatedPassword}
                                        onChange={updateInput}
                                        name="generatedPassword"
                                        type="text" className="form-control" placeholder="generated password" />
                                    <span className="input-group-text"><i className="fa fa-clipboard"></i></span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="input-group">
                                    <input
                                        required={true}
                                        value={state.passwordlength}
                                        onChange={updateInput}
                                        name="passwordlength" type="number" className="form-control" placeholder="password length" />
                                    <span className="input-group-text">password length</span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="input-group ">
                                    <span className="input-group-text bg-white ">
                                        <input
                                            onChange={updateCheck}
                                            name="symbols" type="checkbox" className="form-check-input" />
                                    </span>
                                    <input type="text" disabled={true} className="form-control" placeholder="Symbols" />
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="input-group ">
                                    <span className="input-group-text bg-white ">
                                        <input
                                            onChange={updateCheck}
                                            name="numbers" type="checkbox" className="form-check-input" />
                                    </span>
                                    <input type="text" disabled={true} className="form-control" placeholder="Number" />
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="input-group ">
                                    <span className="input-group-text bg-white ">
                                        <input
                                            onChange={updateCheck}
                                            name="lower" type="checkbox" className="form-check-input" />
                                    </span>
                                    <input type="text" disabled={true} className="form-control" placeholder="Letters" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="input-group ">
                                    <span className="input-group-text bg-white ">
                                        <input
                                            onChange={updateCheck}
                                            name="upper" type="checkbox" className="form-check-input" />
                                    </span>
                                    <input type="text" disabled={true} className="form-control" placeholder="Uppercase Letter" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <input type="submit" value="Generate" className="btn btn-outline-dark" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>
);
};

export default PasswordGenerator;
