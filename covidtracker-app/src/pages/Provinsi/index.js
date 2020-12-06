import React from 'react'
import CaseProvinsi from './CaseProvinsi';

const Provinsi = () => {
    return (
        <div>
           <div className="container mypanel text-center">
          <h1 style={{ fontFamily: "Sen", fontSize: "50px" }}>Kasus di Provinsi Indonesia</h1>
          </div>
            <CaseProvinsi/>
       </div>
    )
}

export default Provinsi;