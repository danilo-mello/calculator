

export const createLog = (log) => {

    fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${log.meta.userId}.json`, {
        method: 'POST',
        body: JSON.stringify(log),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(response => response.json())

    return log

}

export const loadingUserLogs = (userId) => {

    fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${userId}.json`)
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
         
        return loadedLogs
    })
}

export const deleteLog = (state, obj) => {

    fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${obj.userId}/${obj.logId}.json`, {
        method: 'DELETE',
    })
    .then(response => response.json())

    return {
        ...state,
        userLogs: state.userLogs.filter(l => l.id !== obj.logId)
    }
}

export const updateLog = (state, obj) => {


    fetch(`https://calc-log-default-rtdb.firebaseio.com/logs/${obj.updatedLog.meta.userId}/${obj.logId}.json`, {
        method: 'PUT',
        body: JSON.stringify(obj.updatedLog),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(response => response.json())

    return {
        ...state,
        userLogs: loadingUserLogs(obj.updatedLog.meta.userId)
    }
}

export const sortLogs = (state, obj) => {

    let sortedLogs = []

    switch (obj.sortBy) {
        case 'title':
          
          let sortedByTitle = []
          for (let i = 0; i < state.userLogs.length; i++) {
            sortedByTitle.push(state.userLogs[i].title)
          }
          
          obj.filter ? sortedByTitle.reverse() : sortedByTitle.sort()

          for (let i = 0; i < sortedByTitle.length; i++) {
            for (let j = 0; j < state.userLogs.length; j++) {
                if (sortedByTitle[i] === state.userLogs[j].title){
                    if (!sortedLogs.includes(state.userLogs[j])){
                        sortedLogs.push(state.userLogs[j])
                    }
                }
            }
          }
          break;
        case 'result':
            let sortedByResult = []
            for (let i = 0; i < state.userLogs.length; i++) {
                sortedByResult.push(state.userLogs[i].result)
            }
            obj.filter ? sortedByResult.sort(function(a, b){return b-a}) : sortedByResult.sort(function(a, b){return a-b})
  
            for (let i = 0; i < sortedByResult.length; i++) {
              for (let j = 0; j < state.userLogs.length; j++) {
                  if (sortedByResult[i] === state.userLogs[j].result){
                    if (!sortedLogs.includes(state.userLogs[j])){
                        sortedLogs.push(state.userLogs[j])
                    }   
                  }
              }
            }
          break;
        case 'dateCreated':
            let sortedByDateCreated = []
            for (let i = 0; i < state.userLogs.length; i++) {
                sortedByDateCreated.push(state.userLogs[i].dateCreated)
            }
            obj.filter ? sortedByDateCreated.sort(function(a, b){return b-a}) : sortedByDateCreated.sort(function(a, b){return a-b})
            for (let i = 0; i < sortedByDateCreated.length; i++) {
              for (let j = 0; j < state.userLogs.length; j++) {
                  if (sortedByDateCreated[i] === state.userLogs[j].dateCreated){
                    if (!sortedLogs.includes(state.userLogs[j])){
                        sortedLogs.push(state.userLogs[j])
                    } 
                  }
              }
            }
          break;
        case 'dateModified':
            let sortedByDateModified = []
            for (let i = 0; i < state.userLogs.length; i++) {
                sortedByDateModified.push(state.userLogs[i].dateModified)
            }
            obj.filter ? sortedByDateModified.sort(function(a, b){return b-a}) : sortedByDateModified.sort(function(a, b){return a-b})
  
            for (let i = 0; i < sortedByDateModified.length; i++) {
              for (let j = 0; j < state.userLogs.length; j++) {
                  if (sortedByDateModified[i] === state.userLogs[j].dateModified){
                    if (!sortedLogs.includes(state.userLogs[j])){
                        sortedLogs.push(state.userLogs[j])
                    } 
                  }
              }
            }
          break;
        default:
          break;
    }

    return {
        ...state,
        userLogs: sortedLogs
    }
}

export const searchLogs = (state, search) => {
    let searchedLogs = []
    console.log(search)
    for (let i = 0; i < state.userLogs.length; i++) {
        if(state.userLogs[i].title.includes(search) || state.userLogs[i].result.toString().includes(search)) {
            searchedLogs.push(state.userLogs[i])
        }
    }
    console.log(searchedLogs)
    return {
        ...state,
        userLogs: searchedLogs
    }

}