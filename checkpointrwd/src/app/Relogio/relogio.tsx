'use client'
import { useEffect, useState } from "react"

const Relogio =()=>{
    
    const[horaAtual, setHoraAtual] = useState(new  Date())

    const [pausa, setPausa] = useState(false)

    useEffect( () =>{
        const timer = setInterval(()=>{
            if (!pausa){
                setHoraAtual(new Date())
            }
        }, 1000)
        return () => clearInterval(timer)
    }, [pausa])

    const togglePausa = ()=>{
        setPausa(!pausa)
    }
    return(
        <> 
            <div className="relogio">
                <h2>{horaAtual.toLocaleTimeString()}</h2>
                <button onClick={togglePausa}> {pausa ? 'Continuar' : 'Pausar'} </button>
            </div>
        </>
    )
}

export default Relogio;