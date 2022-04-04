import Image from 'next/image'
import Script from 'next/script'


export default function Footer() {
    return (
        <div class="footer">
            <div class="text-center footer__logo"><img src="/images/top-logo.png"/></div>
            <div class="flex footer__columns">
                <div class="flex flex-column footer__list">
                    <a class="footer__menu-name">BELIEBTE SEITEN </a>
                    <a class="footer__menu-content">Gin </a>
                    <a class="footer__menu-content">Craft Beer </a>
                    <a class="footer__menu-content">Spirituosen </a>
                    <a class="footer__menu-content">Gin Rezepte </a>
                    <a class="footer__menu-content">Angebot für Firmenkunden </a>
                    <a class="footer__menu-content">Highlights</a>
                    <a class="footer__menu-content">Magazin</a>
                    <a class="footer__menu-content">Verkaufen auf Honest &amp; Rare</a>
                    </div>
                <div class="flex flex-column footer__list">
                    <a class="footer__menu-name">WISSENSWERTES</a>
                    <a class="footer__menu-content">Alle Marken </a>
                    <a class="footer__menu-content">Alle Verkäufer Shops </a>
                    <a class="footer__menu-content">Unsere Getränkekriterien </a>
                    <a class="footer__menu-content">Unsere Mission</a>
                    <a class="footer__menu-content">So funktioniert's </a>
                    <a class="footer__menu-content">Gutschein kaufen</a>
                    <a class="footer__menu-content">Affiliate</a>
                </div>
                <div class="flex flex-column footer__list">
                    <a class="footer__menu-name">SERVICES &amp; INFOS </a>
                    <a class="footer__menu-content">Über uns </a>
                    <a class="footer__menu-content">Häufige Fragen </a>
                    <a class="footer__menu-content">Kontakt </a>
                    <a class="footer__menu-content">Lieferung und Versand </a>
                    <a class="footer__menu-content">Impressum </a>
                    <a class="footer__menu-content">AGB </a>
                    <a class="footer__menu-content">Datenschutz</a>
                    </div>
                <div class="flex flex-column footer__list">
                    <a class="footer__menu-name">ZAHLUNGSARTEN</a>
                    <div class="footer__menu-content">
                        <img class="footer__image3rd" src="/images/like.png"/>
                        <img src="/images/like.png"/>
                        <img src="/images/like.png"/>
                        <img src="/images/like.png"/>
                    </div>
                    <a class="footer__menu-name">Lass uns in Kontakt bleiben</a>
                    <div class="footer__menu-content">
                        <img class="footer__image3rd" src="/images/like.png"/>
                        <img src="/images/like.png"/>
                        <img src="/images/like.png"/>
                    </div>
                </div>
                <div class="flex flex-column footer__list-last">
                    <a class="footer__menu-name">SERVICETELEFON</a> 
                    <a class="phone-number">	030 99 00 47 41 </a>
                    <a class="footer__menu-content">Täglich von 10-22 Uhr </a>
                    <div class="flex flex-column footer__email">
                        <a class="footer__menu-name">GENUSSLETTER</a> 
                            <input class="footer__email-margin" placeholder="E-Mail"/> 
                        <a class="footer__menu-content">
                            <input type="checkbox"/>Danke für euren Hinweis zum Datenschutz. Ist so okay für mich.
                        </a>
                        <div class="button">
                            <button class="button-margin">Ja, schick rüber!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center copyright">
                <a>© 2021 Honest &amp; Rare UG (haftungsbeschränkt)</a>
            </div>
            <Script src="/style-remove.js"/>
        </div>
    )
}