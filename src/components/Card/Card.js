import React from "react";
import PropTypes from "prop-types";




const Card = ({ movie }) => {
  return (
    
    <div className="col-md-4 col-sm-12 text-left">
   
      <div className="card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top"/>
      <div className="card-body">
        <h6 className="card-title">{`${movie.Title} (${movie.Year})`}</h6>
        <p >{`Type: ${movie.Type}`}</p>
        
      </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Type: PropTypes.string,
  }).isRequired,
};

export default Card;