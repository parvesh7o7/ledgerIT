import Lightfall from '../src/component/Lightfall.jsx';
import SplitText from "../src/component/SplitText.jsx";
import TransactionTable from '../src/component/TransactionTable.jsx';
import './Home.css';
function Home() {
    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            background: '#07080d', /* Dark premium page background */
            color: '#f8fafc',
            overflow: 'hidden'
        }}>
            {/* Fixed Positioned Lightfall Background */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0
            }}>
                <Lightfall
                    colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
                    backgroundColor="#010102ff" /* Dark shader background to match the page */
                    speed={0.3}
                    streakCount={2}
                    streakWidth={1}
                    streakLength={1}
                    glow={1}
                    density={0.8}
                    twinkle={1}
                    zoom={1}
                    backgroundGlow={0.6}
                    opacity={0.6}
                    mouseInteraction
                    mouseStrength={0.5}
                    mouseRadius={1}
                    color1="#75aaffff"
                    color2="#3419a0ff"
                    color3="#9c5f9aff"
                />
            </div>

            {/* Foreground Content on Top */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                padding: '40px',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                boxSizing: 'border-box',
                gap: '12px'
            }}>
                <SplitText
                    text="Welcome to LedgeIT"
                    className="welcome-title"
                    delay={50}
                    duration={1.1}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    showCallback
                />
                <TransactionTable />
            </div>
        </div>
    )
}
export default Home;