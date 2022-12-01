import monster from '../img/normal.png';

export default function Home() {
  return (
    <div className='grid grid-rows-4'>
      
      {/* S TIER */}
      <div className="bg-[#CEEFF9] flex flex-row items-center">
        <div className="px-8 text-5xl">⭐️</div>
        <img className="monsterImg px-8" src={monster.src} />
      </div>

      {/* A TIER */}
      <div className="bg-[#A1BEC7] flex flex-row items-center">
        <div className="px-8 text-5xl">👍🏼</div>
        <img className="monsterImg px-8" src={monster.src} />
      </div>

      {/* B TIER */}
      <div className="bg-[#CEEFF9] flex flex-row items-center">
        <div className="px-8 text-5xl">👎🏼</div>
        <img className="monsterImg px-8" src={monster.src} />
      </div>
      
      {/* DIDNT TRY */}
      <div className="bg-[#A1BEC7] flex flex-row items-center">
        <div className="px-8 text-5xl">❔</div>
        <img className="monsterImg px-8" src={monster.src} />
      </div>

    </div>
  )
}
