import { useRef } from 'react';
import { motion } from 'framer-motion';
import { getLevelInfo } from '../data/gameData';

export default function Certification({ player, onBack }) {
    const certRef = useRef(null);
    const { current } = getLevelInfo(player.xp);

    const handleDownload = () => {
        // We'll use a simple print trick or just a message if we can't do full canvas here
        // But since I want to impress, I'll suggest the browser's print to PDF which is high quality
        // Or I can try to generate a basic image if I had a library.
        // For now, I'll provide a high-quality print version.
        window.print();
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <button
                onClick={onBack}
                className="btn mb-6"
                style={{ background: 'transparent', border: '1px solid #444', color: 'var(--text-dim)' }}
            >
                ← BACK TO TERMINAL
            </button>

            <div className="glass p-8" style={{ border: '2px solid var(--neon)', position: 'relative', overflow: 'hidden' }}>
                {/* Background Patterns */}
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
                    backgroundImage: `repeating-linear-gradient(45deg, var(--neon) 0, var(--neon) 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '10px 10px'
                }} />

                <div id="certificate-print-zone" ref={certRef} style={{
                    background: '#0d1117',
                    border: '10px double var(--neon)',
                    padding: '4rem',
                    textAlign: 'center',
                    position: 'relative',
                    color: 'var(--text)'
                }}>
                    {/* Decorative Corner */}
                    <div style={{ position: 'absolute', top: 20, left: 20, color: 'var(--neon)', fontSize: '2rem' }}>⚡</div>
                    <div style={{ position: 'absolute', top: 20, right: 20, color: 'var(--neon)', fontSize: '2rem' }}>⚡</div>
                    <div style={{ position: 'absolute', bottom: 20, left: 20, color: 'var(--neon)', fontSize: '2rem' }}>⚡</div>
                    <div style={{ position: 'absolute', bottom: 20, right: 20, color: 'var(--neon)', fontSize: '2rem' }}>⚡</div>

                    <div className="pixel neon-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                        CERTIFICATE OF MASTERY
                    </div>
                    <div className="dim-text" style={{ fontSize: '0.8rem', letterSpacing: '4px', marginBottom: '3rem' }}>
                        GITOPIA_PROTOCOL_COMPLETED
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <span className="dim-text" style={{ fontSize: '1.1rem' }}>This is to certify that</span>
                    </div>

                    <div className="pixel" style={{ fontSize: '2.5rem', color: 'var(--text)', marginBottom: '1rem', borderBottom: '2px solid var(--neon)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                        {player.username.toUpperCase()}
                    </div>

                    <div style={{ margin: '2rem 0' }}>
                        <p className="dim-text" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                            Has successfully navigated the binary depths of <span className="neon-text">GITOPIA</span>,<br />
                            mastering the arts of version control, branching strategies, and conflict resolution.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div className="blue-text" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{player.xp.toLocaleString()}</div>
                            <div className="dim-text" style={{ fontSize: '0.6rem' }}>TOTAL_XP_GAINED</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div className="neon-text" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{current.title}</div>
                            <div className="dim-text" style={{ fontSize: '0.6rem' }}>FINAL_RANK</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold)' }}>{player.badges.length}</div>
                            <div className="dim-text" style={{ fontSize: '0.6rem' }}>BADGES_COLLECTED</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 2rem' }}>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>GIT_PROFILE</div>
                            <div style={{ color: 'var(--blue)', fontSize: '0.8rem' }}>{player.gitProfile || 'N/A'}</div>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-dim)', marginTop: '4px' }}>{player.email || ''}</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>STREAK_STAMINA</div>
                            <div style={{ color: 'var(--red)', fontSize: '0.8rem' }}>{player.streak} DAYS</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>DATE_ISSUED</div>
                            <div style={{ fontSize: '0.8rem' }}>{new Date().toLocaleDateString()}</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', borderTop: '1px solid #333', paddingTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ padding: '0.5rem 1rem', border: '1px solid var(--neon)', borderRadius: '4px', fontSize: '0.6rem', opacity: 0.6 }}>
                            AUTH_KEY: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <p className="dim-text" style={{ fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                        "A master of Git is a master of history itself."
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={handleDownload}
                        style={{ padding: '1rem 2rem' }}
                    >
                        💾 DOWNLOAD CERTIFICATE (PDF/Print)
                    </button>
                </div>
            </div>

            <style>{`
        @media print {
          body * { visibility: hidden; }
          #certificate-print-zone, #certificate-print-zone * { visibility: visible; }
          #certificate-print-zone {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: none;
            padding: 2rem;
          }
        }
      `}</style>
        </div>
    );
}
