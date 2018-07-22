import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TagSection} from "./TagSection";
import '../styles/RepoItem.css'
import {Star, AlertCircle} from 'react-feather';

export class RepoItem extends Component {
    render() {
        const tags = this.props.repo.repositoryTopics.nodes.map((node) => node.topic.name);

        return (
            <article className="repo-item">
                <div className="repo-stats">
                    <section className="stat">
                        <Star className="stat-icon"/><label>{this.props.repo.stargazers.totalCount}</label>
                    </section>
                    <section className="stat">
                        <AlertCircle className="stat-icon"/><label>{this.props.repo.issues.totalCount}</label>
                    </section>
                </div>
                <div className="repo-info">
                    <h5 className="repo-title">
                        <a href={this.props.repo.owner.url}>
                            {this.props.repo.owner.login}
                        </a>/
                        <a href={this.props.repo.url}>
                            {this.props.repo.name}
                        </a>
                    </h5>
                    <p>{this.props.repo.description}</p>
                    <TagSection tags={tags}/>
                </div>
            </article>
        )
    }
}

RepoItem.propTypes = {
    repo: PropTypes.object
};