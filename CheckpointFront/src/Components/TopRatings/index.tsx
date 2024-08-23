import './style.css'
import star from '../../assets/star.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import dotsVertical from '../../assets/dots-vertical.svg'
const TopRatings : React.FC = () => {

    return (
        <section className="top_ratings_container">
            <div className="top_container">
                <div className="tag_container">
                    <span>Avaliação em destaque</span>
                </div>
                <div className="star_ratings">
                    <span><img src={star} alt="" />10/<span className='fraction'>10</span></span>
                </div>
            </div>
            <div className="container_username_comment">
                <div className="username">
                    <span>CaioHalbert</span>
                </div>
                <div className="user_date_comment">
                    <span>23 de agosto de 2024</span>
                </div>
            </div>

            <div className="user_article_container">
                <div className="user_article_header">
                    <h2>What an incredible sequel</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sint? Non explicabo vero repellat, harum temporibus repudiandae quae. Nobis ex quae sit delectus laborum adipisci eaque aliquam autem perspiciatis magnam.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt maxime itaque, deleniti mollitia ea, nemo saepe earum, nulla vero obcaecati dicta neque fugiat voluptatibus voluptates suscipit maiores repellat quasi.</p>
                </div>
            </div>
            <div className="container_interaction_icons">
                <div className="interaction_icons">
                    <div className="interaction_like">
                        <img src={like} alt="Like botão" />
                        <span className='interaction_value'>33</span>
                    </div>
                    <div className="interaction_dislike">
                        <img src={dislike} alt="Deslike button" />
                        <span className='interaction_value'>11</span>
                    </div>
                    
                </div>
                           
                <div className="options_icon">
                    <span><img src={dotsVertical} alt="Options botão" /></span>
                </div>
            </div>
            

        </section>
    )

}

export default TopRatings