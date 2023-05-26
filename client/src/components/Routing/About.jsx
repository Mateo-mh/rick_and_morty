import style from './About.module.css'
import { Link } from 'react-router-dom';
const About = () =>{
    return (
        <div className={style.container}>
            <h1 id={style.aboutH1}>Hola soy, <strong id={style.name}>Byron Martinez</strong></h1>

        <footer>
            <h3>skills</h3>
            <p></p>
            <h3>Redes sociales</h3>
            <button className={style.btn_social}><Link className={style.link} to='https://www.linkedin.com/in/byron-martínez-86b5bb231/'>Linkedin</Link></button>
            <button className={style.btn_social}><Link className={style.link} to='https://github.com/Mateo-mh'>GitHub</Link></button>
            <button className={style.btn_social}><Link className={style.link} to='https://www.instagram.com/bamder_/'>Instagram</Link></button>

        </footer>
        </div>
    );
};

export default About;