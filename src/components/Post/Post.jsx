import React from 'react';
import { NoImage } from '../../assets/noimage';
import { truncateString } from '../../utils/helperFunctions';

export const Post = (props) => {
  const post = props.post.data;
  return (
    <article key={post.id}>
      <div className="flex mb-10">
        <div className="flex">
          <div className="w-[5rem] h-[5rem] overflow-hidden">
            <img src={post.url} alt="" className="object-cover" />
          </div>
          <div className="ml-4">
            <h3 className="font-bold">{truncateString(post.title, 70)}</h3>
            <div className="post-details">
              <span className="author-details">
                {/* <Avatar name={post.author} /> */}
                <span className="author-username">{post.author}</span>
              </span>
              {/* <span>{moment.unix(post.created_utc).fromNow()}</span> */}
              <span className="post-comments-container">
                <button
                  type="button"
                  className={`icon-action-button ${
                    post.showingComments && 'showing-comments'
                  }`}
                  // onClick={() => onToggleComments(post.permalink)}
                  aria-label="Show comments"
                >
                  {/* <TiMessage className="icon-action" /> */}
                </button>
                {/* {shortenNumber(post.num_comments, 1)} */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
