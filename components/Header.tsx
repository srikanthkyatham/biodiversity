/* eslint-disable @next/next/no-img-element */
import MobileDetails from './Mobile'
import EmailDetails from './Email'
import Search from './Search'

const Header = () => {

  return (
    <header className="flex justify-between flex-col space-y-5 lg:flex-row lg:items-center px-5 py-5" id="header">
      <img className='w-56 md:w-96' src="/logo.png" alt='Bio Diversity' />
      <Search />
      <div className="flex flex-col lg:items-end space-y-1">
        <MobileDetails />
        <EmailDetails />
      </div>
    </header>
  );
}

export default Header
