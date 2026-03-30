'use client';

import { usePasswordGate } from '@/modules/auth/auth.hook';
import styles from './password-gate.module.scss';

export function PasswordGate() {
  const { password, error, setPassword, handleSubmit } = usePasswordGate();

  return (
    <div className={styles.gate}>
      <h1 className={styles.wordmark}>laylo</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
        <button className={styles.button} type="submit">
          Continue
        </button>
        <p className={`${styles.error} ${error ? styles.errorVisible : ''}`}>
          Incorrect password
        </p>
      </form>
    </div>
  );
}
