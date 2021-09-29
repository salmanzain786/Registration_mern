import { NavLink} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'
import { Button, Container, Row, Col, Card, InputGroup, FormControl,Table,Tooltip,OverlayTrigger } from 'react-bootstrap';
import { motion } from "framer-motion";
import "./Auth.css";

function Registration() {
	const [firstName, set_firstName] = useState("");
	const [lastName, set_lastName] = useState("");
	const [email, set_email] = useState("");
	const [phone, set_phone] = useState("");
	const [address, set_address] = useState("");
	const [password, set_password] = useState("");
	const [confirmPassword, set_confirmPassword] = useState("");


	function handleSubmit(e){ 
		axios.post('http://localhost:8080/add_user', {
			first_name: firstName,
			last_name: lastName,
			email: email,
			phone: phone,
			address: address,
			password: password,
			c_password: confirmPassword,
		  })
		  .then(function (response) {
			console.log(response);
			if(response.data.status == 200){
				swal("Congratulations !", "Your Registration Has Been Succeeded", "success");
			}
			else{

				swal("Opps!", response.data.message, "error");
			} 
		}).catch(function (error){
			console.log(error);
		  })       
   }


  return (
	<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 25,
  }}>
	  <><br/><br/>
			<Container>
			<Row>
				<Card style={{ width: '100%', boxShadow: '5px 10px 10px 0px #c9c9c9' }}>
					<ul class="floatingBoxes">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<Row style={{padding : "10%",zIndex: '9'}}>
						<Col xl>
						<img src="https://t4.ftcdn.net/jpg/03/01/21/01/360_F_301210170_GpDh1OqTHHJuTXx5hfNVzl6mKZ5C0B27.jpg" width="25%"/>
							<h1>Register Here</h1><hr/>
							
							<Container style={{width : '90%'}}>
							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1" style={{borderRadius : '0px'}}><i class="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
								<FormControl
								placeholder="First Name"
								aria-label="first_name"
								name ="first_name"
								tabIndex ="first_name"
								aria-describedby="basic-addon1"
								style={{borderRadius : '0px'}}
								onChange={(e) => set_firstName(e.target.value)}
								/>
							</InputGroup>

							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1" style={{borderRadius : '0px'}}><i class="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
								<FormControl
								placeholder="Last Name"
								aria-label="last_name"
								name ="last_name"
								id ="last_name"
								aria-describedby="basic-addon1"
								style={{borderRadius : '0px'}}
								onChange={(e) => set_lastName(e.target.value)}
								/>
							</InputGroup>

							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1" style={{borderRadius : '0px'}}><i class="fa fa-envelope" aria-hidden="true"></i></InputGroup.Text>
								<FormControl
								placeholder="Email"
								aria-label="email"
								name ="email"
								id ="email"
								aria-describedby="basic-addon1"
								style={{borderRadius : '0px'}}
								onChange={(e) => set_email(e.target.value)}
								/>
							</InputGroup>

							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1" style={{borderRadius : '0px'}}><i class="fa fa-phone" aria-hidden="true"></i></InputGroup.Text>
								<FormControl
								placeholder="Phone"
								aria-label="phone"
								name ="phone"
								id ="phone"
								aria-describedby="basic-addon1"
								style={{borderRadius : '0px'}}
								onChange={(e) => set_phone(e.target.value)}
								/>
							</InputGroup>

							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1" style={{borderRadius : '0px'}}><i class="fa fa-address-card" aria-hidden="true"></i></InputGroup.Text>
								<FormControl
								placeholder="Address"
								aria-label="Address"
								name ="address"
								id ="address"
								aria-describedby="basic-addon1"
								style={{borderRadius : '0px'}}
								onChange={(e) => set_address(e.target.value)}
								/>
							</InputGroup>

							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1" style={{borderRadius : '0px'}}><i class="fa fa-key" aria-hidden="true"></i></InputGroup.Text>
								<FormControl
								placeholder="Password"
								aria-label="Address"
								name ="password"
								id ="password"
								aria-describedby="basic-addon1"
								style={{borderRadius : '0px'}}
								onChange={(e) => set_password(e.target.value)}
								/>
							</InputGroup>

							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1" style={{borderRadius : '0px'}}><i class="fa fa-key" aria-hidden="true"></i></InputGroup.Text>
								<FormControl
								placeholder="Confirm Password"
								aria-label="Address"
								name ="confirm_password"
								id ="confirm_password"
								aria-describedby="basic-addon1"
								style={{borderRadius : '0px'}}
								onChange={(e) => set_confirmPassword(e.target.value)}
								/>
							</InputGroup>

							

							<Button variant="" style={{background : '#0d5a6a', color : "white", borderRadius : '0px'}} onClick={() => handleSubmit()}>Registar</Button><br/>
							<NavLink to="/Login" className="nav-link text-dark">Already a user ?</NavLink>
							</Container>

						</Col>
						<Col>
						<img src="/images/Registar_icon.jpg" width="100%" height="100%" />
							{/* <img src={logo} width="100%" height="100%" /> */}
						</Col>
					</Row>
				</Card>
			</Row>
			</Container><br/><br/>
    	</>
			</motion.div>
  );
}

export default Registration;
