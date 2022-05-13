import Image from "next/image";

const Product = () => {
  return (
    <div className="flex flex-col w-screen md:w-4/12 space-y-5 space-x-10 items-center">
      <Image
        className=""
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="logo"
        width={200}
        height={200}
      />      
      <p className="text-gray text-3xl font-semibold">
        Pharameutical Product
      </p>
      <p className="text-gray text-sm">
        Diversity about real world scenario for the projects maintaining about the pharameutical products which are 100% natural and no.1 products in the
        entire country of the world of the earth
      </p>
      <button className="w-max p-5 text-white brand-bg-red-color rounded-xl description-text">
        Diversity Biosciences
      </button>
    </div>
  );
}

export default Product