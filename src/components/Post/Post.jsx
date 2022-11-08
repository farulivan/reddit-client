import React from 'react';
import { NoImage } from '../../assets/noimage';

export const Post = (props) => {
  const post = props.post.data;
  return (
    <article key={post.id}>
      <div className="flex mb-10">
        <div className="flex">
          <div className="max-w-[5rem] max-h-[5rem] overflow-hidden">
            <img src={post.url} alt="" className="object-cover" />
          </div>
          <div className="ml-4">
            <h3 className="font-bold">{post.title}</h3>
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

          <div className="post-votes-container">
            {/* <button
            type="button"
            className={`icon-action-button up-vote ${
              voteValue === 1 && 'active'
            }`}
            onClick={() => onHandleVote(1)}
            aria-label="Up vote"
          >
            {renderUpVote()}
          </button> */}
            {/* <p className={`post-votes-value ${getVoteType()}`}>
            {shortenNumber(post.ups, 1)}
          </p>
          <button
            type="button"
            className={`icon-action-button down-vote ${
              voteValue === -1 && 'active'
            }`}
            onClick={() => onHandleVote(-1)}
            aria-label="Down vote"
          >
            {renderDownVote()}
          </button> */}
          </div>

          {/* {renderComments()} */}
        </div>
      </div>
    </article>
  );
};
