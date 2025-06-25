import './hero.css'
import { LeadForm } from '../Lead_Form/lead_form';

export function Hero() {
    return (
        <section className="section__hero">
            <div className="hero">
                <h1 className="hero__title">Impulsione suas vendas</h1>
                <h2 className="hero__description">
                    Diminua o tempo de suas entregas, e conquiste novos clientes
                </h2>
                <p className="hero__paragraph">
                    Diminua o tempo de suas entregas, e conquiste novos clientes
                </p>
            </div>
            <div className="div">
                <LeadForm />
            </div>
        </section>
    );
}