import { Link } from "react-router-dom";

export function Error() {
    return (
        <div className="error-div">
            <p className="error-404">404</p>
            <div className="error-msg">
            <p>Oops! something went wrong.</p>
            <p>The page you are looking for is not available</p>
            </div>
            <Link to="/">
                <button className="v-btn">Go To Homepage</button>
            </Link>
            <div>
                <img src="/assets/error-img.jpg" alt="Error" id="bg" />
            </div>
        </div>
    );
} 