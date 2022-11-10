import React from 'react';
import {
  NoImage,
  EllipsisVert,
  ChevronUp,
  ChevronDown,
  Comments,
} from '../assets/icons';
import { truncateString, shortenNumber } from '../utils/helperFunctions';
import moment from 'moment/moment';

export const Post = (props) => {
  const post = props.post;
  // console.log(post.)
  return (
    <article key={post.id} className="w-full flex">
      <div className="mb-10 w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-28 h-16 overflow-hidden rounded-md">
            <img src={post.url} alt="" className="object-cover" />
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-zinc-700">
              {truncateString(post.title, 70)}
            </h3>
            <div className="post-details">
              <span className="text-zinc-400 text-sm">
                submitted {moment.unix(post.created_utc).fromNow()} by
              </span>
              <span className="author-details">
                {/* <Avatar name={post.author} /> */}
                <span className="text-orange-600 font-bold text-sm">
                  {` ${post.author}`}
                </span>
              </span>
            </div>
            <div className="flex text-zinc-400 items-center text-sm">
              <Comments />
              <span className="ml-1">
                {shortenNumber(post.num_comments, 1)} comments
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-zinc-400">
          <div className="mr-4">
            <EllipsisVert />
          </div>
          <div className="w-16 flex flex-col justify-center items-center">
            <ChevronUp />
            <p className="text-zinc-700 font-bold">
              {shortenNumber(post.ups, 1)}
            </p>
            <ChevronDown />
          </div>
        </div>
      </div>
    </article>
  );
};
