import SocialMedia from '../SocialMedia/SocialMedia'

export default function NavBar() {
   return (
    <nav className='bg-black px-9 py-5 w-full h-min flex'>
        <div className='logo'>
            <img src="https://vohincubator.org/wp-content/uploads/2023/07/cropped-color-157x49.png" className='bg-black' alt="" />
        </div>
        <div className='bg-black w-full h-min flex justify-between items-center'>
            <div className='bg-black w-2/5 headings'>
                 <ul className='flex w-full flex items-center justify-evenly '>
                    <li className='text-gray-200  hover:cursor-pointer hover:text-white text-[0.85rem]'><a href="">HOME</a></li>
                    <li className='text-gray-200  hover:cursor-pointer hover:text-white text-[0.85rem]'><a href="">ABOUT</a></li>
                    <li className='text-gray-200  hover:cursor-pointer hover:text-white text-[0.85rem]'><a href="">CONTACT US</a></li>
                    <li className='text-gray-200  hover:cursor-pointer hover:text-white text-[0.85rem]'><a href="">REGISTER NOW</a></li>
                 </ul>
            </div>
            <SocialMedia />
        </div>
    </nav>
   )
}