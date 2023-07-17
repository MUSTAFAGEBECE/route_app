import React from "react";
import { Link } from "react-router-dom";
import "./info.css"
const Info=({form})=>{
    return(
        <div>
            <h1>İsim Soyisim:{form.isim}</h1>
            <p>Şehir:{form.sehir}</p>
            <p>Doğum Tarihi:{form.dogum}</p>
            <p>Sevdiği Renk:{form.renk}</p>
            <p>Adres:{form.adres}</p>
          <Link to="/"><button>GERİ DÖN</button></Link>  
        </div>
    )
}

export default Info