import React, { useState } from 'react';
import NavBar from './NavBar';

const ViewStudent = () => {
  const [data, setData] = useState([
    { "name": "Anu", "AdmNo": 101, "RollNo": 1 },
    { "name": "Manu", "AdmNo": 102, "RollNo": 2 },
    { "name": "Varun", "AdmNo": 105, "RollNo": 12 },
    { "name": "Meera", "AdmNo": 107, "RollNo": 20 }
  ]);

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1><center>STUDENT INFO</center></h1>
        <div className="row g-3">
          {data.map((value, index) => (
            <div key={index} className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/512/2784/2784403.png" height="250px" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{value.name}</h5>
                  <p className="card-text">AdmNo: {value.AdmNo}</p>
                  <p className="card-text">RollNo: {value.RollNo}</p>
                  <a href="#" className="btn btn-primary">Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewStudent;
