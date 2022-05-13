import Image from "next/image";
import Config from '../app.json'

const Header = () => {
  return (
    <div className="flex justify-between px-5 py-5" id="header">
      <Image
        src="/logo.png"
        alt="logo"
        width={150}
        height={100}
      />      
      <div className="flex flex-col items-end space-y-1">
        <Image
          className=""
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="logo"
          width="35px"
          height="32px"
        />
        <a className="font-semibold" href={`tel:${Config.mobile_no}`}>{Config.mobile_no}</a>
        <a className="font-semibold" href={`tel:${Config.email}`}>{Config.email}</a>
      </div>
    </div>
  );
}

export default Header
