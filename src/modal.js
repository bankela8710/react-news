import React from 'react'


const Modal = (props) => {
    return (
        <div className="modal-wrapper">
            <p>Ovaj sajt koristi kolačiće u cilju boljeg korisničkog iskustva,
            personalizacije sadržaja, pružanja funkcije društvenih medija i
            analiziranja saobraćaja u skladu sa Politikom o kolačićima
            </p>
            <div className="modal-button">
                <button onClick={props.handleModalClick}>X</button>
                <button onClick={props.handleModalClick}>Ok</button>
            </div>
        </div>

    )
}

export default Modal;