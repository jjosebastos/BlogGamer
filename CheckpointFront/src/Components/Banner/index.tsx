import estrela from '../../assets/estrela.png';
import estrelaVoid from '../../assets/estrela_void.png';
import './style.css';
import cover from '../../assets/cover.png';
import coverLizzard from '../../assets/cover_lizzard.png';

const Banner: React.FC = () => {
    return (
        <>
        <div className="banner_cover">
            <section className="banner">
                <div className="game_name_ratings">
                    <h1>God of War: Ragnarök</h1>
                </div>
                <article className="container_ratings">
                    <h2>AVALIAÇÃO DA RATINGS</h2>
                    <p className='notes'>
                        <img src={estrela} alt="Rating Star" className="star-icon" />
                        9,6<span className='notes_lower'>/10</span>
                    </p>
                </article>
                <article className="container_ratings">
                    <h2>SUA AVALIAÇÃO</h2>
                    <p className='notes'>
                        <img src={estrelaVoid} alt="Rate" className="star-icon" />
                        Avaliar
                    </p>
                </article>
            </section>
                <div className="container_images">
                    <div className="game_cover">
                        <img src={cover} alt="Game cover" />
                    </div>
                    <div className="gameplay_cover">
                        <img src={coverLizzard} alt="Gameplay" />
                    </div>
                </div>
        </div>  
        </>
    )
};

export default Banner;
