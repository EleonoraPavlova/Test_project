import './index.scss';

export default function ProductsBox(props) {
    return <div className="products-box flex">
        <div className="products-box__wrapper-icon">
            <img className="products-box__icon" alt={props.imageName} src={props.imageUrl} />
        </div>
        <div className="products-box__title text-title">{props.title}</div>
        <div className="products-box__price text-price">
            <p className="text-middle">{props.price}</p>
        </div>
    </div>
}