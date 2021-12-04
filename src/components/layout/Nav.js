import React from 'react';

const Nav = (props) => {
    return (
        <nav>
            <a href="index.html"><div className="elem activo">Inicio</div></a>
            <a href="noticias.html"><div className="elem">Noticias</div></a>
            <a href="grandespremios.html"><div className="elem">Grandes Premios</div></a>
            <a href="equipos.html"><div className="elem">Equipos</div></a>
            <a href="contacto.html"><div className="elem">Contacto</div></a>

        </nav>
    );
}

export default Nav