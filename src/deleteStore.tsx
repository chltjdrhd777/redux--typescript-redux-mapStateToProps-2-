import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";

function Todo({ text, onClick, id }: any) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onClick}>DELETE</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  return {
    onClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
