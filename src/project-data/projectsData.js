import React, { Fragment } from 'react'
import projectPreviews from './projectPreviews'
import galleryData from './galleryData'

const projectsData = [];

// mu.la
projectsData[0] = {
    title: {
        pl: 'mu.la',
        en: 'mu.la'
    },
    route: 'mu-la',
    previewData: {
        caption: {
            pl: 'Praca Licencjacka, Projektowanie Produktu',
            en: 'Bachelor’s Thesis, Product Design',
        },
        img: projectPreviews.mula,
    },
    contentData: {
        coverImg: galleryData.mula[0],
        year: '2018',
        subtitle: {
            pl: 'Modułowy instrument muzyczny wspomagający rozwój psychoruchowy dziecka',
            en: 'Modular music instrument that supports psychosomatic development of children from the age of 6'
        },
        paragraphs: {
            pl: [
                {
                    title: 'OPIS',
                    content: <Fragment><p><strong>mu.la</strong> czyli muzyczne laboratorium pozwalające na zaangażowanie, oprócz słuchu, najważniejszego w przypadku muzyki zmysłu, także zmysłów wzroku i dotyku. Czy zastanawialiście się kiedyś jak wygląda dźwięk, jaki jest w dotyku? Albo jak jest zbudowany instrument? Z <strong>mu.lą</strong> dzieci mogą zaobserwować powstawanie fal dźwiękowych, zbadać właściwości różnych materiałów wydających dźwięki oraz tworzyć własne wersje instrumentu.</p><p>Podczas zabawy kategoria błędnego doświadczenia nie istnieje – każde doświadczenie, nawet to zakończone niepowodzeniem jest wartościowe. Umożliwia to rozwój myślenia wyjętego ze schematów oraz angażuje wyobraźnię i całą pomysłowość dziecka.</p></Fragment>,
                },
                {
                    title: 'MOJA ROLA',
                    content: 'Projektowanie Produktu, Praca Licencjacka'
                },
                {
                    title: 'WIĘCEJ INFO',
                    content: 'Praca licencjacka realizowana w Pracowni Projektowania Narzędzi i Środowiska Pracy na ASP we Wrocławiu'
                },
            ],
            en: [
                {
                    title: 'ABOUT',
                    content: <Fragment><p><strong>mu.la</strong> or a musical laboratory allowing to involve, in addition to hearing - the most important sense in the case of the music - also the senses of sight and touch. Have you ever wondered what the sound looks like, what is it like to feel it? Or how is the instrument built? With <strong>mu.la</strong> children can observe sound waves, examine the properties of various sound-emitting materials and create their own versions of the instrument.</p><p>During play, every experience, even the one that ended in failure, is valuable. This enables the development of thinking out of the box and engages the imagination and the entire ingenuity of the child.</p></Fragment>,
                },
                {
                    title: 'MY ROLE',
                    content: 'Product Design, Bachelor’s Thesis Project'
                },
                {
                    title: 'MORE INFO',
                    content: 'Bachelor’s Thesis Project accomplishment at the Ergonomics Studio at the Academy of Fine Arts in Wrocław.'
                },
            ]

        },
        gallery: [
            [
                galleryData.mula[1]
            ],
            [
                galleryData.mula[2], galleryData.mula[3]
            ],
            [
                galleryData.mula[4]
            ],
            [
                galleryData.mula[5]
            ],
            [
                galleryData.mula[6], galleryData.mula[7]
            ],
            [
                galleryData.mula[8]
            ],

        ]
    },
}

