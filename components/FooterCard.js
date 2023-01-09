import Image from "next/image";
import dribble from '../assets/dribbble.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const socialLinks = [
  {
    name: 'linkedin',
    image: linkedin,
    link: 'https://www.linkedin.com/in/mehmetardacelik/'
  },
  {
    name: 'github',
    image: github,
    link: 'https://github.com/ardaninsaturnu'
  },
  {
    name: 'dribble',
    image: dribble,
    link: 'https://dribbble.com/graycatstudio'
  }
]

const FooterCard = () => {
  
  return(
    <div className="bg-teal-900 h-1/6 w-full">
      <div className="h-full flex justify-around max-w-2xl mx-auto items-center">
        {
          socialLinks.map( ({ name, image, link }, item ) => {
            return (
              <Image
              src={image}
              alt={ `${ name }: ardaninsaturnu` }
              key={ item }
              onClick={() => window.open( link, '_blank' )}
              className="cursor-crosshair" />
            )
          })
        }
      </div>
    </div>
  )
  
}

export default FooterCard;
