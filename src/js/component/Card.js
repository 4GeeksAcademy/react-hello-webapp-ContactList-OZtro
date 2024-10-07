import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export default function Card(props) {

    const { actions } = useContext(Context);

    const handleDelete = (id) => {
        console.log(id)
      actions.deleteContact(id);
    };

    const { contact } = props


  

    return (

        <div className="card m-auto" style={{ 'width': '70rem' }}>

            <div className="row g-0">

                <div className="col-md-4 p-2 ">
                    <img src='https://fastly.picsum.photos/id/832/200/200.jpg?hmac=V4CRQyK7KVP2wBYsEhpcpP8wSdwyU5c-yTeMm37uOOo' className="img-fluid rounded-circle" alt="" />
                </div>

                <div className="col-md-6 mt-3" id="infoUsuario">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>

                        <div className="mt-3">
                            <i className="fa-solid fa-location-dot me-3"></i>
                            <spam>{contact.address}</spam>
                        </div>

                        <div className="mt-3">
                            <i className="fa-solid fa-phone-flip me-3"></i>
                            <spam>{contact.phone}</spam>
                        </div>

                        <div className="mt-3">
                            <i className="fa-solid fa-envelope me-3"></i>
                            <spam>{contact.email}</spam>
                        </div>

                    </div>
                </div>

                <div className='col-md-1 mt-3'>
                    <i onClick={() => handleDelete(contact.id)} style={{ cursor: "pointer" }} className="fa-solid fa-trash-can me-3"></i>
                </div>
                
                <div className='col-md-1 mt-3'>
                    <Link to={`/edit-contact/${contact.id}`}>
                        <i class="text-black fa-solid fa-pencil"></i>
                    </Link>

                </div>
            </div>
        </div>

    )

}; 