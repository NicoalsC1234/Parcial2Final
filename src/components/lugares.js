import React, { useState, useEffect } from "react";
import { FormattedMessage } from 'react-intl';
import Cuarto from "./cuarto";


function Lugares (props){

    let [lugares, setLugares] = useState([]);
    let [lugaresSelec, setLugaresSelec] = useState();
    

    useEffect(() => {
        const urlAPI = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
        
        fetch(urlAPI).then((res) => res.json()).then((data) => {
            let cuarto = data.filter((d) => d.Id === props.espacioSelecionado);
            setLugares(cuarto);
            localStorage.setItem("lugares", JSON.stringify(cuarto));
        });
        
        setLugaresSelec();
    }, [props.espacioSelecionado]);


    function manejadorCuartoSelec (cuarto) {
        setLugaresSelec(cuarto);
    }


    return(
        <div className="container mt-4">
            <div className="row">
                {lugares.map((e) => {
                    return(
                        <div className="col-3" key={e.id}>
                            <div className="card" onClick={() => manejadorCuartoSelec(e)}>
                                <div className="card-body">
                                    <h5 className="card-title"><FormattedMessage id={e.name}/></h5>
                                    <p className="card-text">{e.address}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {lugaresSelec != null ? <Cuarto lugarSelecionado={lugaresSelec.homeId} />: null}
        </div>
    );
}

export default Lugares;