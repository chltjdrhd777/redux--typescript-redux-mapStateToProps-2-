import React from "react";
import { connect } from "react-redux";

function About({ toDos }: any) {
  return <div>{toDos?.text}</div>;
}

function mapStateToProps(state: any, ownProps: any) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id);
  return { toDos: state.find((todo: any) => todo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(About);
