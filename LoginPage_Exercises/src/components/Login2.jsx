import React, { useState, useEffect } from 'react'
import styles from './Login2.module.css'
import 'boxicons/css/boxicons.min.css' // Ensure boxicons CSS is correctly imported

function Login2() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Apply specific body styles for this component
    document.body.classList.add(styles.body)

    // Clean up the styles when component unmounts
    return () => {
      document.body.classList.remove(styles.body)
    }
  }, [])

  const handleRegisterClick = () => {
    setIsActive(true)
  }

  const handleLoginClick = () => {
    setIsActive(false)
  }

  return (
    <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`}>
      <span className={styles['bg-animate']}></span>
      <span className={styles['bg-animate2']}></span>

      <div className={`${styles['form-box']} ${styles.login}`}>
        <h2 className={styles.animation} style={{ '--i': 0, '--j': 21 }}>
          Login
        </h2>
        <form action="#">
          <div
            className={`${styles['input-box']} ${styles.animation}`}
            style={{ '--i': 1, '--j': 22 }}
          >
            <input type="text" required />
            <label>Username</label>
            <i className="bx bxs-user"></i>
          </div>
          <div
            className={`${styles['input-box']} ${styles.animation}`}
            style={{ '--i': 2, '--j': 23 }}
          >
            <input type="password" required />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button
            type="submit"
            className={`${styles.btn} ${styles.animation}`}
            style={{ '--i': 3, '--j': 24 }}
          >
            Login
          </button>
          <div
            className={`${styles['logreg-link']} ${styles.animation}`}
            style={{ '--i': 4, '--j': 25 }}
          >
            <p>
              Don't have an account?{' '}
              <a
                href="#"
                className={styles['register-link']}
                onClick={handleRegisterClick}
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className={`${styles['info-text']} ${styles.login}`}>
        <h2 className={styles.animation} style={{ '--i': 0, '--j': 20 }}>
          Welcome Back!
        </h2>
        <p className={styles.animation} style={{ '--i': 1, '--j': 21 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
      </div>

      <div className={`${styles['form-box']} ${styles.register}`}>
        <h2 className={styles.animation} style={{ '--i': 17, '--j': 0 }}>
          Sign Up
        </h2>
        <form action="#">
          <div
            className={`${styles['input-box']} ${styles.animation}`}
            style={{ '--i': 18, '--j': 1 }}
          >
            <input type="text" required />
            <label>Username</label>
            <i className="bx bxs-user"></i>
          </div>
          <div
            className={`${styles['input-box']} ${styles.animation}`}
            style={{ '--i': 19, '--j': 2 }}
          >
            <input type="text" required />
            <label>Email</label>
            <i className="bx bxs-envelope"></i>
          </div>
          <div
            className={`${styles['input-box']} ${styles.animation}`}
            style={{ '--i': 20, '--j': 3 }}
          >
            <input type="password" required />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button
            type="submit"
            className={`${styles.btn} ${styles.animation}`}
            style={{ '--i': 21, '--j': 4 }}
          >
            Sign Up
          </button>
          <div
            className={`${styles['logreg-link']} ${styles.animation}`}
            style={{ '--i': 22, '--j': 5 }}
          >
            <p>
              Already have an account?{' '}
              <a
                href="#"
                className={styles['login-link']}
                onClick={handleLoginClick}
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className={`${styles['info-text']} ${styles.register}`}>
        <h2 className={styles.animation} style={{ '--i': 17, '--j': 0 }}>
          Welcome Back!
        </h2>
        <p className={styles.animation} style={{ '--i': 18, '--j': 1 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </div>
  )
}

export default Login2
