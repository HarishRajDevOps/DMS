import styles from '../styles/Signup.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import logo from "../images/govelogo.png"

const content = () => {

    return (
        <div className="">
             <div className={`card ${styles.changeCardWidth}`}>
                <div className="card-body">
                <div className={`${styles.paddingForRegister} text-center`}>
                     <Image src={logo} alt="login-logo" width="100" height="50" />
                     </div>
                        <div className={`${styles.paddingForRegister} text-center`}>
                            <h3>About Gove</h3>
                        </div>
                    </div>
                </div>
              </div>


    )
}

export default content