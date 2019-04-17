import React, { Component } from 'react';
import './App.css';




class App extends Component {

  state = {
    title : '',
    globalTitle: 'The circle of life',
  }

  onChange = (e) => {
    this.setState({
      title : e.target.value,
    })
   }

  componentDidMount = () => {
     console.log("Formulaire rendu")
  }

  submitForm = (e) => {
    e.preventDefault()
    this.setState({
      globalTitle : `Mon formulaire - ${this.state.title}`,
    })
  }

  componentDidUpdate = () => {
    console.log("Titre changé")
  }

   
  render() {


    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.globalTitle}
          </p>

        </header>
        <div className="FormFilm">

          <form onSubmit={this.submitForm}>
            <fieldset>
              <div className="form-data">
                <label htmlFor="name">Title</label>
                <input
                  type="text"
                  id="name"
                  onChange={this.onChange}
                  value={this.state.title}
                />
              </div>

              <hr />
              <div className="form-data">
                <input type="submit" value="Envoyer" />
              </div>
              </fieldset>
            </form>
          </div>
        </div>
    );
  }
}

export default App;
