import styles from '../styles/Signin.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


const signin= () => {

    return (
        <div className="">
            <div className={`${styles.paddingForRegister} text-center`}>
                <h3>Please sign in</h3>
                            <form method='post'>
                               <div className="form-floating">
                                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                  <label htmlFor="floatingInput">Email address</label>
                               </div>
                                <div className="form-floating">
                                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                  <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className={styles.paddingForRegister}>
                                    <button className={`btn btn-success ${styles.login}`} type='submit'>Login</button>
                                </div>
                            </form>
                        <div className={styles.paddingForRegister}>
                            <p>Create a new account<Link href="/">Signup</Link></p>
                        </div>
            </div>
              <footer className={`${styles.footer} text-center`}>
                 Powered by Gove
              </footer>
        </div>
    )
}

export default signin