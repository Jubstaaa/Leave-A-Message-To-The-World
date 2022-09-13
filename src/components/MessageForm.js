import React, { Component } from "react";

export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.message ? props.message.title : "",
      description: props.message ? props.message.description : "",
      error: "",
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.description) {
      this.setState({ error: "Please Fill All Fields " });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        dateAdded: Date.now(),
      });
      this.setState(() => ({ description: "" }));
      this.setState(() => ({ title: "" }));
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <div class="alert alert-warning">{this.state.error}</div>
        )}
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <input
              className="form-control"
              placeholder="Title of Your Message"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
          </div>
          <div className="input-group mb-3">
            <textarea
              rows={10}
              style={{ resize: "none" }}
              className="form-control"
              placeholder="Your Message"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            ></textarea>
          </div>
          <div>
            <button
              className="btn btn-warning text-white p-2 btn-block mb-4"
              type="submit"
            >
              Leave a Message
            </button>
          </div>
        </form>
      </div>
    );
  }
}
