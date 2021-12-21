import { Component } from "react"
import { Link } from "react-router-dom"
import "./index.scss"


export default class Header extends Component {
    render() {
        return <header className="header wrapper flex-between">
            <ul className="header__left flex">
                <li>
                    <Link to="/">Women</Link>
                </li>
                <li>
                    <Link to="/men">Men</Link>
                </li>
                <li>
                    <Link to="/kids">Kids</Link>
                </li>
            </ul>
            <div className="header__center">
                <img src={process.env.PUBLIC_URL + '/icon/icon-header.svg'} alt="icon" />
            </div>
            <div className="header__right flex">
                <div className="header__icon-dolr">
                    <p>$</p>
                </div>
                <div className="header__icon-cart">
                    <img src={process.env.PUBLIC_URL + '/icon/cart.svg'} alt="cart" />
                </div>
            </div>

        </header>;
    }
}
