import { PasswordGate } from '@/modules/auth/components/password-gate/password-gate.component';
import Prism from '@/components/Prism'

export default function Home() {
  return (
    <main className="page-centered">
      <div className="page-bg-layer"><Prism /></div>
      <PasswordGate />
    </main>
  );
}
