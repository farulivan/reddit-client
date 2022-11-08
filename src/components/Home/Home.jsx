import React from 'react';
import { Post } from '../Post/Post';
import { useSelector } from 'react-redux';

export const Home = () => {
  const posts = useSelector((store) => store.reddit.posts.data.children);
  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={post.data.id}
          post={post}
          // onToggleComments={onToggleComments(index)}
        />
      ))}
    </>
  );
};
