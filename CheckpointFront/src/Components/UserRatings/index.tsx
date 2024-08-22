import './style.css'
import vetor from '../../assets/Vector-enredo.png'
import plusSmall from '../../assets/plus.svg'
import TopRatings from '../TopRatings'
const UserRatings : React.FC = () => {

    return (
        <>
            <section className="user_ratings_container">
                <h2 className='user_header'><img className="vector_header"src={vetor} />Avaliação de Usuários</h2>
                <div className="rating_plus">
                    <span><img src={plusSmall} alt="" />Avaliar</span>
                </div>
            </section>  
        <TopRatings />
        </>
    )

}

export default UserRatings