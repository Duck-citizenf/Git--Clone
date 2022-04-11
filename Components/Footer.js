import Image from 'next/image'
import Script from 'next/script'


export default function Footer() {
    return (
        <div className="footer">
            <div className="text-center footer__logo"><img src="/images/top-logo.png"/></div>
            <div className="flex footer__columns">
                <div className="flex flex-column footer__list">
                    <a className="footer__menu-name">BELIEBTE SEITEN </a>
                    <a className="footer__menu-content">Gin </a>
                    <a className="footer__menu-content">Craft Beer </a>
                    <a className="footer__menu-content">Spirituosen </a>
                    <a className="footer__menu-content">Gin Rezepte </a>
                    <a className="footer__menu-content">Angebot für Firmenkunden </a>
                    <a className="footer__menu-content">Highlights</a>
                    <a className="footer__menu-content">Magazin</a>
                    <a className="footer__menu-content">Verkaufen auf Honest &amp; Rare</a>
                    </div>
                <div className="flex flex-column footer__list">
                    <a className="footer__menu-name">WISSENSWERTES</a>
                    <a className="footer__menu-content">Alle Marken </a>
                    <a className="footer__menu-content">Alle Verkäufer Shops </a>
                    <a className="footer__menu-content">Unsere Getränkekriterien </a>
                    <a className="footer__menu-content">Unsere Mission</a>
                    <a className="footer__menu-content">So funktioniert's </a>
                    <a className="footer__menu-content">Gutschein kaufen</a>
                    <a className="footer__menu-content">Affiliate</a>
                </div>
                <div className="flex flex-column footer__list">
                    <a className="footer__menu-name">SERVICES &amp; INFOS </a>
                    <a className="footer__menu-content">Über uns </a>
                    <a className="footer__menu-content">Häufige Fragen </a>
                    <a className="footer__menu-content">Kontakt </a>
                    <a className="footer__menu-content">Lieferung und Versand </a>
                    <a className="footer__menu-content">Impressum </a>
                    <a className="footer__menu-content">AGB </a>
                    <a className="footer__menu-content">Datenschutz</a>
                    </div>
                <div className="flex flex-column footer__list">
                    <a className="footer__menu-name">ZAHLUNGSARTEN</a>
                    <div className="footer__menu-content">
                        <img className="footer__image3rd" src="/images/like.png"/>
                        <img src="/images/like.png"/>
                        <img src="/images/like.png"/>
                        <img src="/images/like.png"/>
                    </div>
                    <a className="footer__menu-name">Lass uns in Kontakt bleiben</a>
                    <div className="footer__menu-content">
                        <img className="footer__image3rd" src="/images/like.png"/>
                        <img src="/images/like.png"/>
                        <img src="/images/like.png"/>
                    </div>
                </div>
                <div className="flex flex-column footer__list-last">
                    <a className="footer__menu-name">SERVICETELEFON</a> 
                    <a className="phone-number">	030 99 00 47 41 </a>
                    <a className="footer__menu-content">Täglich von 10-22 Uhr </a>
                    <div className="flex flex-column footer__email">
                        <a className="footer__menu-name">GENUSSLETTER</a> 
                            <input className="footer__email-margin" placeholder="E-Mail"/> 
                        <a className="footer__menu-content">
                            <input type="checkbox"/>Danke für euren Hinweis zum Datenschutz. Ist so okay für mich.
                        </a>
                        <div className="button">
                            <button className="button-margin">Ja, schick rüber!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center copyright">
                <a>© 2021 Honest &amp; Rare UG (haftungsbeschränkt)</a>
            </div>
            <Script src="/style-remove.js"/>
        </div>
    )
}