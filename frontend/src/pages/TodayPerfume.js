import { Component } from "react";
import "../styles/App.css"
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
                    <div className='today-weather'>
                        <img src='./icons/sunny.png' height={40} alt='weather'/>
                        <div className='weather-text'>맑음</div>
                    </div>

                    <div className='today-weather'>
                        <img src='./icons/cloudy.png' height={40} alt='weather'/>
                        <div className='weather-text'>흐림</div>
                    </div>

                    <div className='today-weather'>
                        <img src='./icons/rainy-day.png' height={40} alt='weather'/>
                        <div className='weather-text'>비</div>
                    </div>

                    <div className='today-weather'>
                        <img src='./icons/storm.png' height={40} alt='weather'/>
                        <div className='weather-text'>천둥</div>
                    </div>

                    <div className='today-weather'>
                        <img src='./icons/snowflake.png' height={40} alt='weather'/>
                        <div className='weather-text'>눈</div>
                    </div>
                    


                    <div className="today-perfume-text">
                        {/* 예시 문구 - 추후 수정 */}
                     
            
                    
                    </div>

                    <Weather passWeather={this.passWeather}/>
        
                    <div className='today-mind'>
                        <img src='./icons/sad.png' height={40} alt='mind'/>
                    </div>

                    <div className='today-mind'>
                        <img src='./icons/bad.png' height={40} alt='mind'/>
                    </div>
                    
                    <div className='today-mind'>
                        <img src='./icons/soso.png' height={40} alt='mind'/>
                    </div>

                    <div className='today-mind'>
                        <img src='./icons/happy.png' height={40} alt='mind'/>
                    </div>

                    <div className='today-mind'>
                        <img src='./icons/steam.png' height={40} alt='mind'/>
                    </div>

                    <div className='today-mind'>
                        <img src='./icons/emoji.png' height={40} alt='mind'/>
                    </div>

                    <div className='today-mind'>
                        <img src='./icons/angry.png' height={40} alt='mind'/>
                    </div>

                    

                </div>
                

            
            </>
        );
    }
}

export default TodayPerfume;
