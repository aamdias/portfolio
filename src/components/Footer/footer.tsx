import './footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__text">
                    Este site é{' '}
                    <a
                        className="footer__link"
                        href="https://github.com/aamdias/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        open source
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
