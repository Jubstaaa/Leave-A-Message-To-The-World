import database from "../firebase/firebaseConfig";

export const addMessage = (message) => ({
  type: "ADD_MESSAGE",
  message,
});

export const addMessageToDatabase = (messageData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const displayName = getState().auth.displayName;
    const photoUrl = getState().auth.photoUrl;
    const { title = "", description = "", dateAdded = 0 } = messageData;
    const message = {
      title,
      description,
      dateAdded,
      uid,
      displayName,
      photoUrl,
    };

    database.ref("messages").push(message);
    // .then(() => {
    //   dispatch(
    //     addBlog({
    //       id: blog.id,
    //       uid: uid,
    //       ...blog,
    //     })
    //   );
    // });
  };
};

export const removeMessage = (id) => ({
  type: "REMOVE_MESSAGE",
  id: id,
});

export const removeMessageFromDatabase = (id) => {
  return (dispatch) => {
    return database
      .ref(`messages/${id}`)
      .remove()
      .then(() => {
        dispatch(removeMessage(id));
      });
  };
};

export const editMessage = (id, updates) => ({
  type: "EDIT_MESSAGE",
  id,
  updates,
});

export const editMessageFromDatabase = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`messages/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editMessage(id, updates));
      });
  };
};

export const setMessages = (messages) => ({
  type: "SET_MESSAGES",
  messages,
});

export const getMessagesFromDatabase = () => {
  return (dispatch, getState) => {
    return database.ref("messages").on("value", (snapshot) => {
      const messages = [];

      snapshot.forEach((message) => {
        messages.unshift({
          id: message.key,
          ...message.val(),
        });
      });
      dispatch(setMessages(messages));
    });
  };
};

export const clearMessages = () => ({
  type: "CLEAR_MESSAGES",
});
