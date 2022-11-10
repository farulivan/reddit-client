import React from 'react';
import { Post } from './Post';
import { useSelector } from 'react-redux';

export const Main = () => {
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
