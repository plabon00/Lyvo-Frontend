// ErrorPage.jsx
import Silk from './components/Silk';
import FuzzyText from './components/FuzzyText';

function ErrorPage() {
    return (
        <>
            {/* Background Layer - First in DOM */}
            <div className="fixed inset-0">
                <Silk
                    speed={5}
                    scale={1}
                    color="#2e073e"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>

            {/* Content Layer - Naturally appears on top */}
            <div className="fixed inset-0 flex flex-col items-center justify-center gap-10">

                <FuzzyText
                    fontSize={"14rem"}
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover={true}
                >
                    404
                </FuzzyText>
                <FuzzyText
                    fontSize={"6rem"}
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover={true}
                >
                    Not Found
                </FuzzyText>
            </div>
        </>
    );
}

export default ErrorPage;
