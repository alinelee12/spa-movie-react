import React from "react";
import PropTypes from "prop-types";

function loadinfos (titulo, year, type){
 alert (titulo, year, type)
}


const Card = ({ movie }) => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="flex-card card">
        <img src={movie.Poster} alt={movie.Title} className="card-img-top"/>
      <div className="card-body">
        <h6 className="card-title">{`${movie.Title} (${movie.Year})`}</h6>
        <p >{`Type: ${movie.Type}`}</p>
      </div>
            <button type="button" onClick={() => loadinfos(movie.Title, movie.Year, movie.Type)} className="btn-modal">
        Saiba mais
      </button>
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

