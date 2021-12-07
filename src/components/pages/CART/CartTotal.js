import './CartTotal.scss'


function CardTotal() {
    return (
        <div className="cart-total-container">
            <div className="cart-total">
                <span className="cart-total-tit">TOTAL</span>
                <strong className="cart-total-price">USD 46.65</strong>
            </div>
            <button className="cart-buybtn">Buy Now</button>
        </div>
    )
}

export default CardTotal;