import React, {Component} from 'react';
import {NavItem} from "./NavItem";
import '../styles/CategoryNav.css';

export class CategoryNav extends Component {
    render() {
        return (
            <ul className="nav category-nav">
                <NavItem title="Mobile" href="#" icon="📱" icon_label="iPhone"/>
                <NavItem title="Web" href="#" icon="🕸" icon_label="Web"/>
                <NavItem title="Tools" href="#" icon="🛠" icon_label="Tools"/>
                <NavItem title="Bots" href="#" icon="🤖" icon_label="Robot"/>
                <NavItem title="Design" href="#" icon="🎨" icon_label="Palette"/>
                <NavItem title="Science" href="#" icon="🔬" icon_label="Microscope"/>
                <NavItem title="Blockchain" href="#" icon="⛓" icon_label="Chain"/>
            </ul>
        )
    }
}
