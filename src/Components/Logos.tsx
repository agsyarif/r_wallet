import LogoImages from './../assets/Logos.png';

const Logos = () => {
  return (
    <div className="bg-primary-gray px-[6.25rem] flex justify-between py-[4.85rem] gap-[7.438rem] items-center h-[170px]">
      <img src={LogoImages} alt="Logo" className='border-y-2 border-y-dark-gray py-[4.125rem] ' />
    </div>
  );
};

export default Logos;
