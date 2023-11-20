import { Outlet, Link } from "react-router-dom";
import styles from "./style.scss";
import emailVector from '../../assets/icons/email-vector.png';
import phoneVector from '../../assets/icons/phone-vector.png';


export default function Navigation() {
    return (
        <main style={styles}>
            <nav className='main-navbar'>
                <div className="upper-nav">
                    <div className="left-nav">
                        <a href="mailto:ediconpts9@gmail.com">
                            <img src={emailVector} width={15} height={15} alt="" />
                            ediconpts9@gmail.com
                        </a>
                        <span>
                            <img src={phoneVector} width={15} height={15} alt="" />
                            (+998) (98)-260-87-88
                        </span>
                    </div>
                    <div className="right-nav">

                    </div>
                </div>
            </nav>
            <Outlet />
        </main>
    )
}
