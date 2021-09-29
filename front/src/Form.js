import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname : "",
      lastname : "",
      email : ""
    };
  }
  test = (event) =>{
    this.setState(this.state);
    var x = document.getElementById("hideshow");
      x.style.display = "none";
    document.getElementById("form").reset();
    document.getElementById('firstname').innerHTML = this.state.firstname;
    document.getElementById('lastname').innerHTML = this.state.lastname;
    document.getElementById('email').innerHTML = this.state.email;
  }
  handleclick = (event) =>{
    var x = document.getElementById("hideshow");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    document.getElementById('firstname').innerHTML = this.state.firstname;
    document.getElementById('lastname').innerHTML = this.state.lastname;
    document.getElementById('email').innerHTML = this.state.email;
  }
  changehandle = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});
  }

  SubmitHandler = (event) =>{
    event.preventDefault();
    let formData = new FormData();
    formData.append('firstname', this.state.firstname)
    formData.append('lastname', this.state.lastname)
    formData.append('email', this.state.email)

    axios({
      method: 'post',
      url: 'http://restapi.test/index.php/restapi_1/add_post',
      data: formData,
      config: { headers: {'Content-Type': 'application/json' }}
    })
    .then(function (response) {
        
        console.log(response.data);
        if(response.data === "success"){
          document.getElementById("form").reset();
          alert('Success');
        }
        else{
          alert('Failed');
        }

    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
  }

  render(){
    return (
      <section className="jumbotron">
        <center>
      <div style={{width: "50%"}}>
          <h1>Fill The Form</h1>
          <form id="form" method="post">
            <input type="text" name="firstname" onChange={this.changehandle} placeholder="Enter your First Name" className="form-control"/><br/>
            <input type="text" name="lastname" onChange={this.changehandle} placeholder="Enter your Last Name" className="form-control"/><br/>
            <input type="email" name="email" onChange={this.changehandle} placeholder="Enter your Email" className="form-control"/><br/>
            <input type="submit" value="Submit" onClick={this.SubmitHandler} className="btn btn-primary"/>
          </form>
            <button className="btn btn-warning mt-3" onClick={this.handleclick}>Show Info</button>
            <button className="btn btn-danger mt-3 ml-3" onClick={this.test}>Reset</button>
      </div>
    </center>
    <br/>
    <center style={{display : "none"}} id="hideshow">
      <div>
        <table className="table table-bordered" style={{width:"50%"}}>
          <tr>
            <th>First Name</th>
            <td id="firstname"></td>
          </tr>
          <tr>
            <th >Last Name</th>
            <td id="lastname"></td>
          </tr>
          <tr>
            <th>Email</th>
            <td id="email"></td>
          </tr>
        </table>
      </div>
      </center>
      </section>
      
    );
  }
}

export default Form;


//PHP ADD DATA TO MYSQL DATABASE (CODEIGNATOR)
//-------------------------------------------------------
// public function add_post(){
//   header('Access-Control-Allow-Origin: *');
//   header('Access-Control-Allow-Methods: GET, POST');
//   header('Access-Control-Allow-Headers: Content-Type');
//   $first_name =  $this->input->post('firstname');
//   $email =  $this->input->post('email');
//   $data = array(
//       'First_Name'    => $first_name,
//       'Email'         => $email
//   );
//   // $input = $this->input->post('firstname');
//   $query = $this->db->insert('client_information',$data);
//   if($query){
//       $arr = array(
//           "data" => "success"
//       );
//   }
//   else{
//       $arr = array(
//           "data" => "Failed"
//       );
//   }
//   echo "<pre>".json_encode($arr)."</pre>";
// }