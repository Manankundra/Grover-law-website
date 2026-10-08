'use client';
import { useEffect, useRef } from 'react';
import { DISCLAIMER } from '@/lib/data';
import Logo from './Logo';

export const ACK_KEY = 'glo-ack-v1';

export default function DisclaimerGate() {
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (document.documentElement.dataset.ack !== '1') btn.current?.focus();
  }, []);
  const agree = () => {
    try { localStorage.setItem(ACK_KEY, '1'); } catch {}
    document.documentElement.dataset.ack = '1';
  };
  return (
    <div className="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <div className="box">
        <header>
          <div style={{ display: 'flex', justifyContent: 'center' }}><Logo size={44} /></div>
          <h2 id="gate-title" className="label" style={{ color: 'var(--ink)', marginTop: '.75rem' }}>Acknowledgement &amp; Disclaimer</h2>
        </header>
        <div className="scroll" tabIndex={0}>
          {DISCLAIMER.map((d) => (<section key={d.t}><h3>{d.t}</h3><p>{d.b}</p></section>))}
        </div>
        <footer>
          <button ref={btn} className="btn btn-p" onClick={agree}>I Agree</button>
        </footer>
      </div>
    </div>
  );
}
