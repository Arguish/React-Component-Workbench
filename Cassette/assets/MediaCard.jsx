import React from 'react'
import Cassette from './Cassette/Cassette'
import Poster from './Poster/Poster'
import './MediaCard.css'

const ExampleOBJ = {
  img: '', //an URL String,
  heading: '', // a String for the small top title
  desc: '', //a String with the paragraph
  title: '', // The small lower title
  sub: '', //The subtitle
  id: '', //The character on the casette
}

const MediaCard = ({ obj }) => {
  return (
    <>
      <div style={{ margin: '30px' }} className="mediacard_content">
        <div className="mediacard_book">
          <div className="mediacard_card">
            <div className="mediacard_img-card"></div>
            <div className="mediacard_add-cart">
              <h5>{obj.heading}</h5>
              {obj.desc}
            </div>
            <div className="mediacard_info-card">
              <p>
                <strong>{obj.title}</strong>
              </p>
              <p>{obj.sub}</p>
            </div>
          </div>
          <div
            className="cassette_container"
            style={{
              position: 'absolute',
              zIndex: '-1',
              left: '-15px',
              top: '15px',
            }}
          >
            <Cassette label={obj.id}></Cassette>
          </div>
          <div className="mediacard_cover">
            <Poster url={obj.img}></Poster>
          </div>
        </div>
      </div>
    </>
  )
}

export default MediaCard
