import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { users, clearUsers } = githubContext; //destructure: get clearUsers, users from githubContext
  //const { setAlert } = alertContext; //destructure: get setAlert, users from alertContext

  const [text, setText] = useState(""); //text: name of the state, setText; default method defined, usestate(''): pass default state value of ''

  const onChange = e => setText(e.target.value); //setText method to set the value of the Text state
  //onChange = e => this.setState({ text: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter a search text", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {//chech if users array lenght is grater than zero then show clear button
      users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
