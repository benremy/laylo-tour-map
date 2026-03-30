import Link from 'next/link';
import { PasswordGate } from '@/modules/auth/components/password-gate/password-gate.component';
import Prism from '@/components/prism/Prism'
import { strings } from '@/constants/strings.constants';

export default function Home() {
  return (
    <main className="page-centered">
      <div className="page-bg-layer"><Prism /></div>
      <nav className="page-nav">
        <Link href="https://github.com/benremy/laylo-tour-map" className="page-nav-link">Source Code</Link>
      </nav>
      {/* <nav className="page-nav">
        <Link href="/release-notes" className="page-nav-link">{strings.releaseNotesLinkText}</Link>
      </nav> */}
      <PasswordGate />
    </main>
  );
}
