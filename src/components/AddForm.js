import React, { useState } from 'react';
import { connect } from "react-redux";
import { addSmurf, setError } from "../actions";

const initialFormState = {
  name:"",
  position:"",
  nickname:"",
  description:""
}

const AddForm = (props) => {
    const { formError, serverError, addSmurf, setError } = props;

    const [state, setState] = useState(initialFormState);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            return setError("Name, position and nickname fields are required.");
        };
        const smurf = {
          name: state.name,
          position: state.position,
          nickname: state.nickname,
          description: state.description,
        };
        addSmurf(smurf);
        setState(initialFormState);
    }

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
                formError && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {formError}</div>
            }
            {
                serverError && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {serverError}, please try again</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}

const mapStateToStore = state => {
  return ({
    formError: state.formError,
    serverError: state.serverError
  });
};

export default connect(mapStateToStore, { addSmurf, setError })(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summary passed as arguments. Test that a smurf is correctly added when the form is submitted.