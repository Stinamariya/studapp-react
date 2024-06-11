import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "rollNo":"",
            "admNO":"",
            "college":""
        }
    )
    const inputhandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue= () =>{
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                    
                } else {
                    alert("error")
                    
                }
            }
        ).catch()
        
    }
  return (
    <div>
        <NavBar/>
<div className="container">
    <h1><center>STUDENT REGISTRATION</center></h1>
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name'value={data.name}onChange={inputhandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Admission No</label>
                    <input type="text" className="form-control"name='admNO'value={data.admNO}onChange={inputhandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Roll No</label>
                    <input type="text" className="form-control"name='rollNo'value={data.rollNo}onChange={inputhandler} />
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">College </label>
                    <input type="text" className="form-control"name='college'value={data.college}onChange={inputhandler} />
                </div>
                
                
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <br />
                    <button className="btn btn-success"onClick={readValue}>Register</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddStudent