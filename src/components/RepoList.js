import React, {Component} from 'react';
import {RepoItem} from "./RepoItem";
import '../styles/RepoList.css'

export class RepoList extends Component {
    render() {
        const repos = [{
            title: "Adafruit_LSM9DS0",
            url: "https://github.com/jckw/Adafruit_LSM9DS0",
            owner: {
                name: "jckw",
                url: "https://github.com/jckw"
            },
            description: "A python module for the Adafruit LSM9DS0 breakout board, for use with the Raspberry Pi",
            stars: 4,
            contributors: 1,
            language: "Python",
            tags: ["Python", "hardware", "great guy"]
        }];
        const repoItems = repos.map((repo) =>
            <RepoItem key={repo.url} repo={repo}/> // Repository URLs are unique
        );

        return (
            <section className="repo-list">
                {repoItems}
            </section>
        )
    }
}
