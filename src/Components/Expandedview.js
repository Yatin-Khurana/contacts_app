import React from 'react';
import "./expandedview.css";
class Expandedview extends React.Component{
    render() {
        if (this.props.name) {
            return (
                <div className='ev'>
                    <img src={this.props.profile} alt=""/>
                    <h1>{this.props.name}</h1>
                    <hr/>

                </div>
            );
        }
        else{
            return(
                <div className='ev'>
                    <p className="noselect">Please Select a Contact to View</p>
                </div>
            );
        }
    }
}
export default Expandedview;