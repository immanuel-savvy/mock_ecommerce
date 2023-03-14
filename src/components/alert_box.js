import React from "react";

const Alert_box = ({ message, type }) => {
  return <div className={`alert alert-${type || "danger"}`}>{message}</div>;
};

export default Alert_box;
