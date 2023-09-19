import styles from "./footer.module.css";

function Footer() {
    return (
        <>
            <footer className={styles.footerContainer}>
                <ul className={styles.contactList}>
                    <li><a href="https://github.com/zricardobraga">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/jose-ricardo-braga/">LinkedIn</a></li>
                </ul>
            </footer>
        </>
    );
}
export default Footer
