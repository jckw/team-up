import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TagSection} from "./TagSection";
import '../styles/RepoItem.css'
import {Star, Users} from 'react-feather';

export class RepoItem extends Component {
    render() {
        return (
            <article className="repo-item">
                <div className="repo-stats">
                    <section className="stat">
                        <Star/><label>{this.props.repo.stars}</label>
                    </section>
                    <section className="stat">
                        <Users/><label>6</label>
                    </section>
                </div>
                <div className="repo-info">
                    <TagSection tags={this.props.repo.tags}/>
                    <h5 className="repo-title">
                        <a href={this.props.repo.owner.url}>{this.props.repo.owner.name}</a>/<a href={this.props.repo.url}>{this.props.repo.title}</a>
                    </h5>
                    <p>{this.props.repo.description}</p>
                </div>
            </article>
        )
    }
}

RepoItem.propTypes = {
    repo: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
        owner: PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string
        }),
        description: PropTypes.string,
        stars: PropTypes.number,
        contributors: PropTypes.number,
        language: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string)
    })
};