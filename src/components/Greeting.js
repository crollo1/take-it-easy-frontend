
import Home from "./Home";
import {BrowserRouter as Router, json, Link, Route, Routes} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


function Greeting( props ) {

    const navigatePush = useNavigate(); 

    function handleClick(){
        navigatePush('/postTask');
    } 

    return (

        <div className="greeting">
            {/* <h2>Home</h2> */}

            <div className="homebody">
                <div className="getdone">
                    <h1 className="homeheading">Get. Stuff. Done.</h1>
                </div>
                <div className="homeimage">
                    {/* <img src="/images/ProfessionalLandscaper.png" /> */}
                </div>
            </div>

            <Swiper
                modules={[ Navigation, Pagination, Autoplay ]}
                navigation
                autoplay={ {delay: 3000} } 
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide> <img src="/images/babysitting.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/images/catering.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/images/cleaning.webp" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/images/dogwalking.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/images/electrician.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/images/furniture.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/images/painter.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/images/landscaping.png" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/images/poolcleaning.webp" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/images/removalists.jpg" alt="" /> </SwiperSlide>
                
            </Swiper>

            <div className="taskbuttons">
            { props.currentUser !== null ? ( 
                <> 
                <p className="posttaskheading">Post your first task in seconds</p>
                                
                    <button onClick={handleClick}>Removalists</button>
                    <button onClick={handleClick}>Home cleaning</button>
                    <button onClick={handleClick}>Furniture assembly</button>
                    <button onClick={handleClick}>Deliveries</button>
                    <button onClick={handleClick}>Gardening & Landscaping</button>
                    <br />
                    <button onClick={handleClick}>Painting</button>
                    <button onClick={handleClick}>Handyperson</button>
                    <button onClick={handleClick}>Catering</button>
                    <button onClick={handleClick}>App development</button>
                    <button onClick={handleClick}>Something else</button>
                </>
            ) : (
                <></>
            )
            }
            </div>
            {/* </Link> */}
        </div>

    );


}; // Greeting

export default Greeting;