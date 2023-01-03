import arda from '../assets/DALL·E 2022-12-29 07.13.36 - A cyberpunk monster in a control room.png';

const MainCard = () => {
  
  return(
    <>
      <div>
        <div className="w-[250px] h-[250px]">
          <img src={arda} alt="Mehmet Arda Çelik"/>
        </div>
        <div className="">
          <h1>hey, I am Arda.</h1>
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