import {Link} from 'react-router-dom';
import '../../styles/components/layout/Nav.css';
import '../../App.css';

const Nav = (props) => {
    return (
        <nav>
            
            <Link to = "/"><div className="elem activo">Inicio</div></Link>
            <Link to="/noticias"><div className="elem">Noticias</div></Link>
            <Link to="/grandespremios"><div className="elem">Grandes Premios</div></Link>
            <Link to="/equipos"><div className="elem">Equipos</div></Link>
            <Link to="/contacto"><div className="elem">Contacto</div></Link>

        </nav>
    );
}

export default Nav