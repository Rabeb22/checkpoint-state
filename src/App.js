import React, { Component } from 'react'
import './App.css'
import Profile from './component/profile/Profile'

export default class App extends Component {
  state={
    visible:true,
    count:0,
    intervalId:0

  }

  handleshow=()=>{
  this.setState({visible:!this.state.visible})
  
  clearInterval(this.state.intervalId, this.state.count)
  this.setState({count:0,intervalId:0})

  }

  inc=()=>{
    this.setState({count:this.state.count+1})
  }

  componentDidMount() {
    const newItntervalId=setInterval(() => {this.inc() }, 1000);
    this.setState({intervalId:newItntervalId})
   
  }

  compteur=(comp)=>{
   //return comp<60?comp+" seconds":comp<3600?Math.floor(comp/60) + " minutes"+ comp%60+" seconds":Math.floor(comp/3600)+" heures"+Math.floor((comp%3600)/60)+" minutes"+((comp%3600)%60)+" seconds"
  return comp + " seconds"
  }
  

  render() {
    return (
      <div className="App">
        
        {this.state.visible &&
          <div>
          
          <Profile/>
          <h1> {this.state.count<60?this.state.count+" seconds":this.state.count<3600?Math.floor(this.state.count/60) + " minutes "+ this.state.count%60+" seconds":Math.floor(this.state.count/3600)+" heures "+Math.floor((this.state.count%3600)/60)+" minutes "+((this.state.count%3600)%60)+" seconds"
        }</h1>
        
        </div>
      }
      <button onClick={this.handleshow}>{this.state.visible?"Hide":"Show"}</button>
      </div>
    )
  }
}
