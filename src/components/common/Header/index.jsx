import { Component } from "react"
import { Link } from "react-router-dom"
import "./index.scss"


export default class Header extends Component {
    render() {
        return <header className="header wrapper flex-between">
            <ul className="header__left flex">
                <li className="header__item">
                    <Link to="/"><span className="uppercase color-text">Women</span></Link>
                </li>
                <li className="header__item">
                    <Link to="/men"><span className="uppercase color-text">Men</span></Link>
                </li>
                <li className="header__item">
                    <Link to="/kids"><span className="uppercase color-text">Kids</span></Link>
                </li>
            </ul>
            <div className="header__center">
                <img src={process.env.PUBLIC_URL + '/icon/icon-header.svg'} alt="icon" />
            </div>
            <div className="header__right flex">
                <div className="header__icon header__icon-dolr">
                    <p>$</p>
                </div>
                <div className="header__icon header__icon-cart">
                    <img src={process.env.PUBLIC_URL + '/icon/cart.svg'} alt="cart" />
                </div>
            </div>

        </header>;
    }
}
