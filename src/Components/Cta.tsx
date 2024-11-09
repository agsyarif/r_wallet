import ctaImage from './../assets/GIF.png'
import Button from "./Button"

const Cta = () => {
  return (
    <div className="bg-primary-gray px-[6.25rem] py-[4.813rem] flex justify-evenly gap-[7.438rem] items-center">
      <div className="flex flex-col gap-10 items-start w-[500px]">
        <h1 className="font-poppins font-semibold leading-[5.625rem] text-white text-[3.75rem]">
          Questions? <br />
          Let’s talk 
        </h1>
        <p className="font-poppins font-normal leading-[32px] text-lg text-white opacity-40">
          Contact us through our 24/7 live chat. We’re always happy to help!
        </p>
        <Button title="Get Started" style="w-[175px] text-center font-poppins font-normal leading-[32px] text-lg" />
      </div>
      <img src={ctaImage} alt="cta image" className="w-[50rem] rounded-3xl bg-dark-gray" />
    </div>
  )
}

export default Cta