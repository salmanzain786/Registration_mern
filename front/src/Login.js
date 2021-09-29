import { NavLink} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'
import { Button, Container, Row, Col, Card, InputGroup, FormControl,Table,Tooltip,OverlayTrigger } from 'react-bootstrap';
import { motion } from "framer-motion";
import "./Auth.css";


function Login() {
const [email, set_email] = useState("");
const [password, set_password] = useState("");

function handleSubmit(e){ 
	axios.post('http://localhost:8080/login', {
		email: email,
		password: password,
	  })
	  .then(function (response) {
		console.log(response);
		if(response.data.status == 200){
			swal("Congratulations !", "Login Successfull", "success");
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
				<Card style={{ width: '100%', boxShadow: '5px 10px 10px 0px #c9c9c9', position:'relative',}}>
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
							<h1>Login To Your Account</h1><hr/>
							
							<Container style={{width : '90%'}}>
						

							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1" style={{borderRadius : '0px'}}><i class="fa fa-envelope" aria-hidden="true"></i></InputGroup.Text>
								<FormControl
								placeholder="Email"
								aria-label="Username"
								aria-describedby="basic-addon1"
								style={{borderRadius : '0px'}}
								onChange={(e) => set_email(e.target.value)}
								/>
							</InputGroup>

						


							<InputGroup className="mb-3">
								<InputGroup.Text id="basic-addon1" style={{borderRadius : '0px'}}><i class="fa fa-key" aria-hidden="true"></i></InputGroup.Text>
								<FormControl
								placeholder="Password"
								aria-label="Address"
								aria-describedby="basic-addon1"
								style={{borderRadius : '0px'}}
								onChange={(e) => set_password(e.target.value)}
								/>
							</InputGroup>

							<Button variant="" style={{background : '#0d5a6a', color : "white", borderRadius : '0px'}} onClick={() => handleSubmit()}>Login</Button><br/>
							<NavLink to="/Registration" className="nav-link text-dark">Register Yourself ?</NavLink>
							</Container>

						</Col>
						<Col>
							<img src='https://img.freepik.com/free-vector/business-man-described-showing-graph-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39768.jpg?size=626&ext=jpg' width="100%" height="100%" />
						</Col>
					</Row>
				</Card>
			</Row>
			</Container><br/><br/>
    	</>
		</motion.div>
  );
}

export default Login;
