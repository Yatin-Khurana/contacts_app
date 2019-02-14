import React,{Component} from 'react';
import './cards.css';
import pic from "./logo.svg"
class Cards extends Component{
    render(){
        const whenclicked = () =>
        {
            this.props.cardclicked(this.props);
        };
        return(
          <a className="aCard" onClick={whenclicked}>
              <img src={pic} alt=""/>
              <h4>{this.props.name}</h4>
          </a>
        );
    };
}
export default Cards;