import React from 'react';
import AddStar from './add-star';
import RemoveStar from './remove-star';

function DisplayRepos(props) {
  const { current, data, refetch, handleMore } = props;

  return (
    <div>
        <h2>First {current} repositories</h2>
        {data.viewer.repositories.edges.map(({ node }) => (
          <ul className='list' key={node.id}>
            <li>
              {node.name}

              {node.viewerHasStarred ? (
                <RemoveStar id={node.id} refetch={refetch} />
              ) : (
                <AddStar id={node.id} refetch={refetch} />
              )}
            </li>
            <li>stars {node.stargazers.totalCount}</li>
          </ul>
        ))}
      <button onClick={handleMore}>
        Load more
      </button>
    </div>
  );
}

export default DisplayRepos;
