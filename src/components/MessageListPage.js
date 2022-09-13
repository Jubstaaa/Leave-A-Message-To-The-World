import React from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import { connect } from "react-redux";
import { addMessageToDatabase } from "../actions/messages";

const MessageListPage = (props) => {
  return (
    <div className="mt-3">
      <div className="container text-center">
        {props.isAuthenticated ? (
          <MessageForm
            onSubmit={(message) => {
              props.dispatch(addMessageToDatabase(message));
            }}
          />
        ) : (
          <div className="alert alert-warning" role="alert">
            Please login for leave message
          </div>
        )}
      </div>
      <div>
        <p className="display-4 text-white d-block text-center bg-primary p-5 ">
          Messages From People
        </p>
        <MessageList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.uid,
});

export default connect(mapStateToProps)(MessageListPage);
