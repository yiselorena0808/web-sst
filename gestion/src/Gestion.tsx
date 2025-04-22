import React, { useState } from "react";
import './gestion.css' ;

interface Gestion1{
    onSubmit:(datos:{nombre:string,apellido:string,cedula:number,cargo:string,importancia:string,fecha:string,estado:string})=>void;
}

const Gestion:React.FC<Gestion1>=({onSubmit})=>{
    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [cedula,setCedula]=useState(0);
    const [cargo,setCargo]=useState("");
    const [importancia,setImportancia]=useState("");
    const [fecha,setFecha]=useState("");
    const [estado,setEstado]=useState("");

    const Ver=(Event:React.FormEvent<HTMLFormElement>)=>{
        Event.preventDefault();
        console.log(nombre,apellido,cedula,cargo,importancia,fecha,estado);
        onSubmit({nombre,apellido,cedula,cargo,importancia,fecha,estado});
    }
    return(
        <div className="container">
            <h1>Gestion epp</h1>
            <div className="cuerpo">
            <form onSubmit={Ver}>
                <label>nombre</label>
                <input type="text" onChange={(Event)=>setNombre(Event.target.value)}></input>
                <label>apellido</label>
                <input type="text" onChange={(Event)=>setApellido(Event.target.value)}></input>
                <label>cedula</label>
                <input type="number" onChange={(Event)=>setCedula(parseInt(Event.target.value))}></input>
                <label>Cargo</label>
                <input type="text" onChange={(Event)=>setCargo(Event.target.value)}></input>
                <label>importancia</label>
                <input type="text" onChange={(Event)=>setImportancia(Event.target.value)}></input>
                <label>fecha</label>
                <input type="text" onChange={(Event)=>setFecha(Event.target.value)}></input>
                <label>estado</label>
                <input type="text" onChange={(Event)=>setEstado(Event.target.value)}></input>
                <button type="submit">Ver</button>
            </form> 
            </div>
        </div>
    )
}
export default Gestion;