import styles from './styles.scss';
import NotFoundImage from '../../assets/imgs/404.png'
import Brands from '../../assets/imgs/brands.png';

const NoPage = () => {
    const btnSize = { "width": "150px", "height": "40px" };

    return (
        <div style={styles}>
            <div className="no-page">
                <div>
                    <h1>404 Not Found</h1>
                    <p>Home.Pages. <span className='not-found-text'>404 Not found</span></p>
                </div>
                <img src={NotFoundImage} alt="Not Found" />
                <a style={btnSize}  className='danger-btn'  href="/">
                    Back To Home
                </a>
                <img className='brands-img'  src={Brands} alt="" />
            </div>
        </div>
    );
};

export default NoPage;