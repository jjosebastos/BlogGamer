import './style.css'
import logo from "../../assets/Vector-2.png"

const Footer: React.FC = () => {
    return (
        <> 
            <footer>
                <div className="ratings_logo">
                    <img src={logo} alt="Ratings logo footer" />
                </div>

                <div className="content_info_container">
                    <div className="content_info">
                        <div className="content_header">
                            <h2>Company</h2>
                        </div>
                        <ul className="content_info_ul">
                            <li className="content_info_li"><a href="#">About us</a></li>
                            <li className="content_info_li"><a href="#">Partnerships</a></li>
                            <li className="content_info_li"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="content_info">
                        <div className="content_header">
                            <h2>Company</h2>
                        </div>
                        <ul className="content_info_ul">
                            <li className="content_info_li"><a href="#">About us</a></li>
                            <li className="content_info_li"><a href="#">Partnerships</a></li>
                            <li className="content_info_li"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="content_info">
                        <div className="content_header">
                            <h2>Company</h2>
                        </div>
                        <ul className="content_info_ul">
                            <li className="content_info_li"><a href="#">About us</a></li>
                            <li className="content_info_li"><a href="#">Partnerships</a></li>
                            <li className="content_info_li"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;