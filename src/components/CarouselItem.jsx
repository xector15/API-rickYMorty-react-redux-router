import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import { Link } from 'react-router-dom'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/remove-icon.png'

const CarouselItem = (props) => {
  const { id, image, name, species, gender, status, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, image, name, species, gender, status
    })
  }
  const handleDeleteFavorite = (itemId) =>{
    props.deleteFavorite(itemId)
  }
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={image} alt={name} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon} 
              alt="Play Icon"
            />
          </Link>

          {isList ? 
            <img 
              className="carousel-item__details--img" 
              src={removeIcon} 
              alt="remove Icon"
              onClick={() => handleDeleteFavorite(id)} 
            />:
            <img 
              className="carousel-item__details--img" 
              src={plusIcon} 
              alt="Plus Icon"
              onClick={handleSetFavorite} 
            />
          }  
        </div>
        <p className="carousel-item__details--title">{name}</p>
        <p className="carousel-item__details--subtitle">
          {
            `${species} ${gender} ${status}`
          }
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem);