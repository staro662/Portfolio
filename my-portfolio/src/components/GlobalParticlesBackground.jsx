import Particles from './bg/bg';
import './bg/bg.css';

const GlobalParticlesBackground = () => {
    return (
        <>
            {/* 深色底层 */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: '#0B0D0F',
                zIndex: -2,
            }} />

            {/* 粒子层 */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none'
            }}>
                <Particles
                    particleColors={['#3eeabf', '#C7FF3E', '#ffffff', '#FF1493']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                    sizeRandomness={1}
                    cameraDistance={20}
                    particleHoverFactor={0.5}

                />
            </div>
        </>
    );
};

export default GlobalParticlesBackground;