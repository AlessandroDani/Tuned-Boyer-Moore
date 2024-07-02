
//Ejemplo de visualizador tomado de: https://github.com/Borja95/visualizadorPdfReact.git

import React, { Component } from 'react';

class PDF extends Component {

    componentDidMount() {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        }
    }
    
    render() {
        return (
            <div style={{position: 'flex', width: '100%', height: '100vh'}}>
                <object
                data='/a.pdf'
                type="application/pdf"
                width="100%"
                height="100%"
                >
                    <br />
                    <a href='/a.pdf' id="enlaceDescargarPdf"
                    download="ReactJS.pdf"
                    >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
                </object>
            </div>
        );
    }
}

export default PDF;