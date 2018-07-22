import React, {Component} from 'react';
import {RepoItem} from "./RepoItem";
import '../styles/RepoList.css'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class RepoList extends Component {
    render() {
        if (this.props.repoQuery && this.props.repoQuery.loading) {
            return (
                <div>Loading...</div>
            )
        }

        if (this.props.repoQuery && this.props.repoQuery.error) {
            return (
                <div>Error loading repos</div>
            )
        }

        const repos = this.props.repoQuery.search.edges;

        const repoItems = repos.map((edge) =>
            <RepoItem key={edge.node.url} repo={edge.node}/> // Repository URLs are unique
        );

        return (
            <section className="repo-list">
                {repoItems}
            </section>
        )
    }
}

const REPO_QUERY = gql`
query { 
  search(query:"help-wanted-issues:>0 stars:3..300 language:python pushed:>2018-07-14", type:REPOSITORY, first: 4) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          name
          description
          url
          owner {
            login
            url
          }
          stargazers {
            totalCount
          }
          issues {
            totalCount
          }
          repositoryTopics(first: 3) {
            nodes {
              ... on RepositoryTopic {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export default graphql(REPO_QUERY, {name: "repoQuery"})(RepoList)