import './InfoPagination.scss';

function InfoPagination() {
    return (
        <div className="InfoPagination-container">
            <button className="pag-left">⬅️</button>
            <lo className="InfoPagination-list">
                <li value="1">
                    <button>
                        <span>1</span>
                    </button>
                </li>
                <li value="2">
                    <button>
                        <span>2</span>
                    </button>
                </li>
                <li value="3">
                    <button>
                        <span>3</span>
                    </button>
                </li>
                <li value="4">
                    <button>
                        <span>4</span>
                    </button>
                </li>
                <li value="5">
                    <button>
                        <span>5</span>
                    </button>
                </li>
            </lo>
            <button className="pag-left">➡️</button>
        </div>
    )
}

export default InfoPagination;