// soap
projectsData[1] = {
    title: {
        en: 'The Soap Company',
        pl: 'The Soap Company',
    },
    route: 'soap-company',
    previewData: {
        caption: {
            en: 'Graphic Design, Logo Design',
            pl: 'Projektowanie Graficzne, Projekt Logo',
        },
        img: projectPreviews.soapCompany,
    },
    contentData: {
        coverImg: galleryData.soap[0],
        year: '2019',
        subtitle: {
            pl: 'Projekt opakownań oraz logo dla manufaktury ręcznie wytwarzającej mydła',
            en: 'Packaging design and logo for the hand-made soap factory'
        },
        
        paragraphs: {
            pl: [
                {
                    title: 'OPIS',
                    content: <p>Projekt logo oraz identyfikacji wizualnej dla fikcyjnej marki ręcznie produkującej mydła - The Soap Company.</p>
                },
                {
                    title: 'MOJA ROLA',
                    content: <p>Projektowanie Graficzne, Projekt Logo</p>
                },
                {
                    title: 'WIĘCEJ INFO',
                    content: <p>Personal Project</p>
                },
            ],
            en: [
                {
                    title: 'ABOUT',
                    content: <p>Logo design and visual identity for a fictional brand that manufactures soap - The Soap Company.</p>
                },
                {
                    title: 'MY ROLE',
                    content: <p>Graphic Design, Logo Design</p>
                },
                {
                    title: 'MORE INFO',
                    content: <p>Personal Project</p>
                },
            ],
        },
        gallery: [
            [
                galleryData.soap[1], galleryData.soap[2],
            ],
            [
                galleryData.soap[3], galleryData.soap[4],
            ],
            [
                galleryData.soap[5]
            ],
            [
                galleryData.soap[6]
            ],
            [
                galleryData.soap[7], galleryData.soap[8],
            ],
            [
                galleryData.soap[9], galleryData.soap[10],
            ],
            [
                galleryData.soap[11]
            ]
        ]
    },
}

// rogi
projectsData[2] = {
    title: {
        pl: 'Rogi',
        en: 'Goat'
    },
    route: 'rogi',
    previewData: {
        caption: {
            pl: 'Projektowanie Kostiumu',
            en: <Fragment>Costume Design</Fragment>,
        }, 
        img: projectPreviews.rogi,
    },
    contentData: {
        coverImg: galleryData.rogi[0],
        year: '2018',
        subtitle: {
            pl: <Fragment>Kostium do spektaklu teatralnego<br/><i>Drzewom nie wypadają włosy</i></Fragment>,
            en: <Fragment>Costume for a theater performance<br/><i>Trees do not fall out of hair</i></Fragment>,
        },
        paragraphs: {
            pl: [
                {
                    title: 'OPIS',
                    content: 
                        <Fragment>
                            <p>
                                KOBIETA: Babciu, byłaś kiedyś szczęśliwa?<br/>
                                BABCIA: Tak, raz, jak zmarła ta wściekła koza.<br/>
                                KOBIETA: Myślałam, że ją kochałaś?<br/>
                                BABCIA: Kochałam, ale była naprawdę okropna. Zwłaszcza wtedy, kiedy walczyła o równe prawa dla wszystkich zwierząt. Wmawiała mi, że ja też jestem kozą.<br/>
                                ŁEŚKA: Wcale ci nie wmawiałam, że jesteś kozą. Mówiłam tylko, że wszystkie zwierzęta czymś się od siebie różnią, i że człowiek od innych nie różni się niczym szczególnym.<br/><br/>
                                Scenariusz i reżyseria: Małgorzata Szczerbowska
                            </p>
                        </Fragment>,
                },
                {
                    title: 'MOJA ROLA',
                    content: <p>Projektowanie Kostiumu, Wykonanie Kostiumu</p>
                },
                {
                    title: 'WSPÓŁPRACA',
                    content: <p>Aleksandra Cząstka</p>
                },
                {
                    title: 'KLIENT',
                    content: <p><i>Teatr Dla Początkujących</i></p>
                },
            ],
            en: [
                {
                    title: 'ABOUT',
                    content: 
                        <Fragment>
                            <p>
                                WOMAN: Grandma, have you ever been happy?<br/>
                                GRANDMA: Yes, once, when this furious goat died.<br/>
                                WOMAN: I thought you loved her?<br/>
                                GRANDMA I loved her, but she was really awful. Especially when she fought for equal rights for all animals. She told me that I was also a goat.<br/>
                                GOAT: I did not tell you that you were a goat. I only said that all animals differ from each other and that humans do not differ from other animals in anything special.<br/><br/>
                                
                            </p>
                        </Fragment>,
                },
                {
                    title: 'MY ROLE',
                    content: <p>Costume Design</p>
                },
                {
                    title: 'IN COOPERATION WITH',
                    content: <p>Aleksandra Cząstka</p>
                },
                {
                    title: 'CLIENT',
                    content: <p><i>Theater for Beginners</i></p>
                },
            ],
        },
        gallery: [
            [
                galleryData.rogi[1], galleryData.rogi[2],
            ],
            [
                galleryData.rogi[3]
            ],
            [
                galleryData.rogi[4]
            ],
        ]
    },
}

