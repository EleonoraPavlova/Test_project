import './index.scss';
import ProductsBox from "../../components/common/ProductsBox";

const items = [
    {
        imageName: 'sweater',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRe0K19byJOKXs8g5TMEfY4NPgPYl-bdq62v5ix2qBMq5nNrW-nX_nGHPX7sgjB&usqp=CAc',
        title: 'Apollo Running Short',
        price: '50$',
        classes: '',
        inStock: true
    },
    {
        imageName: 'sweater2',
        imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQO98xN1jHJkcb2qv430dETB1fWZWqW9BSwvdtgsoyiByWly6u8lD9Mx2z3bYVMS67dAsVDc2ueGcg&usqp=CAc',
        title: 'Apollo Running Short',
        price: '50$',
        inStock: true
    },
    {
        imageName: 'sweater3',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUiXndI6NULUSuZMX2d_6QwmbBSgiBKlksraweVxDvxsLI2BNS-jC6VpMAOp2_jLy4--ZWy2nn9mY&usqp=CAc',
        title: 'Apollo Running Short',
        price: '50$',
        inStock: false
    },
    // {
    //     imageName: 'sweater4',
    //     imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQaHdGDfjmLG1Zw7rjn0sz_dWnGDF1te3oWHc8fCXhnOn5EA4bdvAWZEDzFwpyZOQ4l1HojBBneIQ&usqp=CAc',
    //     title: 'Apollo Running Short',
    //     price: '50$'
    // },
    // {
    //     imageName: 'sweater5',
    //     imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQrDINjeYzwuCAazICpMAYCLopAtZTp_WwaGYNRDcywNZUXcbhqbraAGaDto86iBg&usqp=CAc',
    //     title: 'Apollo Running Short',
    //     price: '50$'
    // },
]

export default function Products() {
    return <div className="products wrapper">
        <div className="products__title">
            <h3 className="products__title-text">Category name</h3>
        </div>
        <div className="products__box flex">
            {items.map(item => <ProductsBox title={item.title} key={item.title} price={item.price} imageName={item.imageName} imageUrl={item.imageUrl} />)}
        </div>
        <div className="products__box flex">
            {items.map(item => <ProductsBox title={item.title} key={item.title} price={item.price} imageName={item.imageName} imageUrl={item.imageUrl} />)}
        </div>
    </div >
}

