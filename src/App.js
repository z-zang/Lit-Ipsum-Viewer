import React, { Component } from 'react';
import axios from 'axios';
import './bootstrap.min.css';
import './App.css';
import Select from './components/Controls/Select'
import Text from './components/Controls/Text'
import Novel from './components/Controls/Novel'
import Output from './components/output'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 4,
      format: '',
      novel: 'picture-of-dorian-gray',
      text: ''
    }


  }

  componentWillMount(){
    this.getText()
  }

  getText(){

    axios.get('https://litipsum.com/api/'+this.state.novel+'/'+this.state.paras+'/'+this.state.format)
    .then((response) => {
      this.setState({text: response.data}, function(){
        console.log(this.state)
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  changeFormat(option){
    this.setState({format: option}, this.getText)
  }

  changeParas(input){
    this.setState({paras: input}, this.getText)
  }

  changeNovel(input){
    this.setState({novel: input}, this.getText)
  }


  render() {
    return (
      <div className="App container">
        <br />
        <h1 className="text-center">Lit Ipsum Text Generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Tag Wrapping</label>
              <Select value={this.state.format} onChange={this.changeFormat.bind(this)} />
          </div>
          <div className="form-group">
            <label>Paragraphs</label>
              <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
          </div>
          <div className="form-group">
            <label>Novel</label>
              <Novel value={this.state.novel} onChange={this.changeNovel.bind(this)} />
          </div>
        </form>
        <br />
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
