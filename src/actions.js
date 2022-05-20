import * as actions from './actionTypes'

export function bugAdded(description){
    return {
        type: actions.BUG_ADDED,
    payload:{
        description
    }
    }
}

export const bugRemoved = ()=>({
        type: actions.BUG_REMOVED,
    payload:{
        id: 1
    }
})

export const bugResolved = (id) =>{
    return {
        type: actions.BUG_RESOLVED,
        payload:{
            id
        }
    }
}