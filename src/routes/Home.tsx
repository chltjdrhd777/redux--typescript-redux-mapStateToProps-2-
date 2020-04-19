import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../deleteStore";

function Home({ todos, addTodo }: any) {
  const [text, setText] = useState("");
  function onChange(e: any) {
    setText(e.target.value);
  }

  function onSubmit(e: any) {
    e.preventDefault();
    setText("");
    addTodo(text);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo: any) => (
          <ToDo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}
//[{text,id} {text,id}....]

//mapStateToProps(state from redux, ownProps)
//1. in index.tsx, I set the "Provider" tag which allows me to bulid the route towards redux store
//2. to access and get the state of Redux createStore, I should use "connect(mapStateToProps)" in the target react component(in this case, "Home.tsx")
//3. mapStateToProps(state, ownProps) has two props  1.state = which I get from redux state. 2. ownProps = props that is given from router. in this case, function Home(props <-----this one was given)
//4. note!!! everyting mapStateToProps returns is added to props which are given by react-router. Home(props<-------here)
//5. note!!! everything mapStateToProps returns should be like {state} <--- curly bracket is needed

function mapStateToProps(state: any) {
  return { todos: state };
}

//mapDispatchToProps(dispatch,ownProps)
//1. it also acts like mapStateToProps but it sends dispatch as a default function.
//2. note, everything mapDispatchToProps returns is added to props which are given by react-router.
function mapDispatchToProps(dispatch: any) {
  return { addTodo: (text: string) => dispatch(actionCreators.addTodo(text)) };
}

//connect(mapStateToProps,mapDispatchToProps) = which gives me users a qualification to utilize redux information
export default connect(mapStateToProps, mapDispatchToProps)(Home);
