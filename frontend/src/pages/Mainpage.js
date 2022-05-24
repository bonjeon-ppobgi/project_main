/*import axios from 'axios';*/
import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from '../component/common/Header';
//import queryString from 'query-string';


function MainPage() {

    /*const name = document.getElementById("name");
    axios({ method: "POST", 
            url: "http://localhost:3000/mind", 
            data: { 
                "userID": name.value
            }
    }).then((res) => {
        console.log(res);
    }).catch(error => {
        console.log(error);
        throw new Error(error);
    })*/

  return (
      <>
      <Header />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <form>
            <div class="mainpage">
            <img src='' style={{ justifyContent: 'center', width: '30%', alignContent: 'center'}}></img>
            <div class="webname">마음기상청</div>
            <p class="exp">당신의 마음날씨에 따른 콘텐츠를 추천해드릴게요 :)</p>
            <input class="inputname" type="text" placeholder='닉네임을 입력해주세요' id ='name' ></input>
            </div>
            <div class="webname">
            <Link to='/main'>
            <button class='namesubmit'>시작하기</button>
            </Link>
            </div>
        </form>
    </div>
    </>
  )
}


export default MainPage