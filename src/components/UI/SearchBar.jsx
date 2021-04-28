import React, { useState } from "react";

import { connect } from 'react-redux'

import { searchLogs } from '../../redux/log/log.actions'


const SearchBar = ({ searchLogs }) => {

  const [search, setSearch] = useState("")

  const searchHandler = (e) => {
    setSearch(e.target.value)
    searchLogs(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    searchLogs(search)
  }

  return (
    <form onSubmit={(e) => {submitHandler(e)}} className="flex items-center">
      <input onChange={(e) => {searchHandler(e)}} type="text" placeholder="Search" className="SearchInput" />
      <button type="submit" className="ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
    searchLogs: (search) => dispatch(searchLogs(search))
})


export default connect(null, mapDispatchToProps)(SearchBar);

