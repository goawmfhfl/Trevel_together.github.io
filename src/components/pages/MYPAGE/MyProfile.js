import './MyProfile.scss';

function MyProfile() {
    return (
        <div className="myprofile-container">
            <i class="fas fa-user-circle profile"></i>
            <div className="mypage-email">
                <span>goawmfhfl@likelion.org</span>
            </div>
            <ul className="mypage-list">
                <li className="mypage-cart">
                    <i className="fas fa-shopping-cart cart"></i>
                    <span className="cart-txt">cart</span>
                </li>
                <li className="mypage-reservation">
                    <i className="far fa-calendar-check reservation"></i>
                    <span className="reservation-txt">reservation</span>
                </li>
                <li className="mypage-likes">
                    <i className="far fa-heart likes"></i>
                    <span className="likes-txt">likes</span>
                </li>
                <li className="mypage-logout">
                    <i className="fas fa-sign-out-alt logout"></i>
                    <span className="logout-txt">logout</span>
                </li>
            </ul>
        </div>
    )
}

export default MyProfile;