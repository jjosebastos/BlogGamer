import './style.css'

const Footer: React.FC = () => {
    return (
        <> 
            <footer>
                <div className="ratings_logo">
                    <img src="../assets/Vector-2.png" alt="Ratings logo footer" />
                </div>

                <div className="content_info_container">
                    <div className="content_info">
                        <h2 className="content_info_title">Company</h2>
                        <ul className="content_info_ul">
                            <li className="content_info_li"><a href="#">About us</a></li>
                            <li className="content_info_li"><a href="#">Partnerships</a></li>
                            <li className="content_info_li"><a href="#">FAQ</a></li>
                        </ul>
                    <div className="content_info">
                        <h2 className="content_info_title">Company</h2>
                        <ul className="content_info_ul">
                            <li className="content_info_li"><a href="#">About us</a></li>
                            <li className="content_info_li"><a href="#">Partnerships</a></li>
                            <li className="content_info_li"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                    
                </div>
                
            </footer>
        </>
    )
}

export default Footer;