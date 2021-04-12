// export default Cards;
import React, { useState } from 'react';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {useHistory}  from 'react-router-dom'

const Cards = () => {
    const history=useHistory();
    const[firstname,setFirstname] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[contactno,setContactno ] = useState();
    const[image,setImage] = useState();

    async function submit(){
      // alert("hello")

      console.log(image,firstname,email,password,contactno)
      const fd = new FormData();
      fd.append("custname", firstname);
      fd.append("custemail", email);
      fd.append("custpwd", password);
      fd.append("custnum", contactno);
      fd.append("custimg", image);

      try {
        await axios.post(
          "https://9p8rznfcn6.execute-api.us-east-1.amazonaws.com/default/addcust1",
          fd
        );
      history.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <div>
        <form action="post" onSubmit={(e)=>{e.preventDefault();submit()}}>
          <h3>Add Customer</h3>

          <div className="form-group">
              <label>Customer name</label>
              <input type="text" className="form-control" placeholder="Customer Name"  name="firstName" onChange={(e)=>setFirstname(e.target.value)} />
          </div>

          <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password"  name="password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>

          <div className="form-group">
              <label>Contact No</label>
              <input type="number" className="form-control" placeholder="Enter Contact No" name="mobileno" onChange={(e)=>setContactno(e.target.value)}/>
          </div>


          <div className="form-group">
              <label>Upload profile Image</label>
              <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Add Customer</button>

      </form>
      </div>
  );
}

export default Cards;

