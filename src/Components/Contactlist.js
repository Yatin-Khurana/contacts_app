import React,{Component} from 'react';
import "./contactlist.css";
import Cards from './Cards';
class Contactlist extends Component{

    render(){
        return(
            <div>
                <div className="contacts">
                    <p className="title">Your Contacts</p>
                    <input type="text" placeholder="Search Contacts"/>
                    <div className="cards">
                        <Cards name="Anjie noah" number="999848487" email="sadas@gmail.com" cardclicked={this.props.oncardclicked}/>
                        <Cards name="John Doe" number="977878487" email="ghdfg@gmail.com" cardclicked={this.props.oncardclicked}/>
                        <Cards name="nino noah" number="78416161" email="erter@gmail.com" cardclicked={this.props.oncardclicked}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contactlist;