'use client';

import { usePasswordGate } from './password-gate.hook';
import styles from './password-gate.module.scss';
import { strings } from '@/constants/strings.constants';
import { GlassCard } from '@/modules/auth/components/glass-card/glass-card.component';

export function PasswordGate() {
  const { password, error, setPassword, handleSubmit } = usePasswordGate();

  return (
    <GlassCard>
      <div className={styles.gate}>
        <h1 className={styles.logoMark}>{strings.logoMark}</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="password"
            placeholder={strings.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <button className={styles.button} type="submit">
            {strings.passswordSubmitButtonText}
          </button>
          <p className={`${styles.error} ${error ? styles.errorVisible : ''}`}>
            {strings.incorrectPasswordErrorText}
          </p>
        </form>
      </div>
    </GlassCard>
  );
}
