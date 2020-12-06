import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from "react-number-format";

export default function CaseIndo(){
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
   
    useEffect(() => {
      axios
      .get("https://covid19.mathdro.id/api")
      .then(response => {
        console.log(response)
        setConfirmed(response.data.confirmed.value)
        setRecovered(response.data.recovered.value)
        setDeaths(response.data.deaths.value)
        
      })
      .catch(err => {
        console.log(err)
    })
    }, []);

return (

  <div className="container">
  <h1 className="positif">
  <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
  <p>Positif</p>
  </h1>
  <h1 className="meninggal">
  <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
  <p>Meninggal</p>
  </h1>
  <h1 className="sembuh">
  <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
  <p>Sembuh</p>
  </h1>
  </div>


)
}