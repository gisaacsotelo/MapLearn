import React, { useState } from 'react'

import useSound from 'use-sound'
import YakkosWorld from '../../server/public/data/yakkos-world-instrumental.mp3'

function Music() {

  const [music, setMusic] = useState(true)
  const [play, { pause }] = useSound(YakkosWorld)
  const PlayMusic = () => {
    setMusic(!music)
  }

  return (
    <button className="music" onClick={() => {
      PlayMusic()
      return music ? play() : pause()
    }}>Music</button>
  )
}

export default Music