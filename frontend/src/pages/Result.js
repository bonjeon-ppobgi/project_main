import React, { useEffect, useState } from 'react';
import "../styles/App.css"
//import { Row } from 'antd';
//import GridCards from '../common/GridCards';
//import styled from 'styled-components';
import Header from '../component/common/Header';
import {Link} from 'react-router-dom';

// Config ... ->  
export const USER_SERVER = '/api/users';
export const API_URL = 'http://localhost:8080';
export const API_KEY = '24ccc099a6d7a5c55d314bc009a4e56f'; // 신청하여 부여 받은 KEY 값 등록
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// <- ...

function ResultPage() {

  const [Movies, setMovies] = useState([])
  const [CurrentPage, setCurrentPage] = useState(0)

    useEffect(() => {
      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      fetchMovies(endpoint)
  }, [])

  const fetchMovies = (endpoint ) => {
      fetch(endpoint)
      .then(response => response.json())
      .then(response => {

          console.log(response)

          setMovies([...Movies, ...response.results])
          setCurrentPage(response.page)
      })
  }

  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
    fetchMovies(endpoint)
}

  return (
    <>
    <Header />
    <div className = 'key' class='body' style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      <div className = ''style={{display: 'flex', justifyContent:'center'}}>
        <p class='keyword'>
        # 거부할 수 없는 이끌림</p>
        <br/>
      </div>

      <div style={{display: 'flex', justifyContent:'center'}}>
        <p class='select' style={{ fontSize:'20px'}}>키워드를 선택하셨어요</p>
      </div>

    <div style={{display: 'flex', justifyContent:'center'}}>
    <div style={{ position: 'realtive'}}>
        <Link to ='/contents'>
            <img style={{ width: '100%', height: '320px' }}src={'./icons/logo192.png'} alt={'인터스텔라'}/>
        </Link>
    </div>
    <div style={{ position: 'realtive'}}>
        <Link to ='/contents'>
            <img style={{ width: '100%', height: '320px' }}src={'./icons/logo192.png'} alt={'영화이름2'}/>
        </Link>
    </div>
    <div style={{ position: 'realtive'}}>
        <Link to ='/contents'>
            <img style={{ width: '100%', height: '320px' }}src={'./icons/logo192.png'} alt={'영화이름3'}/>
        </Link>
    </div>
    </div> 

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button class='load' onClick={loadMoreItems}>더보기</button>
      </div>


    </div>
    </>
  )
}

export default ResultPage