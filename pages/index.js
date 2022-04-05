import Script from 'next/script'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'


export default function Home() {
  return (
        <body>
            <Nav/>
            <div class="banner">
                <div class="main-container">
                        <div class="banner__text">
                            <p class="banner__beverages">TRINKT MEER GIN! FÜßE IM SAND &amp; GENUSS IM GLAS</p>
                            <p class="banner__manufacture">MANUFAKTUR GIN - EIN GUTER FANG</p>
                            <a class="banner__button">JETZT BESTELLEN</a>
                        </div>
                        <div class="banner__image after">
                            <img width="924" height="1100" src='/images/meer-gin-maritim.png'/>
                    </div>
                </div>
            </div>
            <div class="main-container">
                <div class="hidden relative w-100">
                    <div data-swipe-threshold="100" id="o1" class="gallery relative flex w-3600">
                        <div class="gallery__block">
                            <div class="gallery__first-half">
                                <div class="gallery__market-name"><div>HONEST&amp;RARE</div> <div class="g_mar">VERSPRECHEN</div></div>
                                <div class="gallery__element-name">№1</div>
                            </div>
                            <div class="gallery__line"></div>
                            <div>
                                <p class="gallery__second-top">100% UNABHÄNGIGER MARKTPLATZ</p>
                                <p class="gallery__second-bottom">Wir bringen für dich unabhängige Hersteller &amp; Händler auf einer Seite zusammen</p>
                            </div>
                        </div>
                        <div className="gallery__block">
                            <div className="gallery__first-half">
                                <div className="gallery__market-name"><div>HONEST&amp;RARE</div> <div className="g_mar">VERSPRECHEN</div></div>
                                <div className="gallery__element-name">№2</div>
                            </div>
                            <div className="gallery__line"></div>
                            <div>
                                <p className="gallery__second-top">100% UNABHÄNGIGER MARKTPLATZ</p>
                                <p className="gallery__second-bottom">Wir bringen für dich unabhängige Hersteller &amp; Händler auf einer Seite zusammen</p>
                            </div>
                        </div>
                        <div className="gallery__block">
                            <div className="gallery__first-half">
                                <div className="gallery__market-name"><div>HONEST&amp;RARE</div> <div class="g_mar">VERSPRECHEN</div></div>
                                <div className="gallery__element-name">№3</div>
                            </div>
                            <div className="gallery__line"></div>
                            <div>
                                <p className="gallery__second-top">100% UNABHÄNGIGER MARKTPLATZ</p>
                                <p className="gallery__second-bottom">Wir bringen für dich unabhängige Hersteller &amp; Händler auf einer Seite zusammen</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div id="o2" className="gallery__arrow">
                        &gt;
                    </div>
                </div>
            </div>
            <div className="special-container">
                <div className="after spirit-grid">
                    <div className="spirit-picture">
                        <div className="relative">
                            <img src='/images/spirituosen.png'/>
                            <div className="absolute spirit-name">
                                Luft
                            </div>
                        </div> 
                    </div>
                    <div className="spirit-picture"><img src='/images/spirituosen.png'/></div>
                    <div className="spirit-picture"><img src='/images/spirituosen.png'/></div>
                    <div className="spirit-picture"><img src='/images/spirituosen.png'/></div>
                    <div className="phone-hidden"><img src='/images/spirituosen.png'/></div>
                    <div className="spirit-picture"><img src='/images/spirituosen.png'/></div>
                    <div className="spirit-picture"><img src='/images/spirituosen.png'/></div>
                    <div className="spirit-picture"><img src='/images/spirituosen.png'/></div>
                    <div className="spirit-picture"><img src='/images/spirituosen.png'/></div>
                </div>
                <p className="special__beverage">HONEST &amp; RARE - DEIN MARKTPLATZ FÜR BESONDERE GETRÄNKE</p>
                <p className="special__beverage-stable">Von Bier und Gin bis hin zu Limos, alkoholfreien Spirituosen und richtig gutem Instant Kaffee</p>
                <div className="after product-grid">
                    <div className="product-examples-purple">
                        <div class="left examples-left">
                            <div className="product-head">Alkoholfreier Gin</div>
                            <div className="product-base">Bekannt aus der Höhle der Löwen: Laori Juniper No 1</div>
                            <div className="product-type">Gin-Geschmack, 0% Alkohol</div>
                            <div className="pt-6">
                                <a className="font-14 Nunito">0,5 Liter Flasche</a>
                                <a className="pl-25">€</a>
                                <a className="product-price">24,90</a>
                            </div>
                            <div className="product-button">
                                <div className="mt-17 ml-20">
                                    <a>NEHM ICH MIT</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-examples-bottle">
                            <img src='/images/Laori-Juniper-Gin-Höhle-der-Löwen.png'/>
                        </div>
                    </div>
                    <div className="product-examples-green">
                        <div className="left examples-left">
                            <div className="product-head">Oh, ein Kräuterbier !</div>
                            <div className="product-base">Das offiziell erste Jägermeisterbier der Welt</div>
                            <div className="product-type">Kräftig und kräuterig</div>
                            <div className="pt-6">
                                <a className="font-14 Nunito">0,5 Liter Flasche</a>
                                <a className="pl-25">€</a>
                                <a className="product-price">24,90</a>
                            </div>
                            <div className="product-button">
                                <div className="mt-17 ml-20">
                                    <a>NEHM ICH MIT</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-examples-bottle">
                            <img src='/images/jägermeister-bockbier_hertl.png'/>
                        </div>
                    </div>
                </div>
                <div class="mt-19 mb-45">
                    <div class="text-center font-36 ls-2">DEIN TOR ZU VERBORGENEN GETRÄNKESCHÄTZEN</div>
                    <div class="text-center font-18 pt-7 Nunito">Wir entdecken laufend neue Hidden Heroes für dich - Woche für Woche</div>
                </div>
                <div class="w-100 after">
                    <div class="mass-bottle">
                        <div class="inlogo bottles-purple">
                            <div><img src='/images/smutje-kokosnuss-likoer-rum.png'/></div>
                            <div class="bottles-purple__text">LOUIE LOUIE</div>
                            <div class="text-center">Louie Louie Silvester-Paket rosé (6x Roséwein + 6x Rosésekt +...</div>
                            <div class="card-price-font text-center">€ <span class="green-price">20,00</span></div>
                            <div class="button"><button>In meinen Getränkekorb</button></div>
                        </div>
                        <div class="inlogo bottles-purple">
                            <div><img src='/images/smutje-kokosnuss-likoer-rum.png'/></div>
                            <div class="bottles-purple__text">LOUIE LOUIE</div>
                            <div class="text-center">Louie Louie Silvester-Paket rosé (6x Roséwein + 6x Rosésekt +...</div>
                            <div class="card-price-font text-center">€ <span class="green-price">20,00</span></div>
                            <div class="button"><button>In meinen Getränkekorb</button></div>
                        </div>
                        <div class="inlogo bottles-purple">
                            <div><img src='/images/smutje-kokosnuss-likoer-rum.png'/></div>
                            <div class="bottles-purple__text">LOUIE LOUIE</div>
                            <div class="text-center">Louie Louie Silvester-Paket rosé (6x Roséwein + 6x Rosésekt +...</div>
                            <div class="card-price-font text-center">€ <span class="green-price">20,00</span></div>
                            <div class="button"><button>In meinen Getränkekorb</button></div>
                        </div>
                        <div class="inlogo bottles-purple">
                            <div><img src='/images/smutje-kokosnuss-likoer-rum.png'/></div>
                            <div class="bottles-purple__text">LOUIE LOUIE</div>
                            <div class="text-center">Louie Louie Silvester-Paket rosé (6x Roséwein + 6x Rosésekt +...</div>
                            <div class="card-price-font text-center">€ <span class="green-price">20,00</span></div>
                            <div class="button"><button>In meinen Getränkekorb</button></div>
                        </div>
                    </div>
                    <div class="one-bottle">
                        <div class="inner-one-bottle">
                            <div><img src='/images/smutje-kokosnuss-likoer-rum.png'/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-purple">
                <div class="main-container relative">
                    <div class="banner-purple-image">
                        <img src='/images/hibiskus-likör_freytag.png'/>
                    </div>
                    <div class="purple-text">
                        <div class="w-98 mx-15 pt-50">
                            <div class="purple-flower">FLOWER POWER PUR</div>
                            <div class="purple-slanted">Fruchtig-beerig</div>
                            <div class="golden-color">PUR EIN GENUSS ODER ALS DRINK MIT TONIC &amp; EIS</div>
                            <div class="font-14 Nunito">Abgerundet mit Muscovado-Zucker und Vanille aus Madagascar</div>
                            0,5l <span class="pl-25">für €</span> <span class="font-28 Slanted">23,00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-container">
                <div class="after exceptional">
                    <div class="relative">
                        <div class="absolute exceptional-text">
                            <div class="font-22">SCHENK DIR WAS BESONDERES EIN!</div>
                            <div class="mb-30">Keine Lust mehr auf Standard! So geht es uns und sicherlich auch dir, wenn du hier her gekommen bist, um nach besonderen Getränken online zu stöbern. Du bist ungelogen im Paradies angekommen, wenn du auf der Suche nach Getränken bist, die es nicht überall zu kaufen gibt.</div>
                            <div>
                                <a class="exceptional-button">LERN UNS NOCH BESSER KENNEN</a>
                            </div>
                        </div>
                        <div class="signature">
                            <img src='/images/team-gruender_honest-rare.png'/>
                        </div>
                    </div>
                    <div class="signature">
                        <div>ALEKSANDR BOGDANOV, GRÜNDER</div>
                        <div>YASCHA ROSHANI, GRÜNDER</div>
                    </div>
                </div>
                <div class="after instagram">
                    <div class="instagram-header">
                        <p class="font-36 m-0">Flüssig im Thema bleiben?</p>
                        <p class="m-0 pt-10 lh-18">Abonnier unseren Genussletter oder folge uns auf Instagram.</p>
                    </div>
                    <div class="w-100">
                        <div class="E-mail-field">
                            <div class="notebook"><img src='../images/newsletter-promo.png' width="664" height="474"/></div>
                            <div class="E-mail-text">
                                <p>Regelmäßig neue Hidden Heroes aus den besten Manufakturen der Welt entdecken</p>
                                <p>Saisonale Getränkethemen &amp; Aktionen mit kuratierten Empfehlungen und Angeboten</p>
                                <p>Allerlei handfestes Expertenwissen rund ums Thema anspruchsvolle Trinkkultur</p>
                            </div>
                            <div class="E-mail-box">
                                <input class="mb-10 py-7 px-10" placeholder="E-Mail"/> 
                                <a><input type="checkbox"/>Danke für euren Hinweis zum Datenschutz. Ist so okay für mich.</a>
                                <div class="button"><button>Ja, schick rüber!</button></div>
                            </div>
                        </div>
                        <div class="E-mail-image after">
                            <div class="instagram-images">
                                <div class="instagram-carousel">
                                    <div class="container image-carousel">
                                        <img src='/images/getraenke-chillout.jpg' width="148" height="148"/>
                                        <img src='/images/getraenke-chillout.jpg' width="148" height="148"/>
                                        <img src='/images/getraenke-chillout.jpg' width="148" height="148"/>
                                        <img src='/images/getraenke-chillout.jpg' width="148" height="148"/>
                                        <img src='/images/getraenke-chillout.jpg' width="148" height="148"/>
                                        <img src='/images/getraenke-chillout.jpg' width="148" height="148"/>
                                        <img src='/images/getraenke-chillout.jpg' width="148" height="148"/>
                                        <img src='/images/getraenke-chillout.jpg' width="148" height="148"/>
                                        <img src='/images/getraenke-chillout.jpg' width="148" height="148"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="special-container">
                <div class="after background-slash">
                    <div class="left-box">
                        <div class="green-name">WENN WIR BERATUNG SAGEN, MEINEN WIR AUCH BERATUNG.</div>
                        <div class="white w-80">Wobei wir uns auch auf deinen Anruf freuen, wenn du einfach nur ein bisschen mit uns fachsimpeln magst.</div>
                    </div>
                    <div class="right-box">
                        <a class="green-phone">030 99 00 47 41</a>
                        <p class="white">7 Tage die Woche von 10-22 Uhr</p>
                    </div>
                </div>
            </div>
            <div class="main-container">
                <div class="py-80">
                    <h2 class="text-center font-34 mt-20 mb-10 lspacing-3">
                        DIE BESTEN BIERE, GINS, WEINE &amp; LIMOS ENTDECKEN &amp; KAUFEN
                    </h2>
                    <div class="cc-2">
                        <p class="m-0">
                            Keine Lust mehr auf Standard! So geht es uns und sicherlich auch dir, wenn du auf unsere Seite gekommen bist, um nach Getränken online zu stöbern. Und wenn du auf der Suche nach besonderen Getränken bist, die es nicht überall zu kaufen gibt, dann bist du ungelogen im Paradies angekommen.
                        </p>
                        <h3>Seltene und besondere Getränke online kaufen</h3>
                        <p>Nein, gar nicht weil wir uns selbst so toll finden – wir kümmern uns ja nur um dem Marktplatz selbst, damit du überhaupt Getränke online bestellen kannst. Zum Paradies wird diese Seite durch die unglaublich vielen fantastischen, kreativen und experimentierfreudigen Getränkehersteller. Dank dieser gibt es all diese außergewöhnlichen Getränke, die wir euch hier anbieten dürfen.</p>
                        <p>Diese leckeren und regional verankerten Getränke sind meist irgendwie irgendwo vereinzelt erhältlich, kriegen aber überregional nicht die Aufmerksamkeit, die sie verdienen. Genau das ist der Grund, warum wir unseren Marktplatz ins Leben gerufen haben: Damit du und alle, die entdeckungsfreudig und auf der Suche nach neuen Geschmacksabenteuern sind, diese ganzen besonderen und ausgefallene Getränke von außergewöhnlichen Herstellen online bestellen können.</p>
                    </div>
                    <h2>
                        Von Bier und Gin bis hin zu Kaffee und Limonade
                    </h2>
                    <div class="cc-2">
                        <p class="m-0">
                            Unser Ansatz ist etwas anders als der von anderen Getränke Online Shops. Wie du oben gelesen hast, sind wir ein Online-Marktplatz – das heißt, dass wir selbst kein Lager haben. Wir geben kleineren Getränkeherstellern lediglich eine Art Bühne, um online mehr Sichtbarkeit und Reichweite für ihre Manufaktur und ihre Getränke zu bekommen. Alle Hersteller bei uns haben daher auch einen eigenen Getränke Online Shop.
                        </p>
                        <p>
                            Marktplatz heißt außerdem, dass dir deine Getränke direkt von den Herstellern zugeschickt werden, wenn du bei uns Getränke online bestellst. Das heißt, deine Bestellung kommt direkt aus der Brauerei, Rösterei, vom Winzer oder aus der Destillerie. Frischer und ökologischer kann man keine Getränke kaufen! Schließlich wissen die Hersteller selbst am besten, wie sie ihre Produkte zu lagern haben. Und ökologisch ist es eben, weil es keine Zwischenlogistik gibt. Dein Bier, Wein, Limo oder Spirituosen wie etwa Gin gehen direkt vom Hersteller zu dir nach Hause.
                        </p>
                        <p>
                            Neben dem Marktplatzansatz, der einige Vorteile beim Getränke online bestellen gegenüber normalen Shops bringt, sind wir nicht auf eine bestimmte Getränkekategorie spezialisiert. Wir verstehen uns als Online-Marktplatz für Getränke im Allgemeinen und haben daher Getränkekriterien festgelegt, die alle Produkte in unserem Online Shop erfüllen müssen. Dank dieser Ausrichtung kannst du bei uns allerlei verschiedene Getränke online bestellen.
                        </p>
                        <p>
                            Mit Craft Beer, Spirituosen, Wein (Rotwein, Weißwein, Rosé und Sekt), Kaffee und Limonaden bieten wir dir sowohl alkoholische als auch alkoholfreie Alternativen wie etwa den Laori Gin ohne Alkohol. Wir freuen uns riesig, dass unser Ansatz gut ankommt. Von vielen Kund*innen hören wir, dass sie natürlich nicht nur eine Art von Getränken kaufen und trinken und es daher klasse finden, sowohl bei Bier als auch zum Beispiel bei Wein und Kaffee kleinere Anbieter zu unterstützen und beste Qualität zu günstigen Preisen zu bestellen.
                        </p>
                    </div>
                    <h2>Getränke online kaufen auf das nächste Level bringen</h2>
                    <div class="cc-2">
                        <p class="m-0">
                            Qualität in allen Belangen ist das oberste Gebot für unseren Online-Getränkemarkt. Tagtäglich arbeiten wir vor allem an zwei Dingen, um euch das Getränke online bestellen so angenehm und spaßig wie möglich zu machen: ein außergewöhnliches und großes Getränkesortiment und das beste Einkaufserlebnis beim Entdecken und Kaufen von Getränken.
                        </p>
                        <p>
                            Beides zusammen genommen ist unser Anspruch, dass du bei uns unkompliziert außergewöhnliche Getränke finden und bestellen kannst. Kein Schleppen, kein Warten zum Bezahlen und vor allem keine Standardgetränke, die du in jedem Supermarkt bekommst. Ob am Schreibtisch, beim Bahn fahren oder beim Abhängen auf der Couch – wann immer du Lust auf besondere Getränke hast, sollst du bei uns fündig werden und ein unverwechselbares Shoppingerlebnis haben.
                        </p>
                        <p>
                            Als offener Marktplatz erweitern wir ständig unser Angebot bei Bier, Spirituosen, Gin , Limonaden, Kaffee und Wein und achten trotz Handarbeit und Small Batch darauf, Getränke zu günstigen Preisen anzubieten. Wir sind selbst Getränkefanatiker, Hobby-Bierbrauer, Likörmacher, Gin-Tonic Fans und Hobby-Kaffeeröster. Unsere Neugier treibt uns an, die Getränkelandschaft zu erkunden und dir die besten Getränke online zugänglich zu machen. Fast alle Verkäufer in unserem Getränke Online Shop verkaufen ab einem gewissen Bestellwert außerdem versandkostenfrei.
                        </p>
                        <p>
                            Damit du zu jedem Getränk schnell einen guten Überblick hast, findest du bei uns eine kurze und knappe Zusammenfassung über den Geschmack und die wichtigsten Eigenschaften des Produkts – etwa über die Herkunft, den Stil und den Hersteller. Außerdem verbessern wir ständig unsere Navigation, Filter- und Suchfunktionen, damit du noch schneller und besser genau die Getränke findest, auf die du Lust hast. Mit unserem Craft Magazin halten wir dich außerdem immer auf dem Laufenden über neue und spannende Getränketrends. Außerdem kommen in unserem Magazin die ganzen Getränkehersteller zu Wort, die diesen Online-Getränkemarkt überhaupt erst möglich machen – klick dich gerne rein und abonniere unseren Newsletter.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
            <Script type="text/javascript" src="/main-page-js.js"/>
            <Script type="text/javascript" src="/swiped-events.min.js"/>
            <Script type="text/javascript" src="/example/Script2.js"/>
        </body>
    )
}