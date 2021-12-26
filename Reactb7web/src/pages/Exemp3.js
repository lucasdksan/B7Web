import { useState } from 'react';
import '../styles/pages/Exemp3.css';

import ThemeContext from '../contexts/ThemeContext';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Body from '../components/Body';

const Exemp3 = () => {
    const [userName, setUserName] = useState('Bonieky');

    return (
        <ThemeContext.Provider value="dark">
            <div className="container">
                <ThemeContext.Consumer>
                    {
                        (value)=>{
                            return(
                                <div>
                                    tema: {value}
                                </div>
                            )
                        }
                    }
                </ThemeContext.Consumer>
                <Header username={userName} />
                <section>
                    <Menu username={userName} />
                    <Body username={userName} setUsername={setUserName} />
                </section>
            </div>
        </ThemeContext.Provider>
    );
}

export default Exemp3;