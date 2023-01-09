import arda from '../assets/arda.png';
import Image from "next/image";

const MainCard = () => {
  
  return(
    <>
      <main className="h-5/6 w-full bg-gray-900 flex justify-center items-center">
      <div className="flex max-w-[1200px]">
        <div>
          <Image src={arda} alt="Mehmet Arda Çelik"/>
        </div>
        <div className="text-white w-2/3 flex flex-col gap-3 pl-5">
          <h1 className="text-5xl font-semibold">hey, I am Arda.</h1>
          <h1 className="text-4xl">I like to develop products.</h1>
          <p className="text-3xl text-zinc-400">
            Currently, I explore the world of AI.
            Before that, I worked as a frontend developer and ui designer.
            I like to capture moments through photography. Keyboard addicted.
            Say hello at <a href="mailto:mehmetarda.celik@hotmail.com" className="text-white mb-4">mehmetarda.celik@hotmail.com</a>
          </p>
        </div>
      </div>
      </main>
    </>
  )
}

export default MainCard;
