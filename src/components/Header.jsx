import 'remixicon/fonts/remixicon.css'

function Header() {
  return (
    <div className="fixed w-full flex items-center justify-end z-10 py-20 px-14">
      <button className='bg-black text-white border-4 text-xl px-6 py-3 rounded-full hover:bg-gray-500'>Hire Me</button>
      <i className="ri-more-2-fill text-4xl ml-3"></i>
    </div>
  )
}

export default Header
