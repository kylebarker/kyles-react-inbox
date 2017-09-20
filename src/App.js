import React, { Component } from 'react';
import './App.css';


import Toolbar from './components/Toolbar'
import ComposeMessage from './components/ComposeMessage'
import MessageList from './components/MessageList'

class App extends Component {
  state = {
    data: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
  }

  handleClickEmail = (id) => {
    let data = this.state.data;
    data[id - 1].read = true;
    this.setState({data: data})
  }

  handleStarClick = (id) => {
    let data = this.state.data
    if(data[id-1].starred === false){
      data[id-1].starred = true
      this.setState({data:data})
    } else {
      data[id-1].starred = false
      this.setState({data:data})
    }
  }

  handleCheckboxClick = (id) => {
    let data = this.state.data
    if(data[id-1].selected === true){
      data[id-1]["selected"] = false
      this.setState({data:data})
    } else {
      data[id-1]["selected"] = true
      this.setState({data:data})
    }
  }

  isSelected = (element, index, array) => element["selected"]

  handleBulkSelector = () => {
    let data = this.state.data
    this.toggleSelected(!data.every(this.isSelected))
  }

  toggleSelected = (endState) => {
    let data = this.state.data;
    for(var i = 0; i<data.length; i++){
      data[i].selected = endState
      this.setState({data:data})
    }
  }

  handleDeleteButton = () => {
    let data = this.state.data
    for(var i = 0; i<data.length; i++){
      if(data[i]["selected"] === true) {
        data.splice(i, 1)
        this.setState({data:data})
      }
    }
  }

  handleUnreadMessage = () => {
    let unreadMessages = 0;
    let data = this.state.data
    for(var i =0; i<data.length; i++){
      if(data[i]["read"] === false){
        unreadMessages++
      }
    }
    return unreadMessages
  }

  bulkIcon = () => {
    let data = this.state.data
    if(data.every(this.isSelected)){
      return "fa fa-check-square-o"
    } else if (data.some(this.isSelected)){
      return "fa fa-minus-square-o"
    } else {
      return "fa fa-square-o"
    }
  }

  disableButton = () => {
    let data = this.state.data
    if (data.some(this.isSelected) === false) return 'disabled';
  }

  markAsRead = () => {
    let data = this.state.data
    for(var i = 0; i<data.length; i++){
      if(data[i]["selected"] === true){
        data[i]["read"] = true
        data[i]["selected"] = false
      }
    }
    this.setState({data:data})
  }

  markAsUnread = () => {
    let data = this.state.data
    for(var i = 0; i<data.length; i++){
      if(data[i]["selected"] === true){
        data[i]["read"] = false;
        data[i]["selected"] = false;
      }
    }
    this.setState({data:data})
  }


  render() {
    return (
      <div className="App">
        <Toolbar emails={this.state.data}
          handleBulkSelector={this.handleBulkSelector}
          handleDeleteButton={this.handleDeleteButton}
          handleUnreadMessage={this.handleUnreadMessage}
          bulkIcon={this.bulkIcon}
          disableButton={this.disableButton}
          markAsRead={this.markAsRead}
          markAsUnread={this.markAsUnread}/>
        <ComposeMessage />
        <MessageList emails={this.state.data} handleClickEmail={this.handleClickEmail}
        handleStarClick={this.handleStarClick}
        handleCheckboxClick={this.handleCheckboxClick}/>
      </div>
    );
  }
}

export default App;
