import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Form';
import { Route, Routes } from 'react-router-dom';
import Info from './Info';
function App() {
  const [form,setForm]=useState({
    isim:"",sehir:"",dogum:"",renk:"",adres:""
  })
  const handlechange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <div >
      <h2 className='ht'>Bilgilerinizi giriniz</h2>
      <Routes>
        <Route path='/' exact element={<Form form={form} handlechange={handlechange}/>} />
        <Route path='/bilgiler'  element={<Info form={form} />}/> 
      </Routes>
    </div>
  );
}

export default App;
