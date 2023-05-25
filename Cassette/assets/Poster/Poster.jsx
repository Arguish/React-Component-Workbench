import React from 'react'
import './Poster.css'

function Poster({ url }) {
  return (
    <>
      <div className="celo_1"></div>
      <div className="celo_2"></div>
      <div
        style={{ overflow: 'hidden', objectFit: 'scale-down' }}
        className="mediacard_border"
      >
        <img
          style={{ objectFit: 'scale-down', width: '100%' }}
          src={url}
          alt=""
        />
      </div>
    </>
  )
}

export default Poster
