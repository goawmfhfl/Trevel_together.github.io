import './CartList.scss';
import img from '../../../test.jpg';


function CartList() {
    return (
        <div className="cart-wrapper">
            <header className="cart-header">
                <label for="cart">
                    <input type="checkbox" id="cart" />
                    <span>SALECT ALL</span>
                </label>
                <button>
                    <span>REMOVE SELECTED</span>
                </button>
            </header>
            <hr />
            <ul className="cart-item-list">
                <li className="cart-items">
                    <label htmlFor="item">
                        <input type="checkbox" id="item" className="cart-checkbox" />
                    </label>
                    <div className="cart-item-product">
                        <img src={img} alt="상품" className="cart-img" />
                        <div className="cart-item-cont">
                            <h3 className="cart-cont-tit">O'sulloc</h3>
                            <span className="cart-cont-desc multi-ellipsis">[30%]Gr[30%]e[30%]en Tead Leage De char tcha rtchartchart</span>
                        </div>
                    </div>
                    <div className="cart-price">
                        <div className="cart-price-count">
                            <i class="far fa-minus-square"></i>
                            <span className="item-counter">1</span>
                            <i class="far fa-plus-square"></i>
                        </div>
                        <div className="cart-money">
                            <span className="cart-money-type">USD</span>
                            <strong className="cart-money-price">4.50</strong>
                        </div>
                    </div>
                </li>
                <li className="cart-items">
                    <label htmlFor="item">
                        <input type="checkbox" id="item" className="cart-checkbox" />
                    </label>
                    <div className="cart-item-product">
                        <img src={img} alt="상품" className="cart-img" />
                        <div className="cart-item-cont">
                            <h3 className="cart-cont-tit">O'sulloc</h3>
                            <span className="cart-cont-desc multi-ellipsis">[30%]Gr[30%]e[30%]en Tead Leage De char tcha rtchartchart</span>
                        </div>
                    </div>
                    <div className="cart-price">
                        <div className="cart-price-count">
                            <i class="far fa-minus-square"></i>
                            <span className="item-counter">1</span>
                            <i class="far fa-plus-square"></i>
                        </div>
                        <div className="cart-money">
                            <span className="cart-money-type">USD</span>
                            <strong className="cart-money-price">4.50</strong>
                        </div>
                    </div>
                </li>
                <li className="cart-items">
                    <label htmlFor="item">
                        <input type="checkbox" id="item" className="cart-checkbox" />
                    </label>
                    <div className="cart-item-product">
                        <img src={img} alt="상품" className="cart-img" />
                        <div className="cart-item-cont">
                            <h3 className="cart-cont-tit">O'sulloc</h3>
                            <span className="cart-cont-desc multi-ellipsis">[30%]Gr[30%]e[30%]en Tead Leage De char tcha rtchartchart</span>
                        </div>
                    </div>
                    <div className="cart-price">
                        <div className="cart-price-count">
                            <i class="far fa-minus-square"></i>
                            <span className="item-counter">1</span>
                            <i class="far fa-plus-square"></i>
                        </div>
                        <div className="cart-money">
                            <span className="cart-money-type">USD</span>
                            <strong className="cart-money-price">4.50</strong>
                        </div>
                    </div>
                </li>
            </ul>
            <hr />

        </div>
    )
}

export default CartList;