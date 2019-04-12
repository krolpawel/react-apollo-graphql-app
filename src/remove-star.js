import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const removeStarQuery = gql`
  mutation RemoveStar($repoid: ID!) {
    removeStar(input: { starrableId: $repoid }) {
      starrable {
        stargazers {
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;

class RemoveStar extends Component {
  render() {
    return (
      <Mutation mutation={removeStarQuery}>
        {(removeStar, {data, loading, error}) => {
          return (
            <div>
              <button
                onClick={() => {
                  removeStar({
                    variables: { repoid: this.props.id }
                  }).then( res => {
                    this.props.refetch();
                  })
                }}
              >
                {" "}
                Remove star
              </button>
              {loading && <p>loading...</p>}
              {error && <p>{error.message}</p>}
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default RemoveStar;
