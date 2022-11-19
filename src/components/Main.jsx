import React from 'react';
import { Post } from './Post';
import { SadIcon } from '../assets/icons';

export const Main = ({ posts, isLoading, error }) => {
  if (isLoading) {
    return (
      <div>
        <div role="status" className="flex animate-pulse w-full">
          <div className="flex justify-center items-center w-28 h-16 bg-gray-300 rounded">
            <svg
              className="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="w-2/3 ml-4">
            <div className="h-2.5 bg-gray-200 rounded-full w-96 mb-2"></div>
            <div className="h-2 bg-gray-200 rounded-full w-32 mb-1.5"></div>
            <div className="h-2 bg-gray-200 rounded-full w-24"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <article className="w-full flex">
        <div className="w-full flex justify-center items-center">
          <SadIcon />
          <p className="ml-10 font-bold text-orange-500">
            Sorry.. There was an Error..
          </p>
        </div>
      </article>
    );
  }
  return (
    <>
      {posts
        .filter((post) => !post.over_18)
        .map((post) => (
          <Post
            key={post.id}
            post={post}
            isLoading={isLoading}
            // onToggleComments={onToggleComments(index)}
          />
        ))}
    </>
  );
};
