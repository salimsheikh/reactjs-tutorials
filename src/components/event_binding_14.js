import React, { Component } from 'react';

class EventBinding extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hello"
    }
    // Approach 3
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // Approach 1,2,3
  // clickHandler(){
  //   this.setState({
  //     message: "Good Bye"
  //   })    
  // }

  // Approach 4
  clickHandler = () => {
    this.setState({
      message: "Good Bye"
    })
  }

  // Approach 3 and 4 usefull, but Approach 4 is good
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/*Binding Approach 1, Not used, becuse perfomence
        <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Binding Approach 2 */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* Approach 3 */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* Approach 4 */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBinding;
