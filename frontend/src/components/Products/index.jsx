import './style.scss';
import { getFurnitures } from '../../conf/common'

function Products(props) {

    async function fetchFurnitures() {
        let item = getFurnitures()
        console.log(item)
    }

    return (
        <div id="product-page">
            <h1>Products</h1>
        </div>
    )
}

export default Products;