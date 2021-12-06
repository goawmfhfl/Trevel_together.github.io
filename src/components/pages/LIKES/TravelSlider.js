import './TravelSlider.scss';
import img from '../../../test.jpg'

function TravelSlider() {
    return (
        <div>
            <div className="slider">
                <div className="slider-title">
                    <h2 className="slider-tit">Travel</h2>
                    <div className="slider-icon">
                        <i>⬅</i>
                        <i>➡</i>
                    </div>
                </div>
                <ul className="slider-list">
                    <li>
                        <a href="#none">
                            <div className="slider-cover">
                                <img src={img} alt="이미지" className="slider-img" />
                            </div>
                            <div className="slider-cont">
                                <div className="slider-cate">
                                    <span className="slider-cate-tit">Lorem, ipsum.</span>
                                    <span className="slider-cate-star">⭐️⭐️⭐️⭐️⭐️</span>
                                </div>
                                <div className="slider-desc">
                                    <div class="slider-desc-tit multi-ellipsis"> Lorem ipsum dolor sit amet Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam, voluptatem?</div>
                                    <span class="slider-desc-price">USD 9.45</span>
                                    <span class="slider-desc-sale">10.22</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#none">
                            <div className="slider-cover">
                                <img src={img} alt="이미지" className="slider-img" />
                            </div>
                            <div className="slider-cont">
                                <div className="slider-cate">
                                    <span className="slider-cate-tit">Lorem, ipsum.</span>
                                    <span className="slider-cate-star">⭐️⭐️⭐️⭐️⭐️</span>
                                </div>
                                <div className="slider-desc">
                                    <div class="slider-desc-tit multi-ellipsis"> Lorem ipsum dolor sit amet Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam, voluptatem?</div>
                                    <span class="slider-desc-price">USD 9.45</span>
                                    <span class="slider-desc-sale">10.22</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#none">
                            <div className="slider-cover">
                                <img src={img} alt="이미지" className="slider-img" />
                            </div>
                            <div className="slider-cont">
                                <div className="slider-cate">
                                    <span className="slider-cate-tit">Lorem, ipsum.</span>
                                    <span className="slider-cate-star">⭐️⭐️⭐️⭐️⭐️</span>
                                </div>
                                <div className="slider-desc">
                                    <div class="slider-desc-tit multi-ellipsis"> Lorem ipsum dolor sit amet Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam, voluptatem?</div>
                                    <span class="slider-desc-price">USD 9.45</span>
                                    <span class="slider-desc-sale">10.22</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TravelSlider;