import React, { Fragment } from "react";
import Card from "../components/Card/Card";
import Modal from "../components/Modal";


const API = process.env.API;


class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      searchTerm: "",
      error: "",
    };
  }

  async componentDidMount() {

    const res = await fetch(`${API}&s=x-men`);
    const resJSON = await res.json();
    if (resJSON) {
      this.setState({
        data: resJSON.Search,
        loading: false,
        error: "",
      });
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.state.searchTerm) {
      return this.setState({ error: "Por favor, escreva um texto válido" });
    }

    const response = await fetch(`${API}&s=${this.state.searchTerm}`);
    const data = await response.json();
    
    if (!data.Search) {
      return this.setState({ error: "Sem nenhum resultado..." });
    }

    return this.setState({
      data: data.Search,
      searchTerm: "",
      error: "",
    });
  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <div>Carregando...</div>;
    }

    return (
      <Fragment>
       
        <div className="row">
  
          <div className="col-md-6 col-sm-12 offset-md-3 offset-sm-6 p-4">

            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                onChange={(e) => this.setState({ searchTerm: e.target.value })}
                value={this.state.searchTerm}
                autoFocus
              />
            </form>
            <p className="text-white">
              {this.state.error ? this.state.error : ""}
            </p>
          </div>
        </div>
        <div className="row pt-2">
          <div className="flex-container">
          {data.map((movie, i) => (
            <Card movie={movie} key={i} />
          ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default List;