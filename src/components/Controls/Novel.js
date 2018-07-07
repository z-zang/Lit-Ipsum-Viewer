import React, {Component} from 'react';

class Novel extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: props.value
    }
  }

  onChange(e){
    this.setState({
      value: e.target.value
    }, function(){
      this.props.onChange(this.state.value)
    })
  }

  render(){
    return(
      <div>
        <select className="form-control" onChange={this.onChange.bind(this)}>
          <option value="adventures-sherlock-holmes">Sherlock Holmes</option>
          <option value="dr-jekyll-and-mr-hyde">Jekyll and Hyde</option>
          <option value="dracula">Dracula</option>
          <option value="evelina">Evelina</option>
          <option value="life-of-samuel-johnson">The Life of Samuel Johnson</option>
          <option value="picture-of-dorian-gray">The Picture of Dorian Gray</option>
          <option value="pride-and-prejudice">Pride and Prejudice</option>

        </select>
      </div>
    )
  }

}

export default Novel
