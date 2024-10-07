import React, { useContext } from "react";
import "../../styles/Contact.css";
import Card from "../component/Card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Contact = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<div className="d-flex flex-row-reverse">
				<div className="my-2" style={{ 'width': '10rem', 'margin-right':  '4.5rem' }}>
					<Link to="/add-contact">
						<button className="btn btn-success">Add new contact</button>
					</Link>
				</div>
			</div>

			
			{store.contactList.map((item) => {
				return <Card key={item.id} contact={item} />;
			})}
		</div>
	);
};
