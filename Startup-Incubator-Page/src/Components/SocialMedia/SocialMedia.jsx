import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter , faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './SocialMedia.css'

export default function SocialMedia({ colorName='black', size=8 }) {
    
    const bgColor = (colorName != 'black') ? `bg-${colorName}-400` : 'bg-black'; 
    const x = `text-${size}xl`;


    return (
        <div className={`w-min flex gap-x-6 py-2 px-1 items-center justify-center ${bgColor} social`}>
          <a href="https://www.instagram.com/vohincubator/" className='text-[1.5rem]'>
            <FontAwesomeIcon icon={faInstagram} className={`bg-black text-gray-200 font-thin  hover:cursor-pointer hover:text-white oneIcon`} />
          </a>
          <a href="https://twitter.com/VOHincubator" className='text-[1.5rem]'>
            <FontAwesomeIcon icon={faTwitter} className={`bg-black text-gray-200 font-thin  hover: cursor-pointer hover:text-white oneIcon`} />
          </a>
          <a href="https://www.facebook.com/vohincubator" className='text-[1.5rem]'>
            <FontAwesomeIcon icon={faFacebook} className={`bg-black text-gray-200 font-thin  hover: cursor-pointer hover:text-white oneIcon`} />
          </a>
          <a href="https://www.linkedin.com/company/vohincubator/" className='text-[1.5rem]'>
            <FontAwesomeIcon icon={faLinkedin} className={`bg-black text-gray-200 font-thin  hover: cursor-pointer hover:text-white oneIcon`} />
          </a>
        </div>
    );
}
