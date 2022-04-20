import Image from 'next/image'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Script from 'next/script'
import { useEffect } from 'react'

export default function magazin() {
    useEffect(()=>{
        // button drag images
        let checker = 0;
        document.querySelector('.menu__target').addEventListener('click', move1);
        var o1 = document.getElementById("o1");
        function move1() {
            o1.classList.remove('gallery_magazin', 'gallery-2_magazin');
            if(checker == 0){
                o1.classList.add('gallery-2_magazin');
                checker = 1;
            }
            else if(checker == 1){
                o1.classList.add('gallery_magazin');
                checker = 0;
            }
        }

        // drag images PC
        const _C = document.querySelector('.container_magazin'), 
            N = _C.children.length;
        let i = 0, x0 = null, locked = false, w;
        function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };
        function lock(e) {
          x0 = unify(e).clientX;
        	_C.classList.toggle('smooth_magazin', !(locked = true))
        };
        function drag(e) {
        	e.preventDefault();
        
        	if(locked) 		
        		_C.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)
        };
        function move(e) {
          if(locked) {
            let dx = unify(e).clientX - x0, s = Math.sign(dx), 
        				f = +(s*dx/w).toFixed(2);
            if((i > 0 || s < 0) && (i < N - 1 || s > 0)) {
        			_C.style.setProperty('--i', i -= s);
        			f = 1 - f
        		}
            
            _C.style.setProperty('--tx', '0px');
        		_C.style.setProperty('--f', f);
            _C.classList.toggle('smooth_magazin', !(locked = false));
            x0 = null
          }
        };
        function size() { w = window.innerWidth };
        size();
        if (N!=null){
            _C.style.setProperty('--n', N);
        }
        _C.addEventListener('resize', size, false);
        _C.addEventListener('mousedown', lock, false);
        _C.addEventListener('touchstart', lock, false);
        _C.addEventListener('mousemove', drag, false);
        _C.addEventListener('touchmove', drag, false);
        _C.addEventListener('mouseup', move, false);
        _C.addEventListener('touchend', move, false);
    },[])
  return (
    <div>
        <Nav/>
        <div className="main-container">
            <div className="title-line full-line flex">
                <h2>AKTUELL BELIEBTE BEITRÄGE</h2>
            </div>
            <div className="after">
                <div className="popular-now vertical-center h-auto">
                    <img src='/images/geschenkideen-zu-weihnachten-mit-und-ohne-alkohol.jpg'/>
                    <div>
                        <div className="popular-now__big-card">
                            <h4 className="h4-first font-30">Geschenkideen zu Weihnachten mit &amp; ohne Alkohol</h4>
                            <div className="font-13">
                                <span className="black-37">26.08.2021</span>
                                <span className="light-green">|</span>
                                <span className="black-37">von Anastasia Hartleib</span>
                            </div>
                            <p className="black-37 py-6 Nunito Serif">
                                Geschenkideen zu Weihnachten - tolle Whiskys, Gins &amp; Co zum Verschenken sowie Empfehlungen für alkoholfreie Weihnachtsgeschenke findest du hier!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="popular-now">
                    <div className="border-box flex w-100 left p-0 items-center">
                        <div className="border-box popular-now__img popular-now__margin">
                            <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                        </div>
                        <div className="border-box popular-now__img">
                            <h4 className="h4-first">Genuss-Geschenke: Rum, Likör &amp; Schnaps</h4>
                            <div className="font-13">
                                <span className="black-37">26.08.2021</span>
                                <span className="light-green">|</span>
                                <span className="black-37">von Anastasia Hartleib</span>
                            </div>
                            <div className="phone-hidden_magazin">
                                <p className="black-37 py-6 Nunito Serif">Du möchtest Rum, Likör oder hochwertige Spirituosen versc...</p>
                                <span className="light-green font-16 border-green">WEITERLESEN</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-box flex w-100 left p-0 items-center">
                        <div className="border-box popular-now__img popular-now__margin">
                            <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                        </div>
                        <div className="border-box popular-now__img">
                            <h4 className="h4-first">Genuss-Geschenke: Rum, Likör &amp; Schnaps</h4>
                            <div className="font-13">
                                <span className="black-37">26.08.2021</span>
                                <span className="light-green">|</span>
                                <span className="black-37">von Anastasia Hartleib</span>
                            </div>
                            <div className="phone-hidden_magazin">
                                <p className="black-37 py-6 Nunito Serif">Du möchtest Rum, Likör oder hochwertige Spirituosen versc...</p>
                                <span className="light-green font-16 border-green">WEITERLESEN</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-box flex w-100 left p-0 items-center">
                        <div className="border-box popular-now__img popular-now__margin">
                            <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                        </div>
                        <div className="border-box popular-now__img">
                            <h4 className="h4-first">Genuss-Geschenke: Rum, Likör &amp; Schnaps</h4>
                            <div className="font-13">
                                <span className="black-37">26.08.2021</span>
                                <span className="light-green">|</span>
                                <span className="black-37">von Anastasia Hartleib</span>
                            </div>
                            <div className="phone-hidden_magazin">
                                <p className="black-37 py-6 Nunito Serif">Du möchtest Rum, Likör oder hochwertige Spirituosen versc...</p>
                                <span className="light-green font-16 border-green">WEITERLESEN</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-box flex w-100 left p-0 items-center">
                        <div className="border-box popular-now__img popular-now__margin">
                            <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                        </div>
                        <div className="border-box popular-now__img">
                            <h4 className="h4-first">Genuss-Geschenke: Rum, Likör &amp; Schnaps</h4>
                            <div className="font-13">
                                <span className="black-37">26.08.2021</span>
                                <span className="light-green">|</span>
                                <span className="black-37">von Anastasia Hartleib</span>
                            </div>
                            <div className="phone-hidden_magazin">
                                <p className="black-37 py-6 Nunito Serif">Du möchtest Rum, Likör oder hochwertige Spirituosen versc...</p>
                                <span className="light-green font-16 border-green">WEITERLESEN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="after items-center background-black">
            <div className="main-container-pc">
                <div className="colored-Thomas">
                    <div className="colored-Thomas__img"></div>
                    <div className="colored-Thomas__text">
                        <h4 className="h4-first colored-Thomas__text-head">Thomas Tyrell im Interview: Über die hohe Kunst der lagerfähigen Biere</h4>
                        <div className="font-13">von Anastasia Hartleib</div>
                        <p className="font-15 py-6 Nunito Serif black-37">Der deutsche Craft Beer-Pionier Thomas Tyrell im Interview über sein BrauKunstAtelier und die Kunst des Brauens von lagerfähigen Bieren - jetzt lesen!</p>
                        <span className="light-green font-16 border-green">WEITERLESEN</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-container phone-hidden_magazin">
            <div className="title-line flex items-center">
                <h2>UNSERE MEISTGELESENEN ARTIKEL</h2>
                <a className="article-button">Alle Artikel</a>
            </div>
            <div className="flex warp">
                <div className="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div className="my-5 font-13">
                        <span className="black-37">26.08.2021</span>
                        <span className="light-green">|</span>
                        <span className="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div className="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div className="my-5 font-13">
                        <span className="black-37">26.08.2021</span>
                        <span className="light-green">|</span>
                        <span className="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div className="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div className="my-5 font-13">
                        <span className="black-37">26.08.2021</span>
                        <span className="light-green">|</span>
                        <span className="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div className="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div className="my-5 font-13">
                        <span className="black-37">26.08.2021</span>
                        <span className="light-green">|</span>
                        <span className="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div className="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div className="my-5 font-13">
                        <span className="black-37">26.08.2021</span>
                        <span className="light-green">|</span>
                        <span className="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div className="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div className="my-5 font-13">
                        <span className="black-37">26.08.2021</span>
                        <span className="light-green">|</span>
                        <span className="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div className="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div className="my-5 font-13">
                        <span className="black-37">26.08.2021</span>
                        <span className="light-green">|</span>
                        <span className="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
                <div className="grid">
                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                    <div className="my-5 font-13">
                        <span className="black-37">26.08.2021</span>
                        <span className="light-green">|</span>
                        <span className="black-37">von Anastasia Hartleib</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="after w-100 my-50 background-white">
            <div className="main-container">
                <div className="flex items-center content-center warp py-25">
                    <div className="gray-strip__word-style">REZEPTE</div>
                    <div className="gray-strip__word-style border">GOOD READS</div>
                    <div className="gray-strip__word-style border">PORTRAITS &amp; INTERVIEW</div>
                    <div className="gray-strip__word-style border">SGETRÄNKEWISSEN</div>
                    <div className="gray-strip__word-style border">EMPFEHLUNGEN</div>
                    <div className="gray-strip__word-style border">LOKALER GETRÄNKEGUIDE</div>
                </div>
            </div>
        </div>
        <div className="main-container">
            <div className="pc-hidden">
                <a>Nach Getränk filtern:</a>
                <a className="menu__target font-46 lh-14">=</a>
            </div>
            <div className="flex menu__green">
                <div>
                    <div data-swipe-threshold="100" id="o1" className="menu__green-buttons gallery_magazin">
                        <h4>NACH GETRÄNK FILTERN:</h4>
                        <a className="menu__active">ALLE</a>
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
                <div className="menu__posts">
                    <div className="article title-line last">
                        <h2  className="h2-last">REZEPTE</h2>
                        <a className="article-button">Alle Artikel</a>
                    </div>
                    <div className="w-100 relative hidden">
                        <div className="menu__posts-mobile container_magazin">
                            <div className="menu__post">
                                <div className="menu__card popular-now__img">
                                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                                </div>
                                <div className="menu__card">
                                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                                    <div className="my-5 font-13">
                                        <span className="black-37">26.08.2021</span>
                                        <span className="light-green">|</span>
                                        <span className="black-37">von Anastasia Hartleib</span>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__post">
                                <div className="menu__card popular-now__img">
                                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                                </div>
                                <div className="menu__card">
                                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                                    <div className="my-5 font-13">
                                        <span className="black-37">26.08.2021</span>
                                        <span className="light-green">|</span>
                                        <span className="black-37">von Anastasia Hartleib</span>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__post">
                                <div className="menu__card popular-now__img">
                                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                                </div>
                                <div className="menu__card">
                                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                                    <div className="my-5 font-13">
                                        <span className="black-37">26.08.2021</span>
                                        <span className="light-green">|</span>
                                        <span className="black-37">von Anastasia Hartleib</span>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__post">
                                <div className="menu__card popular-now__img">
                                    <img src='/images/schnaps-geschenke-titelbild.jpg'/>
                                </div>
                                <div className="menu__card">
                                    <h4 className="h4-first">Die 10 besten Gins für den Sommer 2021</h4>
                                    <div className="my-5 font-13">
                                        <span className="black-37">26.08.2021</span>
                                        <span className="light-green">|</span>
                                        <span className="black-37">von Anastasia Hartleib</span>
                                    </div>
                                </div>
                            </div>
                            <a className="article-button-mobile">Alle Artikel</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}