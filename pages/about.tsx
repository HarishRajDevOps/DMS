import styles from '../styles/About.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import logo from "../images/govelogo.png"
import background from "../images/backgroung.jpg"

const content = () => {

    return (
        <div className={styles.about}>
            <div className={styles.container}>
                 <Image src={logo} alt="login-logo" width="100" height="50" />
             </div>

            <div className={styles.align}>
                <h1 className="text-center">Welcome to Gove Acadamy</h1>
             </div>
             <div>
                <p>WE HELP YOU DEFINE YOUR OWN FUTURE AND MAKE IT HAPPEN!</p>
                <p>We understand the millennial generations career aspirations. Our training programs, developed through rigorous research by experienced subject-matter experts, help craft the careers. We build each program to help students define and shape their destiny. We help them make each dream become a reality.</p>
                <p>Our training is sought after for its value added ingredients and the benefits the students have derived. This is a result of the excellence we have forged into our training model. Gove Acadamy has always been to improve the employability quotient of Indian youth – by relentlessly working on content for and the quality of training programs. Our programs focus on areas such as thechnology,logical thicking, verbal ability, team and individual skills.</p>
             </div>
             <div className="text-center">
                  <button className={`btn btn-success ${styles.nextbut}`} type='submit'>Next</button>
             </div>
         </div>
         
    )
}

export default content