// skladak
projectsData[3] = {
    title: {
        pl: 'Składak',
        en: 'Składak',
    },
    route: 'skladak',
    previewData: {
        caption: {
            pl: 'Projektowanie Produktu',
            en: 'Product Design',
        },
        img: projectPreviews.skladak,
    },
    contentData: {
        coverImg: galleryData.skladak[0],
        year: '2017',
        subtitle: {
            pl: 'Projekt stołka - pomocnika domowego',
            en: 'Stool - the household helper'
        }, 
        paragraphs: {
            pl: [
                {
                    title: 'OPIS',
                    content: <p>Składak to meblel wielozadaniowy. Najlepiej czuje się w małych mieszkaniach, gdzie ma możliwść pełnego zaprezentowania swojego potencjału. Nie jest to bowiem zwykły stołek. Łączy on w sobie funkcję siedziska, miejsca do przechowywania, oraz pozwala użytkownikowi - poprzez rozłożenie ukrytej w nogach stołka drabinki - zyskania od 72 do 102 cm „dodatkowego wzrostu”.</p>
                },
                {
                    title: 'MOJA ROLA',
                    content: <p>Projektowanie Produktu</p>
                },
                {
                    title: 'WIĘCEJ INFO',
                    content: <p>Projekt zrealizowany podczas drugiego roku studiów na wydziale Wzornictwa na Wrocławskiej ASP.</p>
                },
            ],
            en: [
                {
                    title: 'ABOUT',
                    content: <p>Składak is a multi-purpose piece of furniture. It feels best suited in small apartments, where it is possible to fully present its potential. It is not an ordinary stool. It combines the functions of a seat, storage space and allows the user to gain from 72 to 102 cm of "additional height” only by spreading the hidden ladder.</p>
                },
                {
                    title: 'MY ROLE',
                    content: <p>Product Design</p>
                },
                {
                    title: 'MORE INFO',
                    content: <p>The project was carried out during the second year of studies at the Faculty of Design at the Wrocław Academy of Fine Arts.</p>
                },
            ],
        },
        gallery: [
            [
                galleryData.skladak[1], galleryData.skladak[2]
            ],
            [
                galleryData.skladak[3]
            ],
            [
                galleryData.skladak[4], galleryData.skladak[5]
            ],
            [
                galleryData.skladak[6]
            ],
            [
                galleryData.skladak[7]
            ]
        ]
    }
}

