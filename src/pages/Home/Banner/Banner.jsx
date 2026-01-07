import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

// images
import bannerImg from "../../../assets/banner/banner.webp"
import bannerImg2 from "../../../assets/banner/banner2.webp"
import bannerImg3 from "../../../assets/banner/banner3.webp"
import bannerImg4 from "../../../assets/banner/banner4.webp"
import bannerImg5 from "../../../assets/banner/banner5.webp"
import bannerImg6 from "../../../assets/banner/banner6.webp"

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div><img src={bannerImg} /></div>
            <div><img src={bannerImg2} /></div>
            <div><img src={bannerImg3} /></div>
            <div><img src={bannerImg4} /></div>
            <div><img src={bannerImg5} /></div>
            <div><img src={bannerImg6} /></div>
        </Carousel>
    );
};

export default Banner;