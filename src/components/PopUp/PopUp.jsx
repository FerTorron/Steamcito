import { useState } from 'react'
import './PopUp.css'

const PopUp = () => {
    const [popUp, setPopUp] = useState(false)
    const messageOpen = () => {
        setPopUp(!popUp)
    }
    return (
        <>
            <div onClick={messageOpen} className='popUpContainer'>?</div>
            <div className={popUp ? "popUpMessageON" : "popUpMessage"}><p>Recordá que los precios pueden ser estimados, por lo tanto, te conviene tener un poco más de dinero en la cuenta antes de realizar la compra</p></div>
        </>
    )
}

export default PopUp