// moduu
projectsData[4] = {
    title: {
        pl: 'moduu',
        en: 'moduu',
    },
    route: 'moduu',
    previewData: {
        caption: {
            pl: 'Projektowanie Produktu',
            en: 'Product Design',
        },
        img: projectPreviews.moduu,
    },
    contentData: {
        coverImg: galleryData.moduu[0],
        year: '2018',
        subtitle: {
            pl: 'Modułowy system przechowywania obok drzwi',
            en: 'Modular near-door storage system'
        },
        paragraphs: {
            pl: [
                {
                    title: 'OPIS',
                    content: <Fragment><p><strong>moduu</strong> czyli przestrzeń na, przy, obok drzwi pozwalająca na przechowywanie. Modułowy system umożliwia swobodne rozmieszczanie elementów w kształt pożądany przez użytkownika oraz wielokrotne ich powielanie. Pozwala na kreowanie przestrzeni przy drzwiach.</p></Fragment>,
                },
                {
                    title: 'MOJA ROLA',
                    content: <p>Projektowanie Produktu</p>
                },
                {
                    title: 'WIĘCEJ INFO',
                    content: <Fragment><p>Wyróżniona w konkursie <strong>PORTA BY ME 2017 - 4 DOORS</strong> koncepcja na obiekt NA, PRZY OBOK drzwi.</p><p>Projekt realizowany w grupie projektowej z Sonią Sudyka.</p></Fragment>
                },
                {
                    title: 'WSPÓŁPRACA',
                    content: <p>Projekt realizowany w grupie projektowej z Sonią Sudyka.</p>
                }
            ],
            en: [
                {
                    title: 'ABOUT',
                    content: <Fragment><p><strong>moduu</strong> is a storage system within the space sorrounding your door. Its modular setup allows free placement of its components in the shape desired by the user. Through their reproduction, we gain unlimited possibilities of creating and organizing space around the door that is adapted to individual needs.</p></Fragment>,
                },
                {
                    title: 'MY ROLE',
                    content: <p>Product Design</p>
                },
                {
                    title: 'MORE INFO',
                    content: <Fragment><p>Awarded in the <strong>PORTA BY ME 2017 - 4 DOORS</strong> concept for the ON. AT, NEXT TO the door object.</p></Fragment>
                },
                {
                    title: 'IN COOPERATION WITH',
                    content: <p>The project was carried out in the design group with Sonia Sudyka.</p>
                }
            ]
        },
        gallery: [
            [
                galleryData.moduu[1],
            ],
            [
                galleryData.moduu[2]
            ],
        ]
    },
}

// re-think
projectsData[5] = {
    title: {
        pl: 're-think',
        en: 're-think',
    },
    route: 'rethink',
    previewData: {
        caption: {
            pl: 'Ilustracja, Projektowanie Graficzne',
            en: 'Illustration, Graphic Design',
        },
        img: projectPreviews.rethink,
    },
    contentData: {
        coverImg: galleryData.rethink[0],
        year: '2019',
        subtitle: {
            pl: 'Zin',
            en: 'Zine'
        },
        paragraphs: {
            pl: [
                {
                    title: 'OPIS',
                    content: <>
                        <p>
                            Ilustrowana historia o tym jaki zalewająca nas fala plastiku może mieć wpływ na relacje międzyludzkie, międzygatunkowe i międzyrybne. O tym jaki każdy z nas ma wpływ na zanieczyszczenie Ziemii.
                        </p>
                        <p>
                            I w końcu o tym jak stopniowo wprowadzając niewielkie zmiany w swoim życiu możemy zmienić świadomość ludzi wokół siebie i choć trochę popchnąć narracjęo przyszłości naszej planety w mniej katastroficznym kierunku.
                        </p>
                        <p>
                            Cała seria została wydrukowana na papierze ekologicznym o gramaturze 120 oraz oprawiona ręcznie w tekstylną okładkę z surowego lnu.
                        </p>
                    </>,
                },
                {
                    title: 'MOJA ROLA',
                    content: <p>Ilustracja, Projektowanie Graficzne</p>
                },
                {
                    title: 'WIĘCEJ INFO',
                    content: <p>Personal Project</p>
                },
            ],
            en: [
                {
                    title: 'ABOUT',
                    content: <>
                        <p>
                            An illustrated story about an effect that ever increasing plastic pollution has on both interprsonal and interspecies relationships. About how each of us have an impact on Earth’s pollution.
                        </p>
                        <p>
                            Finally, it tells us how to gradually introduce small changes in our lives and make people around us aware of the enviroment, and by that push the narrative of the future of our planet in a less catastrophic direction.
                        </p>
                        <p>
                            The entire series was printed on ecological 120gsm paper and hand-bound using flax linien.
                        </p>
                    </>,
                },
                {
                    title: 'MY ROLE',
                    content: <p>Illustration, Graphic Design</p>
                },
                {
                    title: 'MORE INFO',
                    content: <p>Personal Project</p>
                },
            ]
        },
        gallery: [
            [
                galleryData.rethink[1],
            ],
            [
                galleryData.rethink[2],
            ],
            [
                galleryData.rethink[3],
            ],
            [
                galleryData.rethink[4],
            ],
            [
                galleryData.rethink[5],
            ],
            [
                galleryData.rethink[6],
            ],
            [
                galleryData.rethink[7],
            ],
        ]
    },
}

