import React, { useContext, useEffect, useState } from "react";

import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import { fetchLogsStartAsync, deleteLog, sortLogs } from '../../redux/log/log.actions'
import { UserContext } from "../../context/UserProvider";
// import CheckBox from "../UI/CheckBox"; 
import SearchBar from "../UI/SearchBar";

const LogListPage = ({ logs, fetchLogsStartAsync, deleteLog, sortLogs }) => {

  const userContext = useContext(UserContext);
  const [filter, setFilter] = useState({
    title: {
      active: false,
      asc: false
    },
    result: {
      active: false,
      asc: false
    },
    dateCreated: {
      active: false,
      asc: false
    },
    dateModified: {
      active: false,
      asc: false
    }
  })

  useEffect(() => {
    userContext && fetchLogsStartAsync(userContext.uid);
  }, [userContext, fetchLogsStartAsync]);

  const deleteHandler = (e) => {

    deleteLog({
      logId: e.target.parentElement.id, 
      userId: userContext.uid
    })

  }

  const dateHandler = (date) => {
    
    var theDate = new Date(date);
    return theDate.toLocaleDateString();
    
  }

  const filterHandle = (e) => {

    sortLogs({
      sortBy: e.target.id, 
      filter: filter.[e.target.id].asc
    })

    switch (e.target.id) {
      case 'title':
        setFilter({
          title: {
            active: true,
            asc: !filter.title.asc
          },
          result: {
            active: false,
            asc: false
          },
          dateCreated: {
            active: false,
            asc: false
          },
          dateModified: {
            active: false,
            asc: false
          }
        })
        break;
      case 'result':
        setFilter({
          title: {
            active: false,
            asc: false
          },
          result: {
            active: true,
            asc: !filter.result.asc
          },
          dateCreated: {
            active: false,
            asc: false
          },
          dateModified: {
            active: false,
            asc: false
          }
        })
        break;
      case 'dateCreated':
        setFilter({
          title: {
            active: false,
            asc: false
          },
          result: {
            active: false,
            asc: false
          },
          dateCreated: {
            active: true,
            asc: !filter.dateCreated.asc
          },
          dateModified: {
            active: false,
            asc: false
          }
        })
        break;
      case 'dateModified':
        setFilter({
          title: {
            active: false,
            asc: false
          },
          result: {
            active: false,
            asc: false
          },
          dateCreated: {
            active: false,
            asc: false
          },
          dateModified: {
            active: true,
            asc: !filter.dateModified.asc
          }
        })
        break;
    
      default:
        break;
    }

  }

  const clearFilters = () => {
    setFilter({
      title: {
        active: false,
        asc: false
      },
      result: {
        active: false,
        asc: false
      },
      dateCreated: {
        active: false,
        asc: false
      },
      dateModified: {
        active: false,
        asc: false
      }
    })
  }
  
  return (
    <div className="LogList relative">
      <div className="w-5/6">
        <div className="Filter">

          <p onClick={clearFilters}>filter by:</p>
          <p id="title" onClick={(e) => filterHandle(e)}>Title {filter.title.active ? filter.title.asc ? <span>↓</span> : <span>↑</span> : ""}</p>
          <p id="result" onClick={(e) => filterHandle(e)}>Result {filter.result.active ? filter.result.asc ? <span>↓</span> : <span>↑</span> : ""}</p>
          <p id="dateCreated" onClick={(e) => filterHandle(e)}>Date Created {filter.dateCreated.active ? filter.dateCreated.asc ? <span>↓</span> : <span>↑</span> : ""}</p>
          <p id="dateModified" onClick={(e) => filterHandle(e)}>Date Modified {filter.dateModified.active ? filter.dateModified.asc ? <span>↓</span> : <span>↑</span> : ""}</p>

          <SearchBar />
        </div>
        {logs && logs.map(
            ({
              id,
              title,
              log,
              result,
              comment,
              dateCreated,
              dateModified,
              active,
            }) => (
              <div key={id} id={id}  className="MyLog">

                <p>title: {title}</p>
                <p>result: {result}</p>
                <p>date created: {dateHandler(dateCreated)}</p>
                <p>date mod: {dateHandler(dateModified)}</p>

                <Link key={id} to={{pathname:`/mylogs/${id}`}} params={{
                  id,
                  title,
                  log,
                  result,
                  comment,
                  dateCreated,
                  dateModified,
                  active,
                }}>
                  <p>Details</p>
                </Link>  

                <p onClick={(e) => deleteHandler(e)}>×</p>
              </div>
            )
          )}

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    logs: state.log.userLogs
})

const mapDispatchToProps = (dispatch) => ({
    fetchLogsStartAsync: (uid) => dispatch(fetchLogsStartAsync(uid)),
    deleteLog: (obj) => dispatch(deleteLog(obj)),
    sortLogs: (obj) => dispatch(sortLogs(obj))
})


export default connect(mapStateToProps, mapDispatchToProps)(LogListPage);
