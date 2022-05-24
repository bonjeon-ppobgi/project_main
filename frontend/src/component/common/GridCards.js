import React from 'react'
import { Col } from 'antd';

function GridCards(props) {
  return (
    // lg일 때 4개를 보여줌 24 / 4 = 6 …
    <Col lg={6} md={8} xs={24}>
    <div style={{ position: 'realtive'}}>
        <a href={`/movie/${props.movieId}`} >
            <img style={{ width: '100%', height: '320px' }}src={props.image} alt={props.movieName}/>
        </a>
    </div>
    </Col>
  )
}

export default GridCards