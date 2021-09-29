import { NavLink} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'
import { Button, Container, Row, Col, Card, InputGroup, FormControl,Table,Tooltip,OverlayTrigger } from 'react-bootstrap';



function Contact() {
	
	const rows = []
	const[api, apiset] = useState(rows);
	 // useEffect(() => {
	 // axios.get(`http://localhost/react_php/all-user.php`)
  //     .then(res => {
  //       const persons = res.data;
  //       let users = persons.users; 
  //       apiset(users);
  //     })
  // },[api])

	const [sendRequest, setSendRequest] = useState(true);
	  useEffect(() => {
	    if(sendRequest){
	       axios.get(`http://localhost/react_php/all-user.php`)
		      .then(res => {
		        const persons = res.data;
		        let users = persons.users; 
		        console.log(users);
		        apiset(users);
		      })
	       setSendRequest(false);
	    }
	  },
	  [sendRequest]);



	function createData(id, user_name, user_email) {
	  return {id, user_name, user_email};
	}

	const [name, newName] = useState("");
	const [email, newEmail] = useState("");
	const [phone, newPhone] = useState("");
	const [address, newAddress] = useState("");

	


	 const[msg, setmsg] = useState("");
    const success_Msg = "Data Add Successfully";
    const error_Msg = "Data Failed";



	 function handleSubmit(e){
	 	if(name != "" && email != ""){
	 		let formData = new FormData();
		    formData.append('post_name', name)
		    formData.append('post_email', email)
		    formData.append('phone', phone)
		    formData.append('address', address)
		    formData.append('active', "0")
		    axios({
            method: 'post',
            url: 'http://localhost/react_php/add-user.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
	        })
	        .then(function (response) {
	            console.log(response);
	            setmsg(success_Msg);
		   		swal("Success!", "Your Data Has been Saved to Database!", "success");
		   		document.getElementById('name').value = "";
	    		document.getElementById('email').value = "";
	    		document.getElementById('phone').value = "";
	    		document.getElementById('address').value = "";
	    		setSendRequest(true)

	        })
	        .catch(function (response) {
	            console.log(response)
	            setmsg(error_Msg);
	        });
	 	}else{
			swal("Failed!", "Validation Error!", "error");
	 	}         
    }


    function handleDelete(id){
    	swal({
			  title: "Are you sure?",
			  text: "Once deleted, you will not be able to recover this file!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			})
			.then((willDelete) => {
			  if (willDelete) {
				let formData = new FormData();
			    formData.append('post_id', id)
		    	 axios({
		            method: 'post',
		            url: 'http://localhost/react_php/delete-user.php',
		            data: formData,
		            config: { headers: {'Content-Type': 'multipart/form-data' }}
		        })
		        .then(function (response) {
		            //handle success
		            console.log(response);
		            setmsg(success_Msg);
		            swal("Poof! Your file has been deleted!", {
					      icon: "success",
					    });
		    		setSendRequest(true)
		        
		        })
		        .catch(function (response) {
		            console.log(response)
		            setmsg(error_Msg);
		        });
			    
			  } else {
			    swal("Your file is safe!");
			  }
			});
    }





    function  handleEdit(id){
    	document.getElementById('edit_btn').style.display="block"
    	document.getElementById('add_btn').style.display="none"
		let formData = new FormData();
	    formData.append('post_id', id);
	     axios({
            method: 'post',
            url: 'http://localhost/react_php/get-user.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            const data  = response.data.data;
            console.log(data.map);
            data.map((res) => (
            	document.getElementById('id').value = res.id,
            	document.getElementById('name').value = res.user_name,
            	document.getElementById('email').value = res.user_email,
            	document.getElementById('phone').value = res.phone,
            	document.getElementById('address').value = res.address
            	)
            );   
        })
        .catch(function (response) {
            console.log(response)
        });
    }


     function  handleView(id){
     	let formData = new FormData();
	    formData.append('post_id', id);
	     axios({
            method: 'post',
            url: 'http://localhost/react_php/get-user.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            const data  = response.data.data;
            console.log(data.map);
            data.map((res) => (
            	swal({
					  content: <div><table className="table table-bordered"><tr><th colSpan="2">View Data</th></tr><tr><th>Name</th><td>{res.user_name}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr><tr><th>Email</th><td>{res.user_email}</td></tr></table></div>,
					  buttons: {
					    delete: "Delete!",
					    cancel: true,
					  },
					}).then((value) => {
					  	switch (value) {
					 
					    case "delete":
					    	{handleDelete(id)}
					      break;
					  }
					})
            	)
            );   
        })
        .catch(function (response) {
            console.log(response)
        });
    }


    function SubmitEdit(){
    	let id = document.getElementById('id').value;
    	let name = document.getElementById('name').value;
    	let email = document.getElementById('email').value;
    	let phone = document.getElementById('phone').value;
    	let address = document.getElementById('address').value;
    	let formData = new FormData();
	    formData.append('post_id', id);
	    formData.append('post_name', name);
	    formData.append('post_email', email);
	    formData.append('phone', phone);
	    formData.append('address', address);
	    formData.append('active', '0');
	     axios({
            method: 'post',
            url: 'http://localhost/react_php/update-user.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
        		document.getElementById('name').value = "";
        		document.getElementById('email').value = "";
        		document.getElementById('edit_btn').style.display="none"
		    	document.getElementById('add_btn').style.display="block"
	    		setSendRequest(true)
	            swal("Success!", "Your Data Has been Updated!", "success");
        })
        .catch(function (response) {
            console.log(response)
        });
    }



	function show_message(para,message) {
		if(para == 1){
		  var x = document.getElementById("success_msg");
		}else{
		  var x = document.getElementById("error_msg");
		}
	  if (x.style.display === "none") {
	    x.style.display = "block";
	    x.innerText = message;
	  } else {
	    x.style.display = "none";
		x.innerText = message;
	  }
	}

	const Edit_tip = (props) => (
		  <Tooltip id="button-tooltip" {...props}>
		    Edit
		  </Tooltip>
		);


	

  return (
    	<>
			  <Row>
			    <Card style={{ width: '100%' }}>
				  <Card.Header className="text-left"><strong>USERS</strong></Card.Header>
				  <Card.Body>
				  		<Row>
				  			<Col>
					  			<input type="hidden" id="id"  />
					  			<InputGroup className="mb-3">
								    <InputGroup.Text id="basic-addon1"><i class="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
								    <FormControl placeholder="Name" aria-label="Username" id="name" aria-describedby="basic-addon1" onChange={(e) => newName(e.target.value)} />
								 </InputGroup>
				  			</Col>

				  			<Col>
					  			<InputGroup className="mb-3">
								    <InputGroup.Text id="basic-addon1"><i class="fa fa-envelope" aria-hidden="true"></i></InputGroup.Text>
								    <FormControl placeholder="Email" aria-label="Username" id="email" aria-describedby="basic-addon1" onChange={(e) => newEmail(e.target.value)} />
								 </InputGroup>
				  			</Col>

				  			<Col>
					  			<InputGroup className="mb-3">
								    <InputGroup.Text id="basic-addon1"><i class="fa fa-phone" aria-hidden="true"></i></InputGroup.Text>
								    <FormControl placeholder="Phone" aria-label="Username" id="phone" aria-describedby="basic-addon1" onChange={(e) => newPhone(e.target.value)} />
								 </InputGroup>
				  			</Col>

				  			<Col>
					  			<InputGroup className="mb-3">
								    <InputGroup.Text id="basic-addon1"><i class="fa fa-address-card" aria-hidden="true"></i></InputGroup.Text>
								    <FormControl placeholder="Address" aria-label="Username" id="address" aria-describedby="basic-addon1" onChange={(e) => newAddress(e.target.value)}/>
								 </InputGroup>
				  			</Col>

				  			<Col id="add_btn">
					  			<Button variant="primary" className="text-left" onClick={() => handleSubmit()}>Add</Button>
				  			</Col>

				  			<Col id="edit_btn" style={{display:"none"}}>
					  			<Button variant="primary" className="text-left" onClick={() => SubmitEdit()}>Edit</Button>
				  			</Col>
				  		</Row>

				  		<Row>
				  			<Col>
				  				<Table striped bordered hover size="sm">
								  <thead>
								    <tr>
								      <th>Name</th>
										<th>Email</th>
										<th>Phone</th>
										<th>Address</th>
										<th>Active</th>
										<th>Action</th>
								    </tr>
								  </thead>
								  <tbody>
								    {api.map((row) => (
										<tr key={row.id}>
											<td>{row.user_name}</td>
											<td>{row.user_email}</td>
											<td>{row.phone}</td>
											<td>{row.address}</td>
											<td>{row.status}</td>
											<td className="actions">
												<a href="#top" onClick={() => handleEdit(row.id)}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>&nbsp;
												<button className="text-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top"  onClick={() => handleDelete(row.id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>&nbsp;
												<span  className="text-primary" onClick={() => handleView(row.id)}><i class="fa fa-eye" aria-hidden="true"></i></span></td>
										</tr>
									))}
								    
								  </tbody>
								</Table>
				  			</Col>
				  		</Row>
				  </Card.Body>
				</Card>
			  </Row>
    	</>
  );
}

export default Contact;
