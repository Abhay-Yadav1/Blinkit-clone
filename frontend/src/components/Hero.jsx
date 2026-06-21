import React from 'react'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'
import banner from '../assets/Mainbanner.png'

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600,
  };

  const Slider = SlickSlider?.default || SlickSlider;

  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="w-full">
            <Slider {...settings}>
              <div>
                <img
                  src={banner}
                  alt="Fresh grocery banner"
                  className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[420px]"
                />
              </div>
              <div>
                <img
                  src={banner}
                  alt="Fresh grocery banner"
                  className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[420px]"
                />
              </div>
              <div>
                <img
                  src={banner}
                  alt="Fresh grocery banner"
                  className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[420px]"
                />
              </div>
            </Slider>
          </div>

          <ul className="grid grid-cols-1 gap-3 bg-white p-4 sm:grid-cols-3">
            <li>
              <img src={hero1} alt="Blinkit promo" className="w-full" />
            </li>
            <li>
              <img src={hero2} alt="Blinkit promo" className="w-full" />
            </li>
            <li>
              <img src={hero3} alt="Blinkit promo" className="w-full" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero