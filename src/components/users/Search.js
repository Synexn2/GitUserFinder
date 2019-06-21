import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
//import GithubContext from "../../context/github/githubContext";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  //const githubContext = useContext(GithubContext);

  const [text, setText] = useState(""); //text: name of the state, setText; default method defined, usestate(''): pass default state value of ''

  const onChange = e => setText(e.target.value); //setText method to set the value of the Text state
  //onChange = e => this.setState({ text: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a search text", "light");
    } else {
      searchUsers(text);
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
      {//chech if ShowClear is true then show clear button
      showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.PropType = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
