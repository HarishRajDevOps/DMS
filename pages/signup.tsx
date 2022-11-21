import styles from '../styles/Signup.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import logo from "../images/loginLogo.jpg"
import Link from 'next/link';

const SignUp = () => {

    return (
        <div className="">
            <div className={`${styles.paddingForRegister} text-center`}>
                <h3>Register User</h3>
                <div className={`card ${styles.changeCardWidth}`}>
                    <div className="card-body">
                        <Image src={logo} alt="login-logo" width="200" height="200" />
                        <div>
                            <form method='post'>
                                <div className={styles.paddingForRegister}>
                                    <h5>First Name</h5>
                                </div>
                                <div>
                                    <input type="text" className={styles.inputBoxStyle} id="fname" name="fname" placeholder="Enter First Name" />
                                </div>
                                <div className={styles.paddingForRegister}>
                                    <h5>Last Name</h5>
                                </div>
                                <div>
                                    <input type="text" className={styles.inputBoxStyle} id="lname" name="lname" placeholder="Enter Last Name" />
                                </div>
                                <div className={styles.paddingForRegister}>
                                    <h5>Email Address</h5>
                                </div>
                                <div>
                                    <input type="email" className={styles.inputBoxStyle} id="email" name="email" placeholder="Enter email Address" />
                                </div>
                                <div className={styles.paddingForRegister}>
                                    <h5>Password</h5>
                                    <div >
                                        <input type="password" className={styles.inputBoxStyle} id="password" name="pass" placeholder="Enter password" />
                                    </div>
                                </div>
                                <div className={styles.paddingForRegister}>
                                    <button className={`btn btn-success ${styles.loginbtn}`} type='submit'>Register</button>
                                </div>
                            </form>
                        </div>
                        <div className={styles.paddingForRegister}>
                            <p>Already have an account? <Link href="/"> Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp