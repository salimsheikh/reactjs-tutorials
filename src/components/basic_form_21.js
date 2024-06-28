import React, { Component } from "react";
import './basic_form_21.css';

class BasicForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      
    };
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onChangeComments = event => {
    this.setState({
        comments: event.target.value
    });
  }

  onChangeTopic = event => {
    this.setState({
        topic: event.target.value
    });
  }

  onSubmitForm = event => {
    event.preventDefault();
    alert(`Name: ${this.state.name}, Comments: ${this.state.comments}, Topic: ${this.state.topic}`);
  }

  render() {
    const {name, topic, comments} = this.state;
    return (
      <div className="BasicForm">
        <form onSubmit={this.onSubmitForm}>
          <div className='formRow'>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="formRow">
            <label>Topic</label>
            <select value={topic} onChange={this.onChangeTopic}>
                <option value='html'>HTML</option>
                <option value='react'>React</option>
                <option value='javascript'>Javascript</option>
            </select>
          </div>
          <div className="formRow">
                <label>Comments</label>
                <textarea onChange={this.onChangeComments}>{this.state.comments}</textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BasicForm;
