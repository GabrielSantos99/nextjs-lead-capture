import './header.css'
import nextIcon from '../../../../public/next.svg'
import Image from 'next/image';

export function Header() {
    return(
        <section className="section">
            <Image src={nextIcon} alt="Icone do next" className="image" />
        </section>
    );
}