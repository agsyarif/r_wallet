import CardIcon from './../assets/icons/Cards icon.png'
import CoinIcon from './../assets/icons/Coin icon.png'
import PurseIcon from './../assets/icons/Purse icon.png'

const features = [
  {
    img: CardIcon,
    name: "Customizable card",
    description: "Custom your own card for your exact incomes and expenses needs.",
  },
  {
    img: CoinIcon,
    name: "No payment fee",
    description: "Transfer your payment all over the world with no payment fee.",
  },
  {
    img: PurseIcon,
    name: "All in one place",
    description: "The right place to keep your credit and debit cards, boarding passes & more."
  }
]

const Features = () => {
  return (
    <div className="bg-primary-gray px-[6.25rem] py-[4.813rem] flex justify-evenly gap-[7.438rem] items-center">
      {
        features.map((feature, index) => (
          <div key={index} className='flex flex-col items-center gap-2.5 w-[300px]'>
            <img src={feature.img} alt={feature.name} className='w-[70px] pb-5' />
            <h5 className='text-white font-semibold leading-[32px text-lg]'>{feature.name}</h5>
            <p className='text-white opacity-60 text-center font-normal leading-[32px text-lg]'>{feature.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Features