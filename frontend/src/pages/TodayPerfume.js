import { Component } from "react";

import Header from "../component/common/Header";
import Weather from "../component/today/Weather";



class TodayPerfume extends Component {
    state = {
        date: null,
        weather: null,
        temperature: null
    }

    passWeather = (weatherInfo) => {
        this.setState({
            ...weatherInfo
        });
    }

    render() {
        return (
            <>
                <Header />
                
                
                <div className='body'>

                    <div className ="today-weather">

                    <img src='./icons/sunny.png' height={38} alt='weather'/> 
                    <img src='./icons/cloudone.png' height={38} alt='weather'/>
                    <img src='./icons/cloudy.png' height={38} alt='weather'/>
                    <img src='./icons/rainy-day.png' height={38} alt='weather'/>
                    <img src='./icons/storm.png' height={38} alt='weather'/>
                    <img src='./icons/snowflake.png' height={38} alt='weather'/>
                    </div>
            

                    <div className="today-perfume-text">
                        {/* 예시 문구 - 추후 수정 */}
                        오늘의 마음 날씨 투표
                    
                    </div>

                    <Weather passWeather={this.passWeather}/>
                    
                    
                    <div className="today-mind">
                        <img src='./icons/sad.png' height={38} alt='mind'/>
                        <img src='./icons/soso.png' height={38} alt='mind'/>
                        <img src='./icons/happy.png' height={38} alt='mind'/>
                        <img src='./icons/angry.png' height={38} alt='mind'/>
                    </div>
                    
                    

                </div>
                

            
            </>
        );
    }
}

export default TodayPerfume;