// pokoj zabaw
projectsData[6] = {
    title: {
        pl: <Fragment>Pokój&nbsp;zabaw</Fragment>,
        en: 'Playroom'
    },
    route: 'pokoj-zabaw',
    previewData: {
        caption: {
            pl: 'Illustracja',
            en: 'Illustration'
        },
        img: projectPreviews.pokojZabaw,
    },
    contentData: {
        coverImg: galleryData.pokojZabaw[0],
        year: '2019',
        subtitle: {
            en: 'A series of illustrations about cats, decisions and comfort',
            pl: 'Seria ilustracji o kotach, decyzjach i komforcie'
        },
        paragraphs: {
            pl: [
                {
                    title: 'OPIS',
                    content: <p><i>Pokój Zabaw</i> jest to seria ilustracji analizująca potrzebę posiadania pełnej kontroli nad własnym życiem, oraz potencjalnie zgubnego komfortu jaki dałoby nam to, gdyby ktoś podejmował za nas wszelkie decyzje.</p>
                },
                {
                    title: 'MOJA ROLA',
                    content: <p>Ilustracja</p>
                },
                {
                    title: 'WIĘCEJ INFO',
                    content: <p>Personal Project</p>
                },
            ],
            en: [
                {
                    title: 'ABOUT',
                    content: <p><i>Playroom</i> is a series of illustrations analyzing the need to have full control over your own life. What would our lives look like if someone made all decisions for us? Isn’t there a tempting feeling of comfort in it?</p>
                },
                {
                    title: 'MY ROLE',
                    content: <p>Illustration</p>
                },
                {
                    title: 'MORE INFO',
                    content: <p>Personal Project</p>
                },
            ],
        },
        gallery: [
            [
                galleryData.pokojZabaw[1]
            ],
            [
                galleryData.pokojZabaw[2]
            ],
            [
                galleryData.pokojZabaw[3]
            ],
            [
                galleryData.pokojZabaw[4]
            ],
            [
                galleryData.pokojZabaw[5], galleryData.pokojZabaw[6]
            ],
            [
                galleryData.pokojZabaw[7]
            ]
        ]
    },
}

// costam
// projectsData[7] = {
//     title: {
//         pl: 'Cośtam',
//         en: 'Cośtam',
//     },
//     route: 'costam',
//     previewData: {
//         caption: {
//             pl: 'easdasd',
//             en: 'asdasdaehfjiwoejfw'
//         },
//         img: projectPreviews.costam,
//     },
//     contentData: {
//         coverImg: galleryData.costam[0],
//         year: '2017',
//         subtitle: {
//             pl: 'asdasdasd',
//             en: 'asdasdasd'
//         },
//         paragraphs: {
//             pl: [
//                 {
//                     title: 'OPIS',
//                     content: <p>Projekt logo oraz identyfikacji wizualnej dla fikcyjnej marki ręcznie produkującej mydła - The Soap Company.</p>
//                 },
//                 {
//                     title: 'MOJA ROLA',
//                     content: <p>Ilustracja</p>
//                 },
//                 {
//                     title: 'WIĘCEJ INFO',
//                     content: <p>Personal Project</p>
//                 },
//             ],
//             en: [
//                 {
//                     title: 'ABOUT',
//                     content: <p>Logo design and visual identity for a fictional brand that manufactures soap - The Soap Company.</p>
//                 },
//                 {
//                     title: 'MY ROLE',
//                     content: <p>Illustration</p>
//                 },
//                 {
//                     title: 'MORE INFO',
//                     content: <p>Personal Project</p>
//                 },
//             ],
//         },
//         gallery: [
//             [
//                 galleryData.costam[1]
//             ],
//         ]
//     },
// }

