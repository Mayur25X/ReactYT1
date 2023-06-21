import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/4.jpg";
import img2 from "../assets/3.jpg";


const Services = () => {
    return (
      <>
        <div className="services">
                <Carousel
                    infiniteLoop
                    autoPlay 
                    showThumbs={false}
                    showStatus={false}
                    interval={3000}
                    transitionTime={1000}
                    showIndicators={false}

                >
            <div>
              <img src={img1} alt="Not_Found" />
              <p>Service 1</p>
            
            </div>
            <div>
              <img src={img2} alt="Not_Found" />
              <p>Service 2</p>
             
            </div>
            <div>
              <img src={img2} alt="Not_Found" />
              <p>Service 3</p>
             
            </div>
            <div>
              <img src={img2} alt="Not_Found" />
              <p>Service 4</p>
             
            </div>
            <div>
              <img src={img2} alt="Not_Found" />
              <p>Service 5</p>
             
            </div>
            <div>
              <img src={img2} alt="Not_Found" />
              <p>Service 6</p>
             
            </div>
          </Carousel>
        </div>
      </>
    );
};

export default Services;
