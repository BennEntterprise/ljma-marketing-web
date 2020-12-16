import React from 'react'
import { Container } from 'react-bootstrap'
import './ComingSoon.scss'
import ImgLJMA from '../../images/logos/LJMA Black(trimmed).png'
const CommingSoon = () => {
  return (
    <Container id='ljma-banner'>
      <div id='announcement'>
        <img src={ImgLJMA} alt='laura jean music academy logo' />
        <h3>Updated Site Coming Soon: </h3>
        <p>
          Laura Jean Music Academy was formed in 2014 as a training academy for
          young musicians in the Los Angeles area. Faced with the challenge of a
          global pandemic in early 2020, LJMA strived to transition to an online
          learning platform as safely and effectively as possible, and has been
          fortunate to be able to reach students across the globe with this
          adaptation.
        </p>
        <p>
          This portion of the site is under development, but will be released by
          December 25th 2020.
        </p>
        <p>
          Check back later for more details or email :{' '}
          <a href='mailto:info@squadharmonix.com'>
            info@laurajeanmusicacademy.com
          </a>
        </p>
      </div>
    </Container>
  )
}

export default CommingSoon
