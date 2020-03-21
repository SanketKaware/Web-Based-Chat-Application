import * as React from 'react';
import { Link } from 'react-router-dom';
const styles = require('./landing.scss');

export default () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.header__title}><span>Welcome to web based chat application</span></h1>
        <div className={styles.header__buttons}>
          <Link to="/signin">Sign in</Link>
          <span>or</span>
          <Link to="/signup">Create new account</Link>
        </div>
      </div>
    </div>
  </div>
)