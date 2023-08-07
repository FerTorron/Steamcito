import './CardSteam.css';
import { useState } from 'react';

const CardSteam = () => {
    const [precio, setPrecio] = useState();
    const [precioImpuesto, setPrecioImpuesto] = useState();

    const aplicarImpuesto = () => {
        const precioImpuesto = (precio * 1.75).toFixed(2);
        setPrecioImpuesto(precioImpuesto);
    };

    return (
        <div className='cardSteamContainer'>
            <div className="cardSteam">
                <h1><i className="fab fa-steam"></i>Steamcito</h1>
                <div className="cardFunction">
                    <p>Ingrese un importe en ARS$</p>
                    <input placeholder='$100.00' type="number" onChange={(e) => setPrecio(e.target.value)} value={precio} />
                    {precioImpuesto > 0 ? <p>Te Costará ARS <b className={precioImpuesto < 5000 ? "precioFinalBajo" : "precioFinalAlto"}>${precioImpuesto}</b></p> : null}
                    <button onClick={aplicarImpuesto}>Calcular</button>
                    <p className='derechosP'>Hecho por <a href="https://www.linkedin.com/in/fertorron/"><b className='linkedIn'>FerTorron</b></a></p>
                </div>
            </div>
        </div>
    );
};

export default CardSteam;