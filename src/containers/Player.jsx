import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import '../assets/styles/components/Player.scss'
import NotFound from './NotFound'

const Player = props => {
    const { id } = props.match.params;
    const { playing } = props
    const hasPlaying = Object.keys(playing).length > 0;
    useEffect( () => {
        props.getVideoSource(id);
    }, [])
    console.log(playing)
    return hasPlaying ? (
        <div className="Player">
            <div className="Card">
                <img className="imgPlaying" src={playing.image} alt={playing.name}/>
                <div className="imgDetails">
                    <h3>Nombre:{" " + playing.name}</h3>
                    <p>Estado: {playing.status}</p>
                    <p>Especie: {playing.species}</p>
                    <p>Genero: {playing.gender}</p>
                    <p>Ubicacion: {playing.location.name}</p>

                </div>
            </div>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Return
                </button>
            </div>
        </div>
    ) : <NotFound/>;
};

const mapDispatchToProps = {
    getVideoSource
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)