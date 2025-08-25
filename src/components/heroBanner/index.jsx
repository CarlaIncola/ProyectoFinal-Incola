import styles from './HeroBanner.module.scss';
import defaultHeroImage from '../../assets/images/hero/hero-v2.png';
import logoImg from '../../assets/images/logos/vurger-logo-white.png';

const HeroBanner = ({ 
    title = "Fast food that loves you back",
    imageUrl = defaultHeroImage,
    logo = logoImg
}) => {

    return (
        <div 
            className={styles.heroContainer}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl})` }}
        >
            <div className={styles.heroContent}>
                <img src={logo} alt="Logo" className={styles.heroLogo} />
                <h1 className={styles.heroTitle}>{title}</h1>
            </div>
        </div>
    );
};

export default HeroBanner;