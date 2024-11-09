import Button from "./Button"
import imageHeader from './../assets/header.png'

const Header = () => {
  return (
    <div className="bg-primary-gray px-[6.25rem] py-[4.813] flex justify-between gap-[7.438rem] items-center h-[830px]">
      <div className="flex flex-col gap-10 items-start w-[500px]">
        <h1 className="font-poppins font-semibold leading-[5.625rem] text-white text-[3.75rem]">
          SaaS Landing Page Template
        </h1>
        <p className="font-poppins font-normal leading-[32px] text-lg text-white opacity-40">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        <Button title="Get Started" style="w-[175px] text-center font-poppins font-normal leading-[32px] text-lg" />
      </div>
      <img src={imageHeader} alt="image header" className="w-[50rem] rounded-3xl bg-dark-gray" />
    </div>
  )
}

export default Header
