import 'boxicons'
import styles from './LoginForm.module.css'
import { useEffect } from 'react'

const LoginForm = () => {
  useEffect(() => {
    // Apply specific body styles for this component
    document.body.classList.add(styles.body)

    // Clean up the styles when component unmounts
    return () => {
      document.body.classList.remove(styles.body)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <h2>Login</h2>
      <form className={styles.loginForm}>
        <div className={styles.loginInput}>
          <input placeholder="Username" type="string" />
          <box-icon name="user" color="#FFFFFF"></box-icon>
        </div>
        <div className={styles.loginInput}>
          <input placeholder="Password" type="password" />
          <box-icon name="lock-alt" color="#FFFFFF"></box-icon>
        </div>
        <div className={styles.rememberForgot}>
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#">Forgot password?</a>
        </div>
        <button className={styles.btn} type="submit">
          Login
        </button>
        <div className={styles.registerLink}>
          <p>
            Don&apos;t have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
