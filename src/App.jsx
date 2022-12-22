import React from 'react';
import './App.css';
import  Nabvar  from './components/Nabvar';
import  Index  from './components/Index';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ""
  }
  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=9rd8KOtcNweMXPpX596uJIQiLdfMdRDz")
      .then(response => response.json())
      .then(data => {
        let gifsArray = []
        data.data.forEach(gif => {
          gifsArray.push({
            username: gif.username,
            url: gif.images.original.url
          })
          
        })
        this.setState({
          gifsArray
        })
      })
      .catch(e => { console.log(e) })
  }
  render() {
    
    if (!this.state.gifsArray) {
      <h3> cargando… </h3>
    } else {
      return (
        <div>
          <Nabvar />
          <Index gifs={this.state.gifsArray}/>
        </div>
      )
    }
   

  }

}

export default App;
