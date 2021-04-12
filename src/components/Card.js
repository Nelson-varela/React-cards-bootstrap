import React from 'react'
import PropTypes from 'prop-types';
import './cards.css'

function Card({title, imageSource, text, url}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__wobble">

            <div className="overflow">
               <img src={imageSource} alt="" className="card-img-top"/>
            </div>

            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary" >
                    {
                        text ? text: 'En Este espacio deberas escribir la descripcion de cada sitio web, de esa manera el usuario sabrá de que se trata cada una antes de ingresar y esto hará  tu blog personal mucho mas intuitivo.'
                    }
                </p>
                <a href={url} className="btn btn-outline-secondary round-0" target="_blank" rel="noreferrer">Go to this website</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card
