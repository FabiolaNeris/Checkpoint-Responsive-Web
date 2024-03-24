'use client'
import React, { useState } from "react";

interface FormData{
    nome: string;
    email: string;
    modelo: string;
    marca: string;
    data: string;
}

const Formulario : React.FC = () =>{

    //estado inicial do formulário
    const initialFormState: FormData = {
    nome: '',
    email:'',
    modelo: '',
    marca: '',
    data: ''
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const [formData, setFormData]= useState<FormData>(initialFormState);

    const[confirmacao, setConfirmacao] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
        const formattedData = `
        Sua revisão está agendada, conforme dados inseridos:
        ${"\n"}
        Nome: ${formData.nome} 
        E-mail: ${formData.email}
        Modelo: ${formData.modelo}
        Marca: ${formData.marca}
        Data: ${formData.data}
        
        Nos vemos em breve!`;

        setConfirmacao(formattedData)
        setFormData(initialFormState)
    }

    return(
        <>
            <main>
                <h1>Agende sua revisão</h1>
                <form className="formulario" onSubmit={handleSubmit}>

                    <label className="label-form">
                        <b>Nome: </b>
                        <input className="input-form" type="text" name="nome" value={formData.nome} onChange={handleInputChange}/>
                    </label>

                    <br/>

                    <label className="label-form">
                        <b>Email: </b>
                        <input className="input-form" type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                    </label>

                    <br/>

                    <label className="label-form">
                        <b>Modelo: </b>
                        <input className="input-form" type="text" name="modelo" value={formData.modelo} onChange={handleInputChange}/>
                    </label>

                    <br/>

                    <label className="label-form">
                        <b>Marca: </b>
                        <input className="input-form" type="text" name="marca" value={formData.marca} onChange={handleInputChange}/>
                    </label>

                    <br/>

                    <label className="label-form">
                        <b>Data:</b>
                        <input className="input-form" type="date" name="data" value={formData.data} onChange={handleInputChange}/>
                    </label>

                    <br/>
                    <input className="botao" type="submit" value="Enviar"/>
                </form>
                <div className="multiline">
                    {confirmacao && <p>{confirmacao}</p>}
                </div>
            </main>
            
        </>
    )
}
export default Formulario;