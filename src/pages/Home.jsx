import './Home.css'
import { Link } from 'react-router-dom'
import 'boxicons'
import Search from '../components/Search'

export default function Home () {
    return (
        <div className='container'>
            
            {/* === NAV === */}
            <div className="nav">
                <div className="nav__left">
                    <Link to='about'>Mail</Link>
                    <Link to='store'>Images</Link>
                </div>

                <div className="nav__right">
                    {/* <Link to='gmail'>Gmail</Link>
                    <Link to='images'>Images</Link> */}
                    {/* <div className="menu"><box-icon name='grid-small' color='#161616' ></box-icon></div> */}
                    <div className="dots-container">
                        <div className="top">
                            <div className="dots-item one"></div>
                            <div className="dots-item two"></div>
                        </div>
                        <div className="bottom">
                            <div className="dots-item three"></div>
                            <div className="dots-item four"></div>
                        </div>
                    </div>
                    <img src="./avatar.png" alt="avatar"/>
                </div>
            </div>

            {/* === BODY === */}
            <div className="body">
                <img src="./logo.png" alt="logo-google" className='logo-google'/>

                <div className="input-container">
                    {/* Search */}
                    <Search />
                </div>
            </div>

            {/* === FOOTER === */}
            <div className="footer">
                <div className="footer__left">
                    <p>Advertesing</p>
                    <p>Business</p>
                    <p>About</p>
                </div>
                <div className="footer__right">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>

        </div>
    )
}