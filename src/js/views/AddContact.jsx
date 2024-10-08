import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const initialState = {
    name: "",
    email: "",
    address: "",
    phone: "",
};

const AddContact = () => {
    const { actions } = useContext(Context);
    const [newContact, setNewContact] = useState(initialState);

    const  navigate = useNavigate();

    const handleChange = (e) => {
        setNewContact({
            ...newContact,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
       let result = await actions.addNewContact(newContact);
        navigate("/")
    }

    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12 md-3 pt-3">
                    <h1>Add a new contact</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 md-3 pt-3">
                    <label>Full Name</label>
                    <input
                        onChange={handleChange}
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 md-3 pt-3">
                    <label>Email</label>
                    <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 md-3 pt-3">
                    <label>Phone</label>
                    <input
                        onChange={handleChange}
                        name="phone"
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 md-3 pt-3">
                    <label>Address</label>
                    <input
                        onChange={handleChange}
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                    />
                </div>
            </div>

            <div className="d-grid gap-2 pt-3">

                <button onClick={() => handleSubmit()} className="btn btn-primary"><strong>save</strong></button>

                <Link to="/">
                    <p className="pe-none" aria-disabled="true">
                        or get back to contacts
                    </p>
                </Link>
            </div>

        </div>
    )
}

export default AddContact
