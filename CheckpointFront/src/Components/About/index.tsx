import './style.css'
import vetor from '../../assets/vector-enredo.png'


const About : React.FC = () => {

    return (
        <>
            <article className="enredo_container">
                <h2 className='enredo_header'><img className="vector_header"src={vetor} />Enredo</h2>
                    <p>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.</p>  
            </article>
        </>
    )
    
}

export default About;