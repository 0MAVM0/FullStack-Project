import { Outlet, Link } from "react-router-dom";
import styles from "./style.scss";
import emailVector from '../../assets/icons/email-vector.png';
import phoneVector from '../../assets/icons/phone-vector.png';
import bottomVector from '../../assets/icons/bottom-vector.png';
import profileVector from '../../assets/icons/profile-vector.png';
import wishlistVector from '../../assets/icons/wishlist-vector.png';
import cardVector from '../../assets/icons/card-vector.png';
import searchVector from '../../assets/icons/search-vector.png';


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
                        <span className="nav-link">
                            <Link to={"/#"}>
                                English
                                <img src={bottomVector} width={10} height={5} alt="" />
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link to={"/#"}>
                                USD
                                <img src={bottomVector} width={10} height={5} alt="" />
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link to={"/#"}>
                                Login
                                <img src={profileVector} width={15} height={15} alt="" />
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link to={"/#"}>
                                Wishlist
                                <img src={wishlistVector} width={15} height={15} alt="" />
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link to={"/#"}>
                                <img src={cardVector} width={20} height={20} alt="" />
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="main-nav">
                    <div className="main-nav-wrapper">
                        <h3>Hekto</h3>
                        <div className="main-nav-liks">
                            <span className="nav-link">
                                <Link to={"/#"}>
                                    Pages
                                </Link>
                            </span>
                            <span className="nav-link">
                                <Link to={"/#"}>
                                    Products
                                </Link>
                            </span><span className="nav-link">
                                <Link to={"/#"}>
                                    Blog
                                </Link>
                            </span><span className="nav-link">
                                <Link to={"/#"}>
                                    Shop
                                </Link>
                            </span><span className="nav-link">
                                <Link to={"/#"}>
                                    Contact
                                </Link>
                            </span>
                        </div>
                        <div className="main-nav-searchbar">
                            <input type="search" />
                            <button>
                                <img src={searchVector} width={25} height={25} alt="Search" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </main>
    )
}
