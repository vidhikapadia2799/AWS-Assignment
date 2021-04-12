import React, { useEffect, useState } from "react";
import { Viewprofile } from "./viewprofile";
import img1 from '../../../assets/images/users/1.jpg';
import img2 from '../../../assets/images/users/2.jpg';
import img3 from '../../../assets/images/users/3.jpg';
import img4 from '../../../assets/images/users/4.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {

    const[customer,setCustomer] = useState([]);
    const[profile,setProfile] = useState();
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[contact,setContact] = useState();
    const[addModalShow,setAddModalShow] = useState(false);
    const[editModalShow,setEditModalShow] = useState(false);

    useEffect(()=>{
        fetch(" https://snhu2z5k6h.execute-api.us-east-1.amazonaws.com/default/getcustomer").then(
            res => res.json().then(customer => setCustomer(customer))
          //  console.log(customer)
        )
    },[])

    var addModalClose = () => setAddModalShow(false);
    var editModalClose = () => setEditModalShow(false);
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <h3>Customer List</h3>
                    </div>

                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Profile</th>
                            <th className="border-0">Customer Name</th>
                            <th className="border-0">Email</th>
                            <th className="border-0">Contact Number</th>
                            <th className="border-0">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customer.map(cust =>
                        <tr key={cust.custid}>
                            <td>
                                <div className="mr-2"><img src={cust.custimg} alt="user" className="rounded-circle" style={{width:100,height:100}} /></div>
                            </td>
                            <td>{cust.custname}</td>
                            <td>{cust.custemail}</td>
                            <td>{cust.custnum}</td>
                            <td><button onClick={()=>{setEditModalShow(true),
                                                     setProfile(cust.custimg),
                                                     setName(cust.custname),
                                                     setEmail(cust.custemail),
                                                     setContact(cust.custnum)}}>View</button>
                            <Viewprofile
                                                        show= {editModalShow}
                                                        onHide={editModalClose}
                                                        profile={profile}
                                                        name={name}
                                                        email={email}
                                                        num={contact}
                            />
                            </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Projects;