// ilustracje
// projectsData[8] = {
projectsData[7] = {
    title: {
        pl: '3x3',
        en: '3x3',
    },
    route: 'ilustracje',
    previewData: {
        caption: {
            pl: 'Illustracja',
            en: 'Illustration'
        },
        img: projectPreviews.ilustracje,
    },
    contentData: {
        coverImg: galleryData.ilustracje[0],
        year: '2019',
        subtitle: {
            pl: 'Sceny radości z przeszłości',
            en: 'Scenes of joy from the past'
        },
        paragraphs: {
            pl: [
                {
                    title: 'OPIS',
                    content: <p>Trzy sceny z życia. Ilustracje z serii mama i ja. My i mama. W różnych konfiguracjach.</p>
                },
                {
                    title: 'MOJA ROLA',
                    content: <p>Ilustracja</p>
                },
                {
                    title: 'WIĘCEJ INFO',
                    content: <p>Personal Project</p>
                },
            ],
            en: [
                {
                    title: 'ABOUT',
                    content: <p>Three scenes from life. Illustrations from the series „my mother and me”. My mother and me and my sister. In various configurations.</p>
                },
                {
                    title: 'MY ROLE',
                    content: <p>Illustration</p>
                },
                {
                    title: 'MORE INFO',
                    content: <p>Personal Project</p>
                },
            ],
        },
        gallery: [
            [
                galleryData.ilustracje[1], galleryData.ilustracje[2]
            ],
            [
                galleryData.ilustracje[3]
            ],
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

// ulicznicy
// projectsData[9] = {
projectsData[8] = {
    title: {
        pl: 'Ulicznicy',
        en: 'Ulicznicy',
    },
    route: 'ulicznicy',
    previewData: {
        caption: {
            pl: 'Illustracja, Projektowanie Graficzne',
            en: 'Illustration, Graphic Design'
        },
        img: projectPreviews.ulicznicy,
    },
    contentData: {
        coverImg: galleryData.ulicznicy[0],
        year: '2019',
        subtitle: {
            pl: 'Projekt plakatu na XII Międzynarodowy Festiwal Sztuki Ulicznej',
            en: 'Poster design for the 12th International Festival of Street Art'
        },
        paragraphs: {
            pl: [
                {
                    title: 'MOJA ROLA',
                    content: <p>Illustracja, Projektowanie Graficzne</p>
                },
                {
                    title: 'WIĘCEJ INFO',
                    content: <p>Projekt Konkursowy</p>
                },
            ],
            en: [
                {
                    title: 'MY ROLE',
                    content: <p>Illustration, Graphic Design</p>
                },
                {
                    title: 'MORE INFO',
                    content: <p>Competition Project</p>
                },
            ],
        },
        gallery: [
            [
                galleryData.ulicznicy[1]
            ],
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

// voicemail
// projectsData[10] = {
projectsData[9] = {
    title: {
        pl: 'Voicemail',
        en: 'Voicemail',
    },
    route: 'voicemail',
    previewData: {
        caption: {
            pl: 'Illustracja, Projektowanie Graficzne',
            en: 'Illustration, Graphic Design'
        },
        img: projectPreviews.voicemail,
    },
    contentData: {
        coverImg: galleryData.voicemail[0],
        year: '2018',
        subtitle: {
            pl: 'Okładka cyfrowego wydawnictwa muzycznego.',
            en: 'Cover art for digitally published music album.'
        },
        paragraphs: {
            pl: [
                {
                    title: 'OPIS',
                    content: <p>Projekt okładki do albumu <i>Voicemail Inspired Themes</i> wrocławskiego producenta muzyki elektronicznej Antoniego Sierakowskiego.</p>
                },
                {
                    title: 'MOJA ROLA',
                    content: <p>Illustracja, Projektowanie Graficzne</p>
                },
                {
                    title: 'WIĘCEJ INFO',
                    content: <p>Wydane cyfrowo przez wrocławskie wydawnictwo <i>regime brigade.</i></p>
                },
            ],
            en: [
                {
                    title: 'ABOUT',
                    content: <p>Cover art for <i>Voicemail Inspired Themes</i>, extended play by Polish house music producer Antoni Sierakowski.</p>
                },
                {
                    title: 'MY ROLE',
                    content: <p>Illustration, Graphic Design</p>
                },
                {
                    title: 'MORE INFO',
                    content: <p>Digitally published by <i>regime brigade.</i></p>
                },
            ],
        },
        gallery: [
            [
                galleryData.voicemail[1]
            ],
            [
                galleryData.voicemail[2]
            ],
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

export default projectsData;