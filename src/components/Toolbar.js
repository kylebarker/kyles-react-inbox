import React, { Component } from 'react';


class Toolbar extends Component {

  render () {
    return (
      <div>
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">{this.props.handleUnreadMessage()}</span>
              unread messages
            </p>

            <a className="btn btn-danger">
              <i className="fa fa-plus"></i>
            </a>

            <button
              className="btn btn-default"
              onClick={ (e) => this.props.handleBulkSelector() }
            >
              <i className={this.props.bulkIcon()}></i>
            </button>

            <button className="btn btn-default"
              disabled={this.props.disableButton()}
              onClick ={(e) => this.props.markAsRead()}>
              Mark As Read
            </button>

            <button className="btn btn-default"
              disabled={this.props.disableButton()}
              onClick={(e) => this.props.markAsUnread()}>
              Mark As Unread
            </button>

            <select className="form-control label-select">
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default" onClick={this.props.handleDeleteButton}>
              <i className="fa fa-trash-o" ></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Toolbar;
