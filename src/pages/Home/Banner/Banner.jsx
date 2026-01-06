import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
                <img src="assets/1.jpeg" />
            </div>
            <div>
                <img src="assets/2.jpeg" />
            </div>
            <div>
                <img src="assets/3.jpeg" />
            </div>
        </Carousel>
    );
};

export default Banner;