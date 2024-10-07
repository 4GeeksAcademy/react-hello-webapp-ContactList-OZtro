import React,{useContext, useState, useEffect} from "react";
import { Link, useParams,  useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



const EditContact = () => {
    
    const  { actions,  store } = useContext(Context);

    const[edit, setEdit] = useState({})
    
    const params =  useParams();

    const  navigate = useNavigate();

    const searchContacts = () =>{
        let result =  store.contactList.find(contact => contact.id == params.theid);
        setEdit(result);
    }

    const handleChange = (e) =>{
        setEdit({...edit, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () =>{
        let result = await actions.editContact(edit, params.theid)
        if(result){
            navigate("/")
        }
    }

    

    useEffect (() => {
        searchContacts();
    },[store.contactList])




    return(
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12 md-3 pt-3">
                    <h1>Edit contact</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 md-3 pt-3">
                <label>Full Name</label>
                <input onChange={handleChange} value={edit?.name} name='name' type="text" class="form-control" placeholder="Full Name"></input>                
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 md-3 pt-3">
                <label>Email</label>
                <input onChange={handleChange} value={edit?.email} name='email' type="email" class="form-control" placeholder="Enter Email"></input>                
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 md-3 pt-3">
                <label>Phone</label>
                <input onChange={handleChange} value={edit?.phone} name='phone' type="text" class="form-control" placeholder="Enter Phone"></input>                
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 md-3 pt-3">
                <label>Address</label>
                <input onChange={handleChange} value={edit?.address} name='address' type="text" class="form-control" placeholder="Enter Address"></input>                
                </div>
            </div>
            
			<div class="d-grid gap-2 pt-3">
                
				<button onClick={() => handleSubmit()} className="btn btn-primary"><strong>save</strong></button>

                <Link to="/">
                    <p class="pe-none" aria-disabled="true">or get back to contacts</p>
                </Link>

			</div>
			
        
        </div>
    )
}

export default EditContact