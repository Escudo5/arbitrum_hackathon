"use client"
import { useState } from "react"

export default function SergioPage(){
    const [input, setInput] = useState("")

    function pingpong() {
        if (input == "ping"){
            alert("pong")
        }else{
            alert("ping")
        }
    }

    return (
        <div>
        <p>Hola soy Sergio
            <input
            className="border-2  text-white border-black mb-2 bg-black p-4"
            placeholder="Dile un mensaje a Marvin"
            />

            <button onClick={pingpong}>
                <span className="text-white">Enviar</span>
                </button>
        </p>
        <Gatito />
        </div>)
     
}

function Gatito(){
    return (
        <>
        <div>
            <h2 className="font-bold bg-black text-white">Gatito</h2>
            <img 
                onClick={() => alert("Meow")}
                className="max-w-[24rem]"
                src="https://th.bing.com/th/id/OIP.2llAkk3vCDmNrybjNMDAPQHaE5?rs=1&pid=ImgDetMain"
            />
        </div>
        <p> Meow</p>
        </>
    )
}