import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer style={{
            padding: '2rem 1.5rem',
            marginTop: 'auto',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            background: 'linear-gradient(to top, rgba(13, 17, 23, 0.95), transparent)',
            position: 'relative',
            zIndex: 1,
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <div className="dim-text" style={{ fontSize: '0.7rem', fontFamily: 'var(--font-code)', letterSpacing: '0.05em' }}>
                    © {new Date().getFullYear()} GITOPIA PROTOCOL. ALL RIGHTS RESERVED.
                </div>

                {/* Easter Egg */}
                <motion.div
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 1, color: 'var(--neon)', scale: 1.05 }}
                    style={{
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-code)',
                        color: 'rgba(255, 254, 254, 1)',
                        cursor: 'default',
                        transition: 'color 0.3s ease',
                        marginTop: '0.25rem'
                    }}
                >
                    &lt; made-by-sathwik shetty-inunity /&gt;
                </motion.div>
            </div>
        </footer>
    );
}
