import React from 'react';
import { Post } from '../Post/Post';
import { useSelector } from 'react-redux';

export const Home = () => {
  const { posts } = useSelector((store) => store.reddit);
  return (
    <>
      {posts &&
        posts.map((post, index) => (
          <Post
            key={post.id}
            post={post}
            // onToggleComments={onToggleComments(index)}
          />
        ))}
    </>
  );
};
