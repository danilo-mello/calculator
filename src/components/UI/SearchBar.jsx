import React, { useState, useContext } from "react";

import { connect } from 'react-redux'

import { searchLogs } from '../../redux/log/log.actions'
import { UserContext } from "../../context/UserProvider";


const SearchBar = ({ searchLogs }) => {

  const [search, setSearch] = useState("")
  const userContext = useContext(UserContext);


  const searchHandler = (e) => {
    setSearch(e.target.value)
    fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${userContext.uid}.json`)
        .then(response => response.json())
        .then(responseData => {
    
            const loadedLogs = []
            
            for (const key in responseData){
                
                const log = {                   
                    id: key,
                    title: responseData[key].title,
                    log: responseData[key].log,
                    result: responseData[key].result,
                    comment: responseData[key].comment,
                    dateCreated: responseData[key].meta.dateCreated,
                    dateModified: responseData[key].meta.dateModified,
                    active: responseData[key].meta.active,
    
                }
    
                loadedLogs.push(log)
    
            }
            if (loadedLogs) {
              searchLogs({
                search: e.target.value,
                userId: userContext.uid,
                logs: loadedLogs
              })
            }
            
    })

  }

  const submitHandler = (e) => {
    
    e.preventDefault()
    fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${userContext.uid}.json`)
        .then(response => response.json())
        .then(responseData => {
    
            const loadedLogs = []
            
            for (const key in responseData){
                
                const log = {                   
                    id: key,
                    title: responseData[key].title,
                    log: responseData[key].log,
                    result: responseData[key].result,
                    comment: responseData[key].comment,
                    dateCreated: responseData[key].meta.dateCreated,
                    dateModified: responseData[key].meta.dateModified,
                    active: responseData[key].meta.active,
    
                }
    
                loadedLogs.push(log)
    
            }
            if (loadedLogs) {
              searchLogs({
                search: search,
                userId: userContext.uid,
                logs: loadedLogs
              })
            }
            
    })
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
    searchLogs: (obj) => dispatch(searchLogs(obj))
})

export default connect(null, mapDispatchToProps)(SearchBar);

