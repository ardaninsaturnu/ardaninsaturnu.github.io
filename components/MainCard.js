import arda from '../assets/arda.png';
import Image from "next/image";

const MainCard = () => {
  
  return(
    <>
      <div className="flex max-w-5xl">
        <div className="w-[800px] h-[800px]">
          <Image src={arda} alt="Mehmet Arda Çelik"/>
        </div>
        <div>
          <h1 className="text-4xl">hey, I am Arda.</h1>
          <h1>I like to develop products.</h1>
          <p>
            Currently, I explore the world of AI.
            Before that, I worked as a frontend developer and ui designer.
            I like to capture moments through photography. Keyboard addicted.
            Say hello at <a href="mailto:mehmetarda.celik@hotmail.com">mehmetarda.celik@hotmailcom</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default MainCard;