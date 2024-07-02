
//Ejemplo de visualizador tomado de: https://github.com/Borja95/visualizadorPdfReact.git

import { Component } from 'react';

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
                data='/Costo Algoritmico 1152298 - 1152194.pdf'
                type="application/pdf"
                width="100%"
                height="100%"
                >
                    <br />
                    <a href='/Costo Algoritmico 1152298 - 1152194.pdf' id="enlaceDescargarPdf"
                    download="ReactJS.pdf"
                    >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
                </object>
            </div>
        );
    }
}

export default PDF;