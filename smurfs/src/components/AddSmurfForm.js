import React, { useState } from "react";
import { connect } from "react-redux";
import { postData } from "../actions";

const AddSmurfForm = (props) => {
    const [smurfInfo, setSmurfInfo] = useState({
        name: "",
        age: "",
        height: "",
    });

    const smurf = {
        name: smurfInfo.name,
        age: smurfInfo.age,
        height: smurfInfo.height,
    };

    const handleChanges = (e) => {
        const value = e.target.value;
        setSmurfInfo({
            ...smurfInfo,
            [e.target.name]: value,
        });
    };

    const handleSubmit = (e) => {
        props.postData(smurf);
    };

    return (
        <div>
            <h2>Add Smurf Here</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={smurfInfo.name}
                    onChange={handleChanges}
                />
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    name="age"
                    value={smurfInfo.age}
                    onChange={handleChanges}
                />
                <label htmlFor="height">Height:</label>
                <input
                    type="text"
                    name="height"
                    value={smurfInfo.height}
                    onChange={handleChanges}
                />
                <button type="submit">Add Smurf</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isSending: state.isSending,
        error: state.error,
    };
};
export default connect(mapStateToProps, { postData })(AddSmurfForm);
