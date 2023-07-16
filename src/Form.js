import React from "react";
import { Link } from "react-router-dom";
const Form=({form,handlechange})=>{

return(
<div>
<form>
    <input type='text' name='isim' placeholder='isim soyisim giriniz' onChange={handlechange} value={form.isim}/>
    <select name='sehir' onChange={handlechange} value={form.sehir}>
      <option value="">Lütfen şehri seçiniz</option>
      <option value="Kilis">Kilis</option>
      <option value="Ankara">Ankara</option>
      <option value="İstanbul">İstambul</option>
    </select>
    <input type='date' name='dogum' onChange={handlechange} value={form.dogum}/>
    <input type='color' name='renk' onChange={handlechange} value={form.renk}/>
    <textarea name='adres' placeholder='Adresinizi giriniz' onChange={handlechange} value={form.adres}></textarea>
        <Link to="/bilgiler"><button>GÖNDER</button></Link>  
   </form>
</div>
    )
}

export default Form