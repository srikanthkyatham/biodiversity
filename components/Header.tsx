/* eslint-disable @next/next/no-img-element */
import MobileDetails from './Mobile'
import EmailDetails from './Email'

const Header = () => {
  return (
    <div className="flex justify-between flex-col space-y-5 md:flex-row md:items-center px-5 py-5" id="header">
      <img className='w-56 md:w-96' src="/logo.png" alt='Bio Diversity' />
      {/* <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <input type="text" className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none text-xl" placeholder="Search Products..." />
          <div className="absolute top-4 right-3">
            <i className="text-gray-400 z-20 hover:text-gray-500"></i>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col md:items-end space-y-1">
        <MobileDetails />
        <EmailDetails />
      </div>
    </div>
  );
}

export default Header
