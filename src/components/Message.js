import React, { Component } from 'react';

class Message extends Component {

  handleReadEmail = () => {
    this.props.handleClickEmail(this.props.id)
  }

  handleFavoriteEmail = () => {
    this.props.handleStarClick(this.props.id)
  }

  handleSelectedEmail = () => {
    this.props.handleCheckboxClick(this.props.id)
  }

  render () {
    let labels = this.props.labels.map(label => <span className="label label-warning">{label}</span>)

    return (
      <div>
        <div className={this.props.selected ? "message row selected": this.props.read ? "message row read" : "message row unread"} onClick={this.handleReadEmail}>
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox"  onChange={this.handleSelectedEmail} checked={this.props.selected ? true : false} />
              </div>
              <div className="col-xs-2">
                <i className={this.props.starred ? "star fa fa-star" : "star fa fa-star-o"} onClick={this.handleFavoriteEmail}></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            {labels}
            <a href="#">
              {this.props.subject}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Message;
