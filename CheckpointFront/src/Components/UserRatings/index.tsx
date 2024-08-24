import './style.css'
import vetor from '../../assets/Vector-enredo.png'
import plusSmall from '../../assets/plus.svg'
import TopRatings from '../TopRatings'

const isSpoiler = false;
const UserRatings : React.FC = () => {

   

    return (
        <>
            <section className="user_ratings_container">
            <h2 className='user_header'><img className="vector_header"src={vetor} />Avaliação de Usuários</h2>
                <div className="rating_plus">
                    <span><img src={plusSmall} alt="" />Avaliar</span>
                </div>
            </section>  
        <TopRatings ratingTitle='What an incredible sequel! '
            username='Caio Halbert'
            date='9 de novembro de 2022'
            ratingNote='10'
            ratingNoteFra='10'
            ratingLikes='33'
            ratingDislikes='11'
            ratingComment="A fantastic and strong continuation of its predecessor,
             God of War Ragnarök is not afraid to take unexpected turns, 
             or slow its pace for you to fully explore an environment. 
             It has the same upgrading system as before, but with better armor, 
             in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent roles"
            ratingSecondComment="I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking games on PS5. It'll definitely be a game of the year contender with Elden Ring. If you're new to the series, I recommend you start with God of War (2018) If you have the dedication, you could always start from the very first one. They're all on the PS+ collection. I still have yet to beat this newest entry, 
            but I wanted to spread the good word as soon as possible: Ragnarök is here and it is beautiful."
            spoilerAlert={false}
        />
        <br />
        <TopRatings 
            ratingTitle='This game took part of my soul...'
            username='ClaudiaRayara'
            ratingComment='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Illo vero doloribus repellat asperiores error ut, sunt rem ipsam sequi quaerat accusamus,
            porro saepe a facere tenetur architecto, aliquam at nemo?'
            date='14 de novembro de 2022'
            spoilerAlert={true}
            ratingNote='10'
            ratingNoteFra='10'
            ratingLikes='24'
            ratingDislikes='6'
            
        />
        </>
    )

}

export default UserRatings