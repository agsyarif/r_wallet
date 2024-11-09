import productImage from './../assets/Image.png'

const Product = () => {
  return (
    <div className="bg-primary-gray px-[6.25rem] py-[4.813rem] flex justify-between gap-[7.438rem] items-center">
      <div className="bg-yellow rounded-2xl">
    <img src={productImage} alt="productImage" />
      </div>
    </div>
  )
}

export default Product