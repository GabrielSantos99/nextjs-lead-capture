import './hero.css'
import Image from 'next/image';
import { LeadForm } from '../Lead_Form/lead_form';
import deliveryImage from '../../../../public/entregador-recebendo-o-pacote-para-entrega.jpg'

export function Hero() {
    return (
        <section className="section__hero">
            <div className="hero">
                <Image
                    src={deliveryImage}
                    alt="Imagem de delivery"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    className="hero__image"
                />
                <div className="hero__content">
                    <h1 className="hero__title">Impulsione suas vendas</h1>
                    <h2 className="hero__description">
                        Diminua o tempo de suas entregas, e conquiste novos clientes
                    </h2>
                </div>

            </div>
            <div className="div">
                <LeadForm />
            </div>
        </section>
    );
}