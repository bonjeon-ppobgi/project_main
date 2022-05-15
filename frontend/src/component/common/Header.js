import { PureComponent } from "react";
import '../../styles/Header.css';

class Header extends PureComponent {
    render() {
        return (
            <div className='Header'>
         
                <img src='./icons/logo.png' height={100}/>
                

                <div id="box">
                    <h3 class ="header-item">오늘, 당신의 마음 날씨는 어떠한가요?</h3>  

                </div>
            



                
            </div>

        )
    }
}

export default Header;

