import React from 'react';
import { Post } from '../Post/Post';
import { useSelector } from 'react-redux';

export const Home = () => {
  // const posts = useSelector((store) => store.reddit.posts.data.children);
  const fetchPosts = useSelector((store) => store.reddit.fetchPosts);
  console.log(fetchPosts);
  return (
    <>
      {fetchPosts &&
        fetchPosts.map((post, index) => (
          <Post
            key={post.id}
            post={post}
            // onToggleComments={onToggleComments(index)}
          />
        ))}
    </>
  );
};
