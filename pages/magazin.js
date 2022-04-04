import Image from 'next/image'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Script from 'next/script'


export default function magazin() {
  return (
    <body>
        <Nav/>
        <div class="main-container">
            <div class="title-line full-line flex">
                <h2>AKTUELL BELIEBTE BEITRÄGE</h2>
            </div>
            <div class="after">
                <div class="popular-now vertical-center h-auto">
                    <img src='/images/geschenkideen-zu-weihnachten-mit-und-ohne-alkohol.jpg'/>
                    <div>
                        <div class="popular-now__big-card">
                            <h4 class="h4-first font-30">Geschenkideen zu Weihnachten mit &amp; ohne Alkohol</h4>
                            <div class="font-13">
                                <span class="black-37">26.08.2021</span>
                                <span class="light-green">|</span>
                                <span class="black-37">von Anastasia Hartleib</span>
                            </div>
                            <p class="black-37 py-6 Nunito Serif">
                                Geschenkideen zu Weihnachten - tolle Whiskys, Gins &amp; Co zum Verschenken sowie Empfehlungen für alkoholfreie Weihnachtsgeschenke findest du hier!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="popular-now">
                    <div class="border-box flex w-100 left p-0 items-center">
                        <div class="border-box popular-now__img popular-now__margin">
                            <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                        </div>
                        <div class="border-box popular-now__img">
                            <h4 class="h4-first">Genuss-Geschenke: Rum, Likör &amp; Schnaps</h4>
                            <div class="font-13">
                                <span class="black-37">26.08.2021</span>
                                <span class="light-green">|</span>
                                <span class="black-37">von Anastasia Hartleib</span>
                            </div>
                            <div class="phone-hidden_magazin">
                                <p class="black-37 py-6 Nunito Serif">Du möchtest Rum, Likör oder hochwertige Spirituosen versc...</p>
                                <span class="light-green font-16 border-green">WEITERLESEN</span>
                            </div>
                        </div>
                    </div>
                    <div class="border-box flex w-100 left p-0 items-center">
                        <div class="border-box popular-now__img popular-now__margin">
                            <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                        </div>
                        <div class="border-box popular-now__img">
                            <h4 class="h4-first">Genuss-Geschenke: Rum, Likör &amp; Schnaps</h4>
                            <div class="font-13">
                                <span class="black-37">26.08.2021</span>
                                <span class="light-green">|</span>
                                <span class="black-37">von Anastasia Hartleib</span>
                            </div>
                            <div class="phone-hidden_magazin">
                                <p class="black-37 py-6 Nunito Serif">Du möchtest Rum, Likör oder hochwertige Spirituosen versc...</p>
                                <span class="light-green font-16 border-green">WEITERLESEN</span>
                            </div>
                        </div>
                    </div>
                    <div class="border-box flex w-100 left p-0 items-center">
                        <div class="border-box popular-now__img popular-now__margin">
                            <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                        </div>
                        <div class="border-box popular-now__img">
                            <h4 class="h4-first">Genuss-Geschenke: Rum, Likör &amp; Schnaps</h4>
                            <div class="font-13">
                                <span class="black-37">26.08.2021</span>
                                <span class="light-green">|</span>
                                <span class="black-37">von Anastasia Hartleib</span>
                            </div>
                            <div class="phone-hidden_magazin">
                                <p class="black-37 py-6 Nunito Serif">Du möchtest Rum, Likör oder hochwertige Spirituosen versc...</p>
                                <span class="light-green font-16 border-green">WEITERLESEN</span>
                            </div>
                        </div>
                    </div>
                    <div class="border-box flex w-100 left p-0 items-center">
                        <div class="border-box popular-now__img popular-now__margin">
                            <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                        </div>
                        <div class="border-box popular-now__img">
                            <h4 class="h4-first">Genuss-Geschenke: Rum, Likör &amp; Schnaps</h4>
                            <div class="font-13">
                                <span class="black-37">26.08.2021</span>
                                <span class="light-green">|</span>
                                <span class="black-37">von Anastasia Hartleib</span>
                            </div>
                            <div class="phone-hidden_magazin">
                                <p class="black-37 py-6 Nunito Serif">Du möchtest Rum, Likör oder hochwertige Spirituosen versc...</p>
                                <span class="light-green font-16 border-green">WEITERLESEN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="after items-center background-black">
            <div class="main-container-pc">
                <div class="colored-Thomas">
                    <div class="colored-Thomas__img"></div>
                    <div class="colored-Thomas__text">
                        <h4 class="h4-first colored-Thomas__text-head">Thomas Tyrell im Interview: Über die hohe Kunst der lagerfähigen Biere</h4>
                        <div class="font-13">von Anastasia Hartleib</div>
                        <p class="font-15 py-6 Nunito Serif black-37">Der deutsche Craft Beer-Pionier Thomas Tyrell im Interview über sein BrauKunstAtelier und die Kunst des Brauens von lagerfähigen Bieren - jetzt lesen!</p>
                        <span class="light-green font-16 border-green">WEITERLESEN</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-container phone-hidden_magazin">
            <div class="title-line flex items-center">
                <h2>UNSERE MEISTGELESENEN ARTIKEL</h2>
                <a class="article-button">Alle Artikel</a>
            </div>
            <div class="flex warp">
                <div class="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div class="my-5 font-13">
                        <span class="black-37">26.08.2021</span>
                        <span class="light-green">|</span>
                        <span class="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div class="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div class="my-5 font-13">
                        <span class="black-37">26.08.2021</span>
                        <span class="light-green">|</span>
                        <span class="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div class="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div class="my-5 font-13">
                        <span class="black-37">26.08.2021</span>
                        <span class="light-green">|</span>
                        <span class="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div class="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div class="my-5 font-13">
                        <span class="black-37">26.08.2021</span>
                        <span class="light-green">|</span>
                        <span class="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div class="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div class="my-5 font-13">
                        <span class="black-37">26.08.2021</span>
                        <span class="light-green">|</span>
                        <span class="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div class="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div class="my-5 font-13">
                        <span class="black-37">26.08.2021</span>
                        <span class="light-green">|</span>
                        <span class="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div class="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div class="my-5 font-13">
                        <span class="black-37">26.08.2021</span>
                        <span class="light-green">|</span>
                        <span class="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div class="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div class="my-5 font-13">
                        <span class="black-37">26.08.2021</span>
                        <span class="light-green">|</span>
                        <span class="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="after w-100 my-50 background-white">
            <div class="main-container">
                <div class="flex items-center content-center warp py-25">
                    <div class="gray-strip__word-style">REZEPTE</div>
                    <div class="gray-strip__word-style border">GOOD READS</div>
                    <div class="gray-strip__word-style border">PORTRAITS &amp; INTERVIEW</div>
                    <div class="gray-strip__word-style border">SGETRÄNKEWISSEN</div>
                    <div class="gray-strip__word-style border">EMPFEHLUNGEN</div>
                    <div class="gray-strip__word-style border">LOKALER GETRÄNKEGUIDE</div>
                </div>
            </div>
        </div>
        <div class="main-container">
            <div class="pc-hidden">
                <a>Nach Getränk filtern:</a>
                <a class="menu__target font-46 lh-14">=</a>
            </div>
            <div class="flex menu__green">
                <div>
                    <div data-swipe-threshold="100" id="o1" class="menu__green-buttons gallery_magazin">
                        <h4>NACH GETRÄNK FILTERN:</h4>
                        <a class="menu__active">ALLE</a>
                        <a>CRAFT BEER</a>
                        <a>WEIN</a>
                        <a>KAFFEE</a>
                        <a>LIMOS</a>
                        <a>GIN</a>
                        <a>WHISKY</a>
                        <a>RUM</a>
                        <a>LIKÖR</a>
                        <a>TEQUILA</a>
                    </div>
                </div>
                <div class="menu__posts">
                    <div class="article title-line last">
                        <h2  class="h2-last">REZEPTE</h2>
                        <a class="article-button">Alle Artikel</a>
                    </div>
                    <div class="w-100 relative hidden">
                        <div class="menu__posts-mobile container_magazin">
                            <div class="menu__post">
                                <div class="menu__card popular-now__img">
                                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                                </div>
                                <div class="menu__card">
                                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                                    <div class="my-5 font-13">
                                        <span class="black-37">26.08.2021</span>
                                        <span class="light-green">|</span>
                                        <span class="black-37">von Anastasia Hartleib</span>
                                    </div>
                                </div>
                            </div>
                            <div class="menu__post">
                                <div class="menu__card popular-now__img">
                                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                                </div>
                                <div class="menu__card">
                                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                                    <div class="my-5 font-13">
                                        <span class="black-37">26.08.2021</span>
                                        <span class="light-green">|</span>
                                        <span class="black-37">von Anastasia Hartleib</span>
                                    </div>
                                </div>
                            </div>
                            <div class="menu__post">
                                <div class="menu__card popular-now__img">
                                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                                </div>
                                <div class="menu__card">
                                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                                    <div class="my-5 font-13">
                                        <span class="black-37">26.08.2021</span>
                                        <span class="light-green">|</span>
                                        <span class="black-37">von Anastasia Hartleib</span>
                                    </div>
                                </div>
                            </div>
                            <div class="menu__post">
                                <div class="menu__card popular-now__img">
                                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                                </div>
                                <div class="menu__card">
                                    <h4 class="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                                    <div class="my-5 font-13">
                                        <span class="black-37">26.08.2021</span>
                                        <span class="light-green">|</span>
                                        <span class="black-37">von Anastasia Hartleib</span>
                                    </div>
                                </div>
                            </div>
                            <a class="article-button-mobile">Alle Artikel</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <Script type="text/javascript" src="/magazin-js.js"/>
        <Script type="text/javascript" src="/example/Script2_magazin.js"/>
        <Script type="text/javascript" src="/magazin-container.js"/>
    </body>
  )
}