import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Redux/actions';


const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => {
        return state.posts.fetchedPosts;
    });

    if (!posts.length) {
        return <button 
        className="btn btn-primary"
        onClick = {() => dispatch(fetchPosts())}
        >Загрузить</button>
    }
    return posts.map(post => <Post post = {post} key = {post.id} />);
}

export default FetchedPosts;