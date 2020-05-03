import React from 'react';
import Post from './Post';

const Posts = ({posts}) => {
    if (!posts.lenth) {
        return <p className="text-center">Пока нет постов</p>
    }
    return posts.map(post => <Post post = {post} />)
}

export default Posts;