import './header.css'
import nextIcon from '../../../../public/next.svg'

export function Header() {
    return(
        <section className="section">
            <img src={nextIcon} alt="Icone do next" className="image" />
        </section>
    );
}