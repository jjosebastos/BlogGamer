import './style.css'
import star from '../../assets/star.svg'

const TopRatings : React.FC = () => {

    return (
        <section className="top_ratings_container">
            <div className="top_container">
                <div className="tag_container">
                    <span>Avaliação em destaque</span>
                </div>
                <div className="star_ratings">
                    <span><img src={star} alt="" />10/10</span>
                </div>
            </div>


            

        </section>
    )

}

export default TopRatings