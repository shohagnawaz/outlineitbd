import horseImg from "../../../assets/horse/horse.jpg"
import horseImg2 from "../../../assets/horse/horse2.png"

const Diff = () => {
    return (
        <div>
            <h2 className="text-center text-5xl mb-8">Remove Background & Retouch</h2>
            <figure className="diff aspect-16/9" tabIndex={0}>
                <div className="diff-item-1" role="img" tabIndex={0}>
                    <img alt="daisy" src={horseImg} />
                </div>
                <div className="diff-item-2" role="img">
                    <img
                        alt="daisy"
                        src={horseImg2} />
                </div>
                <div className="diff-resizer"></div>
            </figure>
        </div>
    );
};

export default Diff;