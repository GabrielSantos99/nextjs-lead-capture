'use client'
import { useState } from 'react';
import './lead_form.css'

export function LeadForm() {
    const [formData, setFormData] = useState({
        name: "",
        telephone: "",
        email: "",
        city: "",
        segment: ""
    });

    const handleInput = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!formData.name.trim()) return;

        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <h2 className="form__title">Entre em contato</h2>
            <p className="form__description">
                Pronto para crescer? Entre em contato conosco hoje mesmo.
            </p>
            <div className="form__inputs">
                <input type="text" name="name" value={formData.name} onChange={handleInput} placeholder="Nome" className="input"/>
                <input type="tel" name="telephone" value={formData.telephone} onChange={handleInput} placeholder="Telefone" className="input"/>
                <input type="email" name="email" value={formData.email} onChange={handleInput} placeholder="Email" className="input"/>
                <input type="text" name="city" value={formData.city} onChange={handleInput} placeholder="Cidade" className="input"/>
                <input type="text" name="segment" value={formData.segment} onChange={handleInput} placeholder="Segmento" className="input"/>
            </div>
            <button type="submit" className="form__button">Enviar</button>
        </form>
    );
}