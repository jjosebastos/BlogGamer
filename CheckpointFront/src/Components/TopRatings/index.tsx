import './style.css'
import star from '../../assets/star.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import dotsVertical from '../../assets/dots-vertical.svg'
import toggleShift from '../../assets/toggle_shift.svg'
import { useState } from 'react'



type PropsTop = {
    ratingTitle: string,
    ratingNote: string,
    ratingNoteFra: string,
    username: string,
    date: string,
    ratingComment: string;
    ratingSecondComment?: string;
    ratingLikes: string;
    ratingDislikes: string;    
    spoilerAlert: boolean;
};

const TopRatings: React.FC<PropsTop> = ({
    ratingTitle,
    ratingNote,
    ratingNoteFra,
    username,
    date,
    ratingComment,
    ratingSecondComment,
    ratingLikes,
    ratingDislikes,
    spoilerAlert
    
}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSpoiler = () => {
        setIsOpen(!isOpen);
    }; 

    return (
        <section className="top_ratings_container">
            <div className="top_container">
                <div className="tag_container">
                    <span>AVALIAÇÃO EM DESTAQUE</span>
                </div>
                <div className="star_ratings">
                    <span>
                        <img src={star} alt="Estrela" />
                        {ratingNote}/
                            <span className='fraction'>{ratingNoteFra}<span/>
                        </span>
                    </span>
                </div>
            </div>
            <div className="container_username_comment">
                <div className="username">
                    <span>{username}</span>
                </div>
                <div className="user_date_comment">
                    <span>{date}</span>
                </div>
            </div>

            <div className="user_article_header">
            {spoilerAlert ? (
                <>
                    <div className="spoiler_container" onClick={toggleSpoiler}>
                        <div className="warning_container">
                            <h2 className='warning_header'>Warning: Spoilers!</h2>
                        </div>
                        <div className={`warning_shift ${isOpen ? 'open' : ''}`}>
                            <img src={toggleShift} alt="Seta" />
                        </div>
                    </div>
                    <h2>{ratingTitle}</h2>
                    <br />
                    <div className={`spoiler_content ${isOpen ? 'open' : ''}`}>
                        <p className='hidden_p'>{ratingComment}</p>
                        {ratingSecondComment && <p className='hidden_p'>{ratingSecondComment}</p>}
                    </div>
                </>
            ) : (
                <>
                    <h2>{ratingTitle}</h2>
                    <br />
                    <p>{ratingComment}</p>
                    {ratingSecondComment && <p>{ratingSecondComment}</p>}
                </>
            )}
</div>

            <div className="container_interaction_icons">
                <div className="interaction_icons">
                    <div className="interaction_like">
                        <img src={like} alt="Like botão" />
                        <span className='interaction_value'>{ratingLikes}</span>
                    </div>
                    <div className="interaction_dislike">
                        <img src={dislike} alt="Deslike botão" />
                        <span className='interaction_value'>{ratingDislikes}</span>
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