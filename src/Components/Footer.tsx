import Button from "./Button";
import Logo from "./Logo";

const menu = [
  "© Company 2024",
  "Privacy Policy",
  "Cookies Policy",
  "Terms of use",
];

const Footer = () => {
  return (
    <div className="bg-primary-gray px-[6.25rem] py-[2.813rem">
      <div className="flex gap-[7.438rem] items-end justify-between border-t-2 py-[20px] border-t-dark-gray">
        <div className="flex flex-col gap-12">
          <Logo />
          <div className="flex text-white gap-5 text-[18px] font-semibold font-poppins">
            {menu.map((m, index) => (
              <p key={index}>{m}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-white font-poppins font-normal mb-2">Updates right to your inbox</p>
          <div className="flex gap-5">
            <input type="text" placeholder="Email Address" className="bg-dark-gray p-2.5 rounded-xl w-[20rem]" />
            <Button title="send" style="w-[150px] font-normal text-center" color="purple" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
