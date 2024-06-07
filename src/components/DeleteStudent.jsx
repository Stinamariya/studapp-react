import React from 'react'
import NavBar from './NavBar'

const DeleteStudent = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center>DELETE STUDENT</center></h1>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ADMISSION NO</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-danger">Delelte</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteStudent