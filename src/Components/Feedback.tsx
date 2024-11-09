import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FeedbackIcon from './../assets/feedback/User Feedback Image.png';
import StarIcon from './../assets/feedback/Star.png';

const feedbacks = [
  {
    img: FeedbackIcon,
    name: "Sastionard S",
    said: "Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! Thanks!",
    stars: 3
  },
  {
    img: FeedbackIcon,
    name: "Thomas J",
    said: "Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! Thanks!",
    stars: 4
  },
  {
    img: FeedbackIcon,
    name: "Erickohan T",
    said: "Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! Thanks!",
    stars: 5
  },
];

const Feedback = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container bg-primary-gray px-[6.25rem]">
      <Slider {...settings}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="bg-purple rounded-2xl px-[162px] py-[83px] flex flex-col">
            <p className="font-semibold leading-[40px] text-[24px] text-left font-poppins mb-7">
              "{feedback.said}"
            </p>
            <div className="flex items-center gap-2">
              <img src={feedback.img} alt="Feedback" className="w-[4.375rem]" />
              <div>
                <p>{feedback.name}</p>
                <span className="flex">
                  {Array.from({ length: feedback.stars }).map((_, index) => (
                    <img key={index} src={StarIcon} alt="star icon" />
                  ))}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
