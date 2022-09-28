import React, { Component } from 'react'  
import Clock from 'react-clock';  
import './styles.scss';   
export class ClockLogo extends Component {  
  state = {  
    date: new Date(),  
  }  
  
  componentDidMount() {  
    setInterval(  
      () => this.setState({ date: new Date() }),  
      3000  
    );  
  }  
  render() {  
    return (  
      
        <div className="clk">  
            <Clock  
            value={this.state.date}  
          />
        </div>  
    )  
  }  
}  
  
export default ClockLogo  