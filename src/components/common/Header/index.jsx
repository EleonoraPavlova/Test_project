import { Component } from "react"
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./index.scss"


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }
    toggle() {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        return this.state.isVisible ? isVisible : invisible;
        <header className="header wrapper flex-between">
            <ul className="header__left flex">
                <li className="header__item">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : "false"}><span className="uppercase header__link">Women</span></NavLink>
                </li>
                <li className="header__item">
                    <NavLink to="/men" className={({ isActive }) => isActive ? "active" : "false"}><span className="uppercase header__link">Men</span></NavLink>
                </li>
                <li className="header__item">
                    <NavLink to="/kids" className={({ isActive }) => isActive ? "active" : "false"}><span className="uppercase header__link">Kids</span></NavLink>
                </li>
            </ul>
            <div className="header__center">
                <img src={process.env.PUBLIC_URL + '/icon/icon-header.svg'} alt="icon" />
            </div>
            <div className="header__right flex">
                <button onClick={() => {
                    this.toggle();
                }} className="header__icon header__icon-dolr">
                    <p>$</p>
                </button>
                <ul classNames={this.state.visible ? 'visible' : invisible}>
                    <li>
                        <p>$ USD</p>
                    </li>
                    <li>
                        <p>€ EUR</p>
                    </li>
                    <li>
                        <p>¥ JPY</p>
                    </li>
                </ul>
                <div className="header__icon header__icon-cart">
                    <img src={process.env.PUBLIC_URL + '/icon/cart.svg'} alt="cart" />
                </div>
            </div>
        </header >;
    }
}
