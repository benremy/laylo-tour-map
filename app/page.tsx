import { PasswordGate } from '@/modules/auth/components/password-gate/password-gate.component';

export default function Home() {
  return (
    <main className="page-centered">
      <PasswordGate />
    </main>
  );
}
