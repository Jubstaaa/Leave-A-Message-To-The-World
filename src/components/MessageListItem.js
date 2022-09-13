import React from "react";
import { Link } from "react-router-dom";

const MessageListItem = ({
  id,
  dateAdded,
  title,
  description,
  displayName,
  photoUrl,
  uid,
  isAuthenticated,
}) => {
  let date = new Date(dateAdded);
  date = date.toLocaleString("en-GB", { hour12: false });

  return (
    <div className="card mb-3 container">
      <div className="card-body">
        <div className="d-flex flex-start">
          <img
            className="rounded-circle shadow-sm mr-3"
            src={photoUrl}
            alt="avatar"
            width="40"
            height="40"
          />
          <div className="w-100">
            <div className=" d-flex justify-content-between align-items-center mb-3">
              <div>
                <h6 className="text-dark ">{title}</h6>
                <span className="small text-primary fw-bold mb-0">
                  {displayName}
                </span>
              </div>
              <p className="small mb-0" style={{ color: "#aaa" }}>
                {date}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="small p-1 mb-0">{description}</p>
              {uid === isAuthenticated ? (
                <div className="d-flex flex-row">
                  <Link
                    to={{
                      pathname: `/edit/${id}`,
                      state: uid,
                    }}
                  >
                    Edit
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageListItem;
