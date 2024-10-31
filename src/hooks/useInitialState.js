import { useReducer, useState } from 'react'
import data from '../data/data'

const TYPES = {
    ADDED: Symbol('Add a comment'),
}

function commentsReducer(comments, action) {
    switch (action.type) {
        case TYPES.ADDED: {
            const newComments = [...comments, action.newComment]

            return newComments
        }
    }
}

const useInitialState = () => {
    const [comments, dispatch] = useReducer(commentsReducer, data.comments)
    const addComment = (newComment) =>
        dispatch({ type: TYPES.ADDED, newComment })
    return {
        currentUser: data.currentUser,
        comments,
        addComment,
    }
}
export default useInitialState
