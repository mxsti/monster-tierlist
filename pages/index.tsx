import normal from '../img/normal.png';
import assault from '../img/assault.png';
import blau from '../img/blau.png';
import monster_mule from '../img/monster_mule.png';
import nitro from '../img/nitro.png';
import rossi from '../img/rossi.png';
import ultra_fiesta from '../img/ultra_fiesta.png';
import ultra_gruen from '../img/ultra_gruen.png';
import ultra_lila from '../img/ultra_lila.png';
import ultra_watermelon from '../img/ultra_watermelon.png';
import ultra_white from '../img/ultra_white.png';
import juiced_mango from '../img/juiced_mango.png';
import juiced_pink from '../img/juiced_pink.png';
import ultra_gold from '../img/ultra_gold.png';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='grid grid-rows-4 h-screen'>

      <Head>
        <title>:)</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      {/* S TIER */}
      <div className="flex flex-row items-center">
        <div className="px-8 text-5xl">⭐️</div>
        <img className="monsterImg px-8" src={blau.src} />
        <img className="monsterImg px-8" src={ultra_white.src} />
      </div>

      {/* A TIER */}
      <div className="flex flex-row items-center">
        <div className="px-8 text-5xl">👍🏼</div>
        <img className="monsterImg px-8" src={normal.src} />
        <img className="monsterImg px-8" src={ultra_fiesta.src} />
        <img className="monsterImg px-8" src={ultra_watermelon.src} />
      </div>

      {/* B TIER */}
      <div className="flex flex-row items-center">
        <div className="px-8 text-5xl">👎🏼</div>
        <img className="monsterImg px-8" src={ultra_gruen.src} />
        <img className="monsterImg px-8" src={rossi.src} />
        <img className="monsterImg px-8" src={assault.src} />
        <img className="monsterImg px-8" src={ultra_gold.src} />
      </div>
      
      {/* DIDNT TRY */}
      <div className="flex flex-row items-center">
        <div className="px-8 text-5xl">❓</div>
        <img className="monsterImg px-8" src={ultra_lila.src} />
        <img className="monsterImg px-8" src={monster_mule.src} />
        <img className="monsterImg px-8" src={nitro.src} />
        <img className="monsterImg px-8" src={juiced_mango.src} />
        <img className="monsterImg px-8" src={juiced_pink.src} />
      </div>

    </div>
  )
}
