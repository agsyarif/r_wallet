import Button from "./Button"
import Logo from "./Logo"

const Topbar = () => {
  return (
    <div className="bg-primary-gray px-12 py-8 flex justify-between items-center">
      <Logo />
      <div className="flex gap-6 items-center">
        <div className="text-white font-poppins text-[18px]">Sign up</div>
        <Button title="Log in" color="purple" style="w-[175px] text-[18px] text-center font-light" />
      </div>
    </div>
  )
}

export default Topbar