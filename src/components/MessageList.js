import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {
  render () {
    console.log(this.props)
    const messages = this.props.emails.map((message, idx) => {
        return <Message key={idx} subject={message.subject} labels={message.labels} read={message.read} starred={message.starred} id={message.id} handleClickEmail={this.props.handleClickEmail} handleStarClick={this.props.handleStarClick} handleCheckboxClick={this.props.handleCheckboxClick} selected={message.selected}
        setMessageClass={this.props.setMessageClass}
        />
    })

    return (
      <div>
        {messages}
      </div>
    )
  }
}
export default MessageList ;
