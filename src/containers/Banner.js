import React, { Fragment } from "react";
import "../index.css";

const API = process.env.API;

class Banner extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      searchTerm: "",
      error: "",
      movie: [],
       
    };
  }

  async componentDidMount() {

    let res;
    res = await fetch(`${API}&t=The+Grand+Budapest+Hotel&y=2014`).then (res => res.json());

    this.setState({ data : res });

  }
  render() {

    const { data } = this.state;
 
    return (
      <Fragment>
        <h1 className="destaque">DESTAQUE SEMANA</h1>
       
        <div className="row">
          <div className="col-md-8">
          <h2>{data.Title}</h2>
          <p>{data.Ploter}</p>
          <p>Diretor: {data.Director}</p>
          <p>Atores: {data.Actors}</p>
          <p>{data.Plot}</p>
          <p>Prêmios: {data.Awards}</p>
          <p>Genero: {data.Genre}</p>
          <p>Ano: {data.Year}</p>
          <div className="row">
            <div className="col-md-1">
              <p className="IMDB">{data.imdbRating}</p>
            </div>
            <div className="col-md-1">
              <p className="Metascore">{data.Metascore}</p>
            </div>
            <div className="col-md-1">
              <p className="Bilheteria">{data.BoxOffice}</p>
            </div>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
          <img className="posterbanner" src={data.Poster} />
            
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Banner;

