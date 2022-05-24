import { Component } from "react";

import Header from "../component/common/Header";
import {Link} from 'react-router-dom';
import "../styles/Contents.css"


class Contents extends Component {

    render() {
        return (
            <>
                <Header />
                
                
                <div className='body_'>

                <h1>시그널</h1>
                
                {/*Movie Name*/}
                
                <div style={{ width: '80%', margin: '1rem auto' }}>
                    
                    <h2>DB 연결(사진, 인물, 줄거리, 키워드)</h2>
                    
                    <table border="1" id="grid">
                        <tr>
                            <td rowspan="3">포스터</td>
                            <td>작가, 배우 정보</td>
                        </tr>
                        <tr>
                            <></><td>줄거리</td>
                        </tr>   
                        <tr>    
                            <></><td>선택한 키워드</td>
                        </tr>
                    </table>
                    
                    
                {/*Movie Image*/}
                
                
                {/*Movie Director*/}
                
                
                {/*Movie Contents*/}
                
                
                {/*Keyword*/}

                </div>    

                <div>
                    <Link to='/result'>
                        <button id="btn"> prev </button>
                    </Link>
                </div>
                  

                </div>
                

            
            </>
        );
    }
}

export default Contents;
