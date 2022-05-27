// Importar componentes de react, TablaDispositivos, FotoSala, FotoComedos, FotoCocina, GraficoTorta y FormattedMessage
import React, { useState, useEffect } from "react";
import Detalle from "./detalle";
import { FormattedMessage } from 'react-intl';

// Funcion GaleriaCuartos recibe props
function Cuarto (props) {
    // Variables de estado 
    let [cuartos, setCuartos] = useState([]);
    let [cuartoSelec, setCuartoSelec] = useState();

    // Hook de efecto para obtener la informacion del JSON que implementa PWA
    useEffect(() => {
        const urlAPI = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
        
        fetch(urlAPI).then((res) => res.json()).then((data) => {
            let cuartosEspacio = data.filter((d) => d.homeId === props.espacioSelecionado);
            setCuartos(cuartosEspacio);
            localStorage.setItem("cuartos", JSON.stringify(cuartosEspacio));
        });
        
        setCuartoSelec();
    }, [props.espacioSelecionado]);

    // Funcion que actualiza el estado de la variable caurtoSelec para determinar el cuarto escogido
    function manejadorCuartoSelec (cuarto) {
        setCuartoSelec(cuarto);
    }

    return(
        <div className="container mt-4 mb-5">
            <h1><FormattedMessage id="MyRooms"/></h1>
            <div className="row mt-4">
                <div className={cuartoSelec != null ? "col-8": ""}>
                    <div className="row">
                        {cuartos.map((c) => {
                            console.log(c.name)
                            return(
                                <div className="col" key={c.name}>
                                    <div className="card" onClick={() => manejadorCuartoSelec(c)}>
                                        <div className="card-body">
                                            <h5 className="card-title"><FormattedMessage id={c.name}/></h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cuartoSelec != null ? "col-4": ""}>
                    {cuartoSelec != null ? <Detalle dispositivosCuarto={cuartoSelec.devices} /> : null}
                </div>
            </div>
        </div>
    );
}


export default Cuarto;