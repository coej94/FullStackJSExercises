//increment action
function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index: index //You can just write index, because the key and the value have the same name
    }
}

//add comment
function addComment(postId, author, comment){
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment
function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}

