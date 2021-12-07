import './productCont.scss';
import img from '../../../test.jpg';

function productCont() {
    return (
        <div className="pd-container">
            <div className="pd-main">
                <img src={img} alt="스파" className="pd-img" />
            </div>
            <div className="pd-cont">
                <div className="pd-desc">
                    <div className="pd-title">
                        <span className="pd-type">Seoul</span>
                        <h3 className="pd-main-tit">Dragon Hill spa</h3>
                    </div>
                    <div className="pd-score">
                        <strong className="pd-price">USD 9.35</strong>
                        <span className="pd-star">⭐️⭐️⭐️⭐️⭐️</span>
                    </div>
                </div>
                <div className="pd-btn">
                    <a href="#none">
                        <button className="pd-cart-btn">
                            <i class="fas fa-cart-plus"></i>
                            <span className="pd-likes-txt">ADD CART</span>
                        </button>
                    </a>
                    <a href="#none">
                        <button className="pd-likes-btn">
                            <i class="fas fa-heart"></i>
                            <span className="pd-likes-txt">ADD Likes</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default productCont;