import "./productList.css";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projetos</h1>
                <p className="pl-desc">
                    Esses são os repositórios dos meus projetos desenvolvidos em
                    React e TypeScript.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
