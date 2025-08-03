import styles from './HeroBanner.module.scss';

const HeroBanner = ({ 
    title = "Welcome message will go here",
    subtitle = "Lorem ipsum dollar sit amet",
    imageUrl = "/images/store-banner.jpg",
    showButton = true,
    buttonText = "Shop Now"
}) => {

    return (
        <div 
        className={styles.heroContainer}
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl})` }}
        >
        <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>
            
            {showButton && (
            <button className={styles.heroButton}>
                {buttonText}
            </button>
            )}
        </div>
        </div>
    );
};

export default HeroBanner;