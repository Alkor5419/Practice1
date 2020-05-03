import React from 'react';
import Post from './Post';

const FetchedPosts = ({posts}) => {
    if (!posts.lenth) {
        return <button className="btn btn-primary">Загрузить</button>
    }
    return (
        <div>
            <h1>Fetched posts</h1>
        </div>
    )
}

export default FetchedPosts;