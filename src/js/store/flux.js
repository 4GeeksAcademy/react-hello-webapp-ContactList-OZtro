const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: 'https://playground.4geeks.com/contact',

			contactList: [],
			
		},
		actions: {


			deleteContact: async (id) =>{
				const store =  getStore();
				try {
					const response = await  fetch(`${store.urlBase}/agendas/OZtro/contacts/${id}`, {
						method: 'DELETE',
					})
					if(response.ok){
						getActions().getAllContacts()
					}

				} catch (error) {
					console.log(error)
				}
			},




			editContact: async (contact, id) =>{
				const store  = getStore();
				try {
					const response = await fetch(`${store.urlBase}/agendas/OZtro/contacts/${id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(contact),
					})
					if(response.ok){
						getActions().getAllContacts()
						return true
					}
					
				} catch (error) {
					console.log(error);
					
				}

			},

			addNewContact: async (contact) => {
				const store = getStore()
				try {
					const response = await fetch(`${store.urlBase}/agendas/OZtro/contacts`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(contact),
					})
					if(response.ok){
						getActions().getAllContacts()
					}
					
				} catch (error) {
					console.log(error)
				}

			},


			//Aqui estoy creando mi agenda API REST
			createAgenda: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/agendas/OZtro`,{
						method: 'POST',
					})
					if(response.ok){
						console.log('success agenda')
					} else {
						console.log('error agenda')
					}
				} catch (error) {
					console.log(error)
				}
			},
			

			// Aqui consultando mis contactos en mi Agenda
			getAllContacts: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/agendas/OZtro/contacts`)
					if(response.ok){	
						// Si es positiva la respuesta, me guardas mis contactos en mi contactList:[]													
						let  data = await response.json()
						setStore({contactList: data.contacts})
						console.log(response)
					} else if (response.status == 404){
						// si mi resuesta es 404, crea mi agenda createAgenda()
						getActions().createAgenda()
					}else {
						console.log('error')
					}			
				} catch (error) {
					console.lor(error)
				}
			},
		}
	};
};

export default getState;
