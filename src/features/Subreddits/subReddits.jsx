import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubreddits } from '../../api/reddit';

const Subreddits = () => {
  const dispatch = useDispatch();
  const { subreddits } = useSelector((store) => console.log(store));

  useEffect(() => {
    dispatch(getSubreddits());
  }, []);

  return (
    <>
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => {
          <li>{subreddit.display_name}</li>;
        })}
      </ul>
    </>
  );
};

export default Subreddits;
