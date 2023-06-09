/* eslint-disable eqeqeq */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import "./Contact.css";
import { ToastContainer, toast } from 'react-toastify';


 
const Contact = () => {
  
  
  const [inputvalue, setInputvalue] = useState({
     fname : "",
     lname : "",
     email : "",
     mobile : "",
     message : ""
  
    });
    console.log(inputvalue)
    const getvalue = (e) =>{
      const {name,value} = e.target;
       setInputvalue(()=>{
        return {
          ...inputvalue,
          [name]:value
        }
       })
    }
   const sentUserdata = async(e) => {
      e.preventDefault();

      const {fname,lname,email,mobile,message} = inputvalue;
          if(fname == ""){
           toast.error("First name is required")
          }else if (lname == ""){
            toast.error("Last name is required")
           
          }else if (email == "")
          {
            toast.error("Email is required")

          }else if (!email.includes("@")){
            toast.error("Invalid email")
          }else if (mobile == ""){
            toast.error("mobile is required")
          }else {
              const res = await fetch("/register", {
                method: "POST",
                headers : {
                  "content-Type" : "application/json"
                },
                body:JSON.stringify({
                  fname,lname,email,mobile,message
                })  
              });
              const data = await res.json();
              console.log(data)    
          
            }

   }
  return (
      <>
        <div className='container mb-3 contact'>
           <h2 className='text-center mt-4 mb-5'>Contact us</h2>
            <div className='container mt-2'>
            <Form className='row mt-2'>
       <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First" name='fname' onChange={getvalue} />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last" name='lname' onChange={getvalue} />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" name='email' onChange={getvalue} />
      </Form.Group><Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Moblie</Form.Label>
        <Form.Control type="text" placeholder="First" name='mobile' onChange={getvalue} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4}  name="message" onChange={getvalue} />
      </Form.Group>
      <Button variant="primary" type="submit" className='mt-5 mb-5' onClick={sentUserdata} >
        Submit
      </Button>
    </Form>
    <ToastContainer
position="top-right"
theme="dark"
/>
            </div>
        </div>
         
      </>


    )
}

export default Contact ;