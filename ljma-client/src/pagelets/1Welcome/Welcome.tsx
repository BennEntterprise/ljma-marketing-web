import React from 'react'
import './Welcome.scss'
import BannerImg from './BannerImg.jpg'
const Welcome = () => {
  return (
    <div id='welcome-pagelet'>
      <div className='banner-text'>
        <h5 className='liberation-sans-bold'>Welcome to</h5>
        <h3 className='liberation-sans-bold'>Laura Jean Music Academy</h3>
        <h6 className='liberation-sans-bold'>
          <em>Developing young characters one note at at time.</em>
        </h6>
      </div>
    </div>
  )
}

export default Welcome
