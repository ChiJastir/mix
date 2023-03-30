import React, {useEffect, useRef, useState} from 'react';
import PageTemplate from "../../components/pageTemplate/pageTemplate";
import Heading from "../../UI/heading/heading";
import Card from "../../components/card/card";
import Loader from "../../UI/loader/loader";
import getAllFilms from "../../API/getAllFilms";
import {useFetching} from "../../hooks/useFething";
import classes from './movie.module.css'

const MoviePage = () => {
    const data = {
        "docs": [
            {
                "id": 738950,
                "type": "cartoon",
                "externalId": {
                    "kpHD": "4225003db7ee10ea93061b62fe60ef4b",
                    "imdb": "tt3746824",
                    "tmdb": 394759
                },
                "name": "Волки и овцы: бе-е-е-зумное превращение",
                "rating": {
                    "kp": 6.749,
                    "imdb": 5.8,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 79.78
                },
                "description": "Любимцу стаи, молодому и беззаботному волку Серому невдомек, что скоро он окажется чужим среди своих друзей. Претендуя на роль вожака стаи и на руку (вернее, лапу) и сердце самой красивой волчицы Бьянки, Серый продолжает дурачиться и устраивать розыгрыши над сородичами. Все переворачивается с ног на голову, когда он решает изменить себя с помощью волшебного зелья. Чудо действительно происходит: Серый превращается в барана! Опасаясь за свою, теперь овечью, шкуру, Серый сбегает от волков и поселяется в деревне овец.\n\nТеперь Серому предстоит не только вернуть доверие возлюбленной и стаи, но и свой прежний облик. Но как это сделать, если у тебя есть всего три дня, да еще рога и копыта?",
                "votes": {
                    "kp": 25534,
                    "imdb": 3283,
                    "filmCritics": 0,
                    "russianFilmCritics": 2,
                    "await": 2469
                },
                "year": 2016,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/738950.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_738950.jpg"
                },
                "genres": [
                    {
                        "name": "мультфильм"
                    },
                    {
                        "name": "семейный"
                    },
                    {
                        "name": "комедия"
                    },
                    {
                        "name": "приключения"
                    }
                ],
                "countries": [
                    {
                        "name": "Россия"
                    }
                ],
                "alternativeName": null,
                "enName": null,
                "movieLength": 80,
                "names": [
                    {
                        "name": "Волки и овцы: бе-е-е-зумное превращение"
                    }
                ],
                "shortDescription": "Превратившийся в барана волк ищет способ снова стать собой. Анимационная комедия с обаятельными героями",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a000001722843cf3378fee222f0b762c381/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/volki-i-ovcy-be-e-e-zumnoe-prevrashchenie?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "Иви",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                            },
                            "url": "https://www.ivi.ru/watch/133279?utm_source=yandex&utm_medium=wizard"
                        },
                        {
                            "name": "KION",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                            },
                            "url": "https://kion.ru/video/movie/282885908?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                        },
                        {
                            "name": "PREMIER",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                            },
                            "url": "https://premier.one/show/9780?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                        },
                        {
                            "name": "more.tv",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/1648503/97e3cbbd-40ee-4298-888d-ed2d0f022a69/orig"
                            },
                            "url": "https://more.tv/volki_i_ovtsy_be-e-e-zumnoe_prevraschenie_?utm_source=yandex-snippet&utm_medium=snippet&utm_campaign=volki_i_ovtsy_be-e-e-zumnoe_prevraschenie_"
                        },
                        {
                            "name": "Wink",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                            },
                            "url": "https://wink.ru/media_items/87682832?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                        },
                        {
                            "name": "viju",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                            },
                            "url": "https://viju.ru/filmy/volki-i-ovtsy-be-e-e-zumnoe-prevraschenie?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                        }
                    ]
                }
            },
            {
                "id": 1345939,
                "type": "cartoon",
                "externalId": {
                    "kpHD": "4a9301a6ea1aedd489f696714a07ad50",
                    "imdb": null
                },
                "name": "Сказки Серого Волка",
                "rating": {
                    "kp": 8.266,
                    "imdb": 7.9,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "description": "Как Белоснежка победит злую мачеху? Каким образом Джеку удастся избежать встречи с ужасным Великаном и найти сокровища? За кого на самом деле выйдет замуж Золушка? И как всех обхитрит Красная Шапочка? Думаете, что все знаете? Серый Волк расскажет свою собственную историю.",
                "votes": {
                    "kp": 20640,
                    "imdb": 498,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "year": 2016,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/1345939.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1345939.jpg"
                },
                "genres": [
                    {
                        "name": "мультфильм"
                    },
                    {
                        "name": "фэнтези"
                    },
                    {
                        "name": "драма"
                    },
                    {
                        "name": "комедия"
                    },
                    {
                        "name": "семейный"
                    }
                ],
                "countries": [
                    {
                        "name": "Великобритания"
                    }
                ],
                "alternativeName": "Revolting Rhymes",
                "enName": null,
                "movieLength": 60,
                "names": [
                    {
                        "name": "Сказки Серого Волка"
                    },
                    {
                        "name": "Revolting Rhymes"
                    }
                ],
                "shortDescription": "Необычные истории про Красную шапочку, Золушку и Белоснежку. Волк рассказывает хулиганскую версию Роальда Даля",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a00000174dfeb4de89b6f1e223fc7260756/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/revolting-rhymes?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "KION",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                            },
                            "url": "https://kion.ru/video/movie/244568196?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                        },
                        {
                            "name": "PREMIER",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                            },
                            "url": "https://premier.one/show/14972?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                        },
                        {
                            "name": "Wink",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                            },
                            "url": "https://wink.ru/media_items/116272878?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                        }
                    ]
                }
            },
            {
                "id": 984361,
                "type": "cartoon",
                "externalId": {
                    "kpHD": "442562aec24a28b1b50c84157a2fdcbd",
                    "imdb": null
                },
                "name": "Волки и Овцы: Ход свиньёй",
                "rating": {
                    "kp": 6.536,
                    "imdb": 5.1,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 72.65
                },
                "description": "В спокойной и размеренной жизни объединенного городка волков и овец появляются неожиданные гости – песец и маленькая овечка. Никто не ожидал, что они принесут с собой смертельную опасность, преодолеть которую можно лишь всем вместе. Ведь только сообща решаются большие проблемы и серьезные задачи – в единстве сила!",
                "votes": {
                    "kp": 18643,
                    "imdb": 753,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 528
                },
                "year": 2018,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/984361.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_984361.jpg"
                },
                "genres": [
                    {
                        "name": "мультфильм"
                    },
                    {
                        "name": "семейный"
                    },
                    {
                        "name": "комедия"
                    },
                    {
                        "name": "приключения"
                    }
                ],
                "countries": [
                    {
                        "name": "Россия"
                    }
                ],
                "alternativeName": null,
                "enName": null,
                "movieLength": 72,
                "names": [
                    {
                        "name": "Волки и Овцы: Ход свиньёй"
                    }
                ],
                "shortDescription": "Дружба хищников и травоядных — под угрозой! Яркий мультфильм с голосами Максима Матвеева и Елизаветы Боярской",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a00000172132b59b9b93c22248d8f2ce7ae/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/volki-i-ovcy-khod-svinjojj?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "Иви",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                            },
                            "url": "https://www.ivi.ru/watch/172252?utm_source=yandex&utm_medium=wizard"
                        },
                        {
                            "name": "KION",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                            },
                            "url": "https://kion.ru/video/movie/282816608?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                        },
                        {
                            "name": "PREMIER",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                            },
                            "url": "https://premier.one/show/9754?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                        },
                        {
                            "name": "more.tv",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/1648503/97e3cbbd-40ee-4298-888d-ed2d0f022a69/orig"
                            },
                            "url": "https://more.tv/volki_i_ovtsy_hod_svinei?utm_source=yandex-snippet&utm_medium=snippet&utm_campaign=volki_i_ovtsy_hod_svinei"
                        },
                        {
                            "name": "Триколор Кино и ТВ",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                            },
                            "url": "https://kino.tricolor.tv/watch/volki-i-ovtsy-khod-sviney-2018/?utm_source=yandex&utm_medium=feed"
                        },
                        {
                            "name": "Wink",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                            },
                            "url": "https://wink.ru/media_items/76285626?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                        }
                    ]
                }
            },
            {
                "id": 260061,
                "type": "cartoon",
                "externalId": {
                    "kpHD": "43be43511807e3b3a01c38f6916f4be8",
                    "imdb": "tt3444630"
                },
                "name": "Лиса и Волк",
                "rating": {
                    "kp": 7.813,
                    "imdb": 7.1,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "description": "По мотивам русских народных сказок о хитрой Лисе и глупом Волке.",
                "votes": {
                    "kp": 14627,
                    "imdb": 96,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "year": 1958,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/260061.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_260061.jpg"
                },
                "genres": [
                    {
                        "name": "мультфильм"
                    },
                    {
                        "name": "детский"
                    },
                    {
                        "name": "короткометражка"
                    }
                ],
                "countries": [
                    {
                        "name": "СССР"
                    }
                ],
                "alternativeName": null,
                "enName": null,
                "names": [
                    {
                        "name": "Лиса и Волк"
                    }
                ],
                "movieLength": 10,
                "shortDescription": "Хитрая лиса и рыбки наелась, и волка обманула. Красивый рисованный мультфильм по русской народной сказке",
                "logo": {
                    "url": null
                },
                "watchability": {
                    "items": [
                        {
                            "name": "PREMIER",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                            },
                            "url": "https://premier.one/show/11552?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                        }
                    ]
                }
            },
            {
                "id": 1204003,
                "type": "cartoon",
                "externalId": {
                    "kpHD": null,
                    "imdb": "tt8774798",
                    "tmdb": 520946
                },
                "name": "100% волк",
                "rating": {
                    "kp": 5.808,
                    "imdb": 5.6,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "description": "Наследник семьи оборотней Фредди Люпин отчаянно желает стать как предки. Но на 13-й день рождения его ждёт шок, ведь он оборачивается не волком, а… пуделем.",
                "votes": {
                    "kp": 12888,
                    "imdb": 2029,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 71
                },
                "year": 2020,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/1204003.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1204003.jpg"
                },
                "genres": [
                    {
                        "name": "мультфильм"
                    },
                    {
                        "name": "фэнтези"
                    },
                    {
                        "name": "комедия"
                    },
                    {
                        "name": "приключения"
                    },
                    {
                        "name": "семейный"
                    }
                ],
                "countries": [
                    {
                        "name": "Австралия"
                    },
                    {
                        "name": "Бельгия"
                    }
                ],
                "alternativeName": "100% Wolf",
                "enName": null,
                "movieLength": 96,
                "names": [
                    {
                        "name": "100% волк"
                    },
                    {
                        "name": "100% Wolf"
                    }
                ],
                "shortDescription": null,
                "logo": {
                    "url": null
                },
                "watchability": {
                    "items": [
                        {
                            "name": "KION",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                            },
                            "url": "https://kion.ru/video/movie/337301317?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                        }
                    ]
                }
            },
            {
                "id": 79681,
                "externalId": {
                    "kpHD": null
                },
                "name": "Балто 2: В поисках волка",
                "alternativeName": "Balto: Wolf Quest",
                "enName": null,
                "names": [
                    {
                        "name": "Балто 2: В поисках волка"
                    },
                    {
                        "name": "Balto: Wolf Quest"
                    }
                ],
                "type": "cartoon",
                "year": 2001,
                "description": "Продолжение приключений легендарного пса Балто. Случилось так, что Балто стал отцом. Он сделал все возможное, чтобы пристроить всех своих отпрысков в хорошие семьи. Но одна девочка, по имени Алу, вдруг почувствовала, что никогда не сможет быть похожей на своих братьев и сестер. После того, как она встретила в лесу охотника, Алу ощутила пробуждение загадочной природы волка внутри себя. Кто же она - волк или собака? Чтобы найти ответ на этот вопрос, Алу отправляется в путешествие по бескрайним просторам Аляски, в котором ее будет сопровождать любящий отец Балто.",
                "shortDescription": null,
                "rating": {
                    "kp": 7.236,
                    "imdb": 6,
                    "filmCritics": 5.6,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "votes": {
                    "kp": 12318,
                    "imdb": 5090,
                    "filmCritics": 218,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "movieLength": 76,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/79681.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_79681.jpg"
                },
                "genres": [
                    {
                        "name": "мультфильм"
                    },
                    {
                        "name": "фэнтези"
                    },
                    {
                        "name": "приключения"
                    },
                    {
                        "name": "семейный"
                    }
                ],
                "countries": [
                    {
                        "name": "США"
                    }
                ],
                "watchability": {
                    "items": null
                },
                "releaseYears": []
            },
            {
                "id": 43698,
                "type": "cartoon",
                "externalId": {
                    "kpHD": "4f0601a42d4c596c98edf89979d9d8da",
                    "imdb": "tt0210974",
                    "tmdb": 72208
                },
                "name": "Серый волк энд Красная шапочка",
                "rating": {
                    "kp": 7.975,
                    "imdb": 7.4,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "description": "Соскучившись по Бабушке Терезе, мать отправляет Красную Шапочку из Москвы в Париж доставить ей русский праздничный пирог. Проходя через лес, Красная Шапочка встречает особо опасного преступника — Серого Волка, который к тому времени уже съел доктора Айболита и Зайчика. Он расспрашивает её, куда она идёт и с чем её пирог.",
                "votes": {
                    "kp": 11826,
                    "imdb": 512,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "year": 1990,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/43698.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_43698.jpg"
                },
                "genres": [
                    {
                        "name": "мультфильм"
                    },
                    {
                        "name": "короткометражка"
                    },
                    {
                        "name": "мюзикл"
                    }
                ],
                "countries": [
                    {
                        "name": "СССР"
                    }
                ],
                "alternativeName": null,
                "enName": null,
                "names": [
                    {
                        "name": "Серый волк энд Красная шапочка"
                    },
                    {
                        "name": "Серый волк & Красная шапочка",
                        "language": "RU",
                        "type": null
                    },
                    {
                        "name": "Seryy Volk end Krasnaya Shapochka",
                        "language": "RU",
                        "type": null
                    },
                    {
                        "name": "Le loup gris et le petit chaperon rouge",
                        "language": "FR",
                        "type": null
                    },
                    {
                        "name": "A szürke farkas és Piroska",
                        "language": "HU",
                        "type": null
                    },
                    {
                        "name": "Сивият вълк и Червената шапчица",
                        "language": "BG",
                        "type": null
                    },
                    {
                        "name": "Grey Wolf and Little Red Riding Hood",
                        "language": "GB",
                        "type": null
                    }
                ],
                "movieLength": 27,
                "shortDescription": "Волк преследует девочку, которая идет в Париж к любимой бабушке. Кукольно-пластилиновый мюзикл Гарри Бардина",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/224348/2a0000017b0d92e253fb11106f5acc066138/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/seryjj-volk-krasnaja-shapochka?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "PREMIER",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                            },
                            "url": "https://premier.one/show/11812?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                        }
                    ]
                }
            },
            {
                "id": 460310,
                "type": "cartoon",
                "externalId": {
                    "kpHD": null,
                    "imdb": "tt2393769",
                    "tmdb": 138785
                },
                "name": "Дед Мороз и серый волк",
                "rating": {
                    "kp": 7.057,
                    "imdb": 7.1,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "description": "Дед Мороз помогает зайчатам избавиться от преследований злого волка и принести из леса чудесную новогоднюю ёлку.",
                "votes": {
                    "kp": 5531,
                    "imdb": 39,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "year": 1937,
                "poster": null,
                "genres": [
                    {
                        "name": "мультфильм"
                    },
                    {
                        "name": "короткометражка"
                    }
                ],
                "countries": [
                    {
                        "name": "СССР"
                    }
                ],
                "alternativeName": null,
                "enName": null,
                "names": [
                    {
                        "name": "Дед Мороз и серый волк"
                    }
                ],
                "movieLength": 11,
                "shortDescription": null,
                "logo": {
                    "url": null
                },
                "watchability": {
                    "items": null
                }
            },
            {
                "id": 45826,
                "alternativeName": null,
                "countries": [
                    {
                        "name": "СССР"
                    }
                ],
                "description": "Как любовь к музыке сделала друзьями волка и козлят.",
                "enName": null,
                "externalId": {
                    "kpHD": "4dbc6d841f1bc02e87e03894780d0a15",
                    "imdb": "tt0211111",
                    "tmdb": 160076
                },
                "genres": [
                    {
                        "name": "мультфильм"
                    },
                    {
                        "name": "короткометражка"
                    },
                    {
                        "name": "мюзикл"
                    },
                    {
                        "name": "семейный"
                    }
                ],
                "movieLength": 10,
                "name": "Волк и семеро козлят на новый лад",
                "names": [
                    {
                        "name": "Волк и семеро козлят на новый лад"
                    },
                    {
                        "name": "Volk i semero kozlyat na novyy lad",
                        "language": "RU",
                        "type": "translit"
                    }
                ],
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/45826.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_45826.jpg"
                },
                "rating": {
                    "kp": 7.325,
                    "imdb": 7.3,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "shortDescription": "Волк стучится в дом козлят, но те вооружены безупречным слухом. Кукольный мюзикл по сценарию Юрия Энтина",
                "type": "cartoon",
                "votes": {
                    "kp": 3799,
                    "imdb": 92,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "year": 1975,
                "logo": {
                    "url": null
                },
                "watchability": {
                    "items": null
                }
            },
            {
                "externalId": {
                    "kpHD": "43043c2371f16faba0bfded6731850ba",
                    "imdb": "tt6053002",
                    "tmdb": 416126
                },
                "rating": {
                    "kp": 7.657,
                    "imdb": 6.9,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "votes": {
                    "kp": 1662,
                    "imdb": 48,
                    "filmCritics": 0,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "movieLength": 10,
                "id": 259912,
                "type": "cartoon",
                "name": "Олень и волк",
                "description": "Волка придавило упавшее дерево. Благородный Олень помог ему выбраться. Но Волк не сдержал данного слова и вместо благодарности напал на Оленя. Мудрый Медведь рассудил спорщиков...",
                "year": 1950,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/259912.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_259912.jpg"
                },
                "genres": [
                    {
                        "name": "мультфильм"
                    },
                    {
                        "name": "детский"
                    },
                    {
                        "name": "короткометражка"
                    }
                ],
                "countries": [
                    {
                        "name": "СССР"
                    }
                ],
                "alternativeName": null,
                "enName": null,
                "names": [
                    {
                        "name": "Олень и волк"
                    }
                ],
                "shortDescription": "Спасенный из ловушки хищник обманывает своего освободителя. Классический мультфильм по эстонской сказке",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017d9d9c1c153517300879801bf87e/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/olen-i-volk?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "PREMIER",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                            },
                            "url": "https://premier.one/show/11214?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                        },
                        {
                            "name": "Триколор Кино и ТВ",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                            },
                            "url": "https://kino.tricolor.tv/watch/olen-i-volk-1950/?utm_source=yandex&utm_medium=feed"
                        }
                    ]
                }
            }
        ],
        "total": 71,
        "limit": 10,
        "page": 2,
        "pages": 8
    }

    const data2 = {
        "docs": [
            {
                "externalId": {
                    "kpHD": "4127663ed234fa8584aeb969ceb02cd8",
                    "imdb": "tt1675434",
                    "tmdb": 77338
                },
                "rating": {
                    "kp": 8.805,
                    "imdb": 8.5,
                    "filmCritics": 6.8,
                    "russianFilmCritics": 100,
                    "await": 0
                },
                "votes": {
                    "kp": 1545429,
                    "imdb": 870834,
                    "filmCritics": 130,
                    "russianFilmCritics": 12,
                    "await": 15
                },
                "movieLength": 112,
                "id": 535341,
                "type": "movie",
                "name": "1+1",
                "description": "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
                "year": 2011,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/535341.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_535341.jpg"
                },
                "genres": [
                    {
                        "name": "драма"
                    },
                    {
                        "name": "комедия"
                    },
                    {
                        "name": "биография"
                    }
                ],
                "countries": [
                    {
                        "name": "Франция"
                    }
                ],
                "alternativeName": "Intouchables",
                "enName": null,
                "names": [
                    {
                        "name": "1+1"
                    },
                    {
                        "name": "Intouchables"
                    },
                    {
                        "name": "不可触碰",
                        "language": "CN",
                        "type": null
                    },
                    {
                        "name": "最佳拍档",
                        "language": "CN",
                        "type": null
                    },
                    {
                        "name": "无法触碰",
                        "language": "CN",
                        "type": null
                    },
                    {
                        "name": "Untouchable",
                        "language": "GB",
                        "type": null
                    },
                    {
                        "name": "不可触摸",
                        "language": "CN",
                        "type": null
                    },
                    {
                        "name": "Неприкасаемые",
                        "language": "RU",
                        "type": "Literal"
                    },
                    {
                        "name": "1+1 [Intouchables]",
                        "language": "RU",
                        "type": null
                    },
                    {
                        "name": "Saikyô no futari",
                        "language": "JP",
                        "type": null
                    },
                    {
                        "name": "Amigos",
                        "language": "CL",
                        "type": null
                    },
                    {
                        "name": "Mehubarim la'hayim",
                        "language": "IL",
                        "type": "Hebrew title"
                    },
                    {
                        "name": "Amigos para siempre",
                        "language": "VE",
                        "type": null
                    },
                    {
                        "name": "Prijatelja",
                        "language": "SI",
                        "type": null
                    },
                    {
                        "name": "En oväntad vänskap",
                        "language": "SE",
                        "type": null
                    },
                    {
                        "name": "Intocáveis",
                        "language": "BR",
                        "type": null
                    },
                    {
                        "name": "Intouchables – Ziemlich beste Freunde",
                        "language": "DE",
                        "type": null
                    },
                    {
                        "name": "언터처블 1%의 우정",
                        "language": "KR",
                        "type": null
                    },
                    {
                        "name": "De Uroerlige",
                        "language": "DK",
                        "type": null
                    }
                ],
                "shortDescription": "Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017f0262661cde61dc260cb86f7830/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/intouchables?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "START",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
                            },
                            "url": "https://start.ru/watch/1-1?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=1-1"
                        }
                    ]
                }
            },
            {
                "externalId": {
                    "kpHD": "47649cf90de74aca8da7eb5b17fc8a8a",
                    "imdb": "tt8367814",
                    "tmdb": 522627
                },
                "rating": {
                    "kp": 8.54,
                    "imdb": 7.8,
                    "filmCritics": 6.5,
                    "russianFilmCritics": 86.3636,
                    "await": 97.92
                },
                "votes": {
                    "kp": 1333077,
                    "imdb": 353778,
                    "filmCritics": 276,
                    "russianFilmCritics": 22,
                    "await": 13643
                },
                "movieLength": 113,
                "id": 1143242,
                "type": "movie",
                "name": "Джентльмены",
                "description": "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.",
                "year": 2019,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/1143242.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1143242.jpg"
                },
                "genres": [
                    {
                        "name": "криминал"
                    },
                    {
                        "name": "комедия"
                    },
                    {
                        "name": "боевик"
                    }
                ],
                "countries": [
                    {
                        "name": "Великобритания"
                    },
                    {
                        "name": "США"
                    }
                ],
                "alternativeName": "The Gentlemen",
                "enName": null,
                "names": [
                    {
                        "name": "Джентльмены"
                    },
                    {
                        "name": "The Gentlemen"
                    },
                    {
                        "name": "Toff Guys",
                        "language": "GB",
                        "type": "working title"
                    },
                    {
                        "name": "Los Caballeros de la mafia",
                        "language": "ES",
                        "type": null
                    },
                    {
                        "name": "Busha",
                        "language": "GB",
                        "type": "working title"
                    },
                    {
                        "name": "Los caballeros: criminales con clase",
                        "language": "AR",
                        "type": null
                    },
                    {
                        "name": "紳士追殺令",
                        "language": "TW",
                        "type": null
                    },
                    {
                        "name": "Джентльмени",
                        "language": "UA",
                        "type": null
                    },
                    {
                        "name": "Εγκληματίες πρώτης τάξεως",
                        "language": "GR",
                        "type": null
                    }
                ],
                "color": "#DBCCC2",
                "shortDescription": "Наркобарон хочет уйти на покой, но криминальный мир не отпускает. Успешное возвращение Гая Ричи к корням",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f18064fd95abb74cbcc02873b8/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/the-gentlemen?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "Иви",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                            },
                            "url": "https://www.ivi.ru/watch/216926?utm_source=yandex&utm_medium=wizard"
                        },
                        {
                            "name": "KION",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                            },
                            "url": "https://kion.ru/video/movie/169735638?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                        },
                        {
                            "name": "Wink",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                            },
                            "url": "https://wink.ru/media_items/95724717?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                        }
                    ]
                }
            },
            {
                "externalId": {
                    "kpHD": "4d05a2c799d34ac9bb644af70c8e5dc1",
                    "imdb": "tt0993846",
                    "tmdb": 106646
                },
                "rating": {
                    "kp": 7.963,
                    "imdb": 8.2,
                    "filmCritics": 7.8,
                    "russianFilmCritics": 77.4194,
                    "await": 96.62
                },
                "votes": {
                    "kp": 1065581,
                    "imdb": 1438726,
                    "filmCritics": 289,
                    "russianFilmCritics": 31,
                    "await": 43024
                },
                "movieLength": 180,
                "id": 462682,
                "type": "movie",
                "name": "Волк с Уолл-стрит",
                "description": "1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды. Он знакомится с соседом по дому Донни, торговцем, который сразу находит общий язык с Джорданом и решает открыть с ним собственную фирму. В качестве сотрудников они нанимают нескольких друзей Белфорта, его отца Макса и называют компанию «Стрэттон Оукмонт». В свободное от работы время Джордан прожигает жизнь: лавирует от одной вечеринки к другой, вступает в сексуальные отношения с проститутками, употребляет множество наркотических препаратов, в том числе кокаин и кваалюд. Однажды наступает момент, когда быстрым обогащением Белфорта начинает интересоваться агент ФБР...",
                "year": 2013,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/462682.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_462682.jpg"
                },
                "genres": [
                    {
                        "name": "драма"
                    },
                    {
                        "name": "криминал"
                    },
                    {
                        "name": "биография"
                    },
                    {
                        "name": "комедия"
                    }
                ],
                "countries": [
                    {
                        "name": "США"
                    }
                ],
                "alternativeName": "The Wolf of Wall Street",
                "enName": null,
                "names": [
                    {
                        "name": "Волк с Уолл-стрит"
                    },
                    {
                        "name": "The Wolf of Wall Street"
                    }
                ],
                "color": "#CCA97B",
                "shortDescription": "Восхождение циника-гедониста на бизнес-олимп 1980-х. Блистательный тандем Леонардо ДиКаприо и Мартина Скорсезе",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/1534341/2a00000178c64fe43f3b567acaaa73e861f0/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/the-wolf-of-wall-street?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "Иви",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                            },
                            "url": "https://www.ivi.ru/watch/103304?utm_source=yandex&utm_medium=wizard"
                        },
                        {
                            "name": "KION",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                            },
                            "url": "https://kion.ru/video/movie/377166559?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                        },
                        {
                            "name": "PREMIER",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                            },
                            "url": "https://premier.one/show/17016?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                        },
                        {
                            "name": "Триколор Кино и ТВ",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/947e777c-2f73-4cbc-b09d-6bfa3966ba13/orig"
                            },
                            "url": "https://kino.tricolor.tv/watch/volk-s-uoll-strit-2013/?utm_source=yandex&utm_medium=feed"
                        },
                        {
                            "name": "Wink",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                            },
                            "url": "https://wink.ru/media_items/55004454?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                        },
                        {
                            "name": "viju",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                            },
                            "url": "https://viju.ru/filmy/volk-s-uoll-strit-2013?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                        },
                        {
                            "name": "НТВ-ПЛЮС Онлайн ТВ",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig"
                            },
                            "url": "https://ntvplus.tv/watch/17926-volk-s-uoll-strit?utm_source=kinopoisk"
                        },
                        {
                            "name": "24ТВ",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                            },
                            "url": "https://24h.tv/contents/2013-the-wolf-of-wall-street-546310419099157304"
                        }
                    ]
                }
            },
            {
                "externalId": {
                    "kpHD": "48de522f4bc591d7baa92c12ce435265",
                    "imdb": "tt11083552",
                    "tmdb": 637649
                },
                "rating": {
                    "kp": 7.582,
                    "imdb": 7.1,
                    "filmCritics": 6.3,
                    "russianFilmCritics": 72.973,
                    "await": 98.09
                },
                "votes": {
                    "kp": 1033257,
                    "imdb": 185657,
                    "filmCritics": 256,
                    "russianFilmCritics": 37,
                    "await": 23495
                },
                "movieLength": 119,
                "id": 1318972,
                "type": "movie",
                "name": "Гнев человеческий",
                "description": "Грузовики лос-анджелесской инкассаторской компании Fortico Security часто подвергаются нападениям, и во время очередного ограбления погибают оба охранника. Через некоторое время в компанию устраивается крепкий немногословный британец Патрик Хилл. Он получает от босса прозвище Эйч и, впритык к необходимому минимуму пройдя тесты по фитнесу, стрельбе и вождению, отправляется на первое задание. Вскоре и его грузовик пытаются ограбить вооруженные налётчики, но Эйч в одиночку расправляется с целой бандой и становится героем. Кажется, слава и уважение коллег его совершенно не интересуют, ведь он преследует свои цели.",
                "year": 2021,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/1318972.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_1318972.jpg"
                },
                "genres": [
                    {
                        "name": "боевик"
                    },
                    {
                        "name": "триллер"
                    }
                ],
                "countries": [
                    {
                        "name": "Великобритания"
                    },
                    {
                        "name": "США"
                    }
                ],
                "alternativeName": "Wrath of Man",
                "enName": null,
                "names": [
                    {
                        "name": "Гнев человеческий"
                    },
                    {
                        "name": "Wrath of Man"
                    }
                ],
                "color": "#080810",
                "shortDescription": "Хмурый мужчина прикидывается инкассатором, чтобы выйти на грабителей. Гай Ричи и Джейсон Стэйтем снова вместе",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/223007/2a00000179d1cc14e6c741017c7f7a2f15c2/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/wrath-of-man?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "Иви",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                            },
                            "url": "https://www.ivi.ru/watch/415690?utm_source=yandex&utm_medium=wizard"
                        },
                        {
                            "name": "KION",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                            },
                            "url": "https://kion.ru/video/movie/351880139?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                        },
                        {
                            "name": "Wink",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                            },
                            "url": "https://wink.ru/media_items/117557603?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                        }
                    ]
                }
            },
            {
                "id": 41519,
                "type": "movie",
                "externalId": {
                    "kpHD": "492c446642bf8dc88f0abcb9a4b02f7f",
                    "imdb": "tt0118767",
                    "tmdb": 20992
                },
                "name": "Брат",
                "rating": {
                    "kp": 8.29,
                    "imdb": 7.8,
                    "filmCritics": 7.6,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "description": "Демобилизовавшись, Данила Багров вернулся в родной городок. Но скучная жизнь российской провинции не устраивала его, и он решился податься в Петербург, где, по слухам, уже несколько лет процветает его старший брат. Данила нашел брата. Но все оказалось не так просто — брат работает наемным убийцей.",
                "votes": {
                    "kp": 995316,
                    "imdb": 22417,
                    "filmCritics": 5,
                    "russianFilmCritics": 2,
                    "await": 0
                },
                "year": 1997,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/41519.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_41519.jpg"
                },
                "genres": [
                    {
                        "name": "драма"
                    },
                    {
                        "name": "криминал"
                    },
                    {
                        "name": "боевик"
                    }
                ],
                "countries": [
                    {
                        "name": "Россия"
                    }
                ],
                "alternativeName": null,
                "enName": "Brat",
                "movieLength": 100,
                "names": [
                    {
                        "name": "Брат"
                    },
                    {
                        "name": "Brat",
                        "language": "US",
                        "type": null
                    },
                    {
                        "name": "Brother",
                        "language": "US",
                        "type": null
                    }
                ],
                "shortDescription": "Дембель Данила Багров защищает слабых в Петербурге 1990-х. Фильм, сделавший Сергея Бодрова народным героем",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/2439731/2a0000017c61da4f185f94d808f4d90182a8/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/brat?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "Иви",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                            },
                            "url": "https://www.ivi.ru/watch/33531?utm_source=yandex&utm_medium=wizard"
                        },
                        {
                            "name": "KION",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig"
                            },
                            "url": "https://kion.ru/video/movie/284738273?utm_source=yandex&utm_medium=organic&utm_campaign=wizard"
                        },
                        {
                            "name": "PREMIER",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                            },
                            "url": "https://premier.one/show/9764?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                        },
                        {
                            "name": "Wink",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                            },
                            "url": "https://wink.ru/media_items/70749607?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                        },
                        {
                            "name": "viju",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                            },
                            "url": "https://viju.ru/filmy/brat?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                        },
                        {
                            "name": "24ТВ",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                            },
                            "url": "https://24h.tv/contents/1997-brother-546314390643671143"
                        }
                    ]
                }
            },
            {
                "externalId": {
                    "kpHD": "4ed0391f9e10d314aa0a7de2ea07bf55",
                    "imdb": "tt0099785",
                    "tmdb": 771
                },
                "rating": {
                    "kp": 8.275,
                    "imdb": 7.7,
                    "filmCritics": 5.8,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "votes": {
                    "kp": 976326,
                    "imdb": 599340,
                    "filmCritics": 62,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "movieLength": 103,
                "id": 8124,
                "type": "movie",
                "name": "Один дома",
                "description": "Американское семейство отправляется из Чикаго в Европу, но в спешке сборов бестолковые родители забывают дома... одного из своих детей. Юное создание, однако, не теряется и демонстрирует чудеса изобретательности. И когда в дом залезают грабители, им приходится не раз пожалеть о встрече с милым крошкой.",
                "year": 1990,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/8124.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_8124.jpg"
                },
                "genres": [
                    {
                        "name": "комедия"
                    },
                    {
                        "name": "семейный"
                    }
                ],
                "countries": [
                    {
                        "name": "США"
                    }
                ],
                "alternativeName": "Home Alone",
                "enName": "Home Alone 1",
                "names": [
                    {
                        "name": "Один дома"
                    },
                    {
                        "name": "Home Alone"
                    },
                    {
                        "name": "Один вдома",
                        "language": "UA",
                        "type": null
                    },
                    {
                        "name": "Один удома",
                        "language": "UA",
                        "type": null
                    },
                    {
                        "name": "Hjemme alene",
                        "language": "NO",
                        "type": null
                    },
                    {
                        "name": "अकेला घर",
                        "language": "IN",
                        "type": "Hindi"
                    },
                    {
                        "name": "Homu aron",
                        "language": "JP",
                        "type": "romaji"
                    },
                    {
                        "name": "Singur acasa",
                        "language": "RO",
                        "type": null
                    },
                    {
                        "name": "Maman, j'ai raté l'avion",
                        "language": "CA",
                        "type": null
                    },
                    {
                        "name": "హోమ్ అలోన్",
                        "language": "IN",
                        "type": "Telugu"
                    },
                    {
                        "name": "Üksinda kodus",
                        "language": "EE",
                        "type": null
                    },
                    {
                        "name": "Home Alone 1",
                        "language": "US",
                        "type": null
                    },
                    {
                        "name": "ホームアローン",
                        "language": "JP",
                        "type": null
                    },
                    {
                        "name": "Mi probre angelito",
                        "language": "MX",
                        "type": null
                    },
                    {
                        "name": "Viens pats mājās",
                        "language": "LV",
                        "type": null
                    },
                    {
                        "name": "Kevin - Allein zu Haus",
                        "language": "DE",
                        "type": null
                    },
                    {
                        "name": "שחכו אותי בבית",
                        "language": "IL",
                        "type": null
                    },
                    {
                        "name": "לבד בבית",
                        "language": "IL",
                        "type": null
                    },
                    {
                        "name": "Ensam hemma",
                        "language": "SE",
                        "type": null
                    },
                    {
                        "name": "Maman, (1) j'ai raté l'avion !",
                        "language": "FR",
                        "type": null
                    }
                ],
                "shortDescription": "Мальчик-озорник задает жару грабителям. Лучшая комедия для создания праздничного настроения у всей семьи",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/212840/2a00000172550ce8255397b4e3d6f9938ddf/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/home-alone?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        }
                    ]
                }
            },
            {
                "externalId": {
                    "kpHD": "4ae8f7b627a55093b7a4f634dd2f9cc5",
                    "imdb": "tt0499549",
                    "tmdb": 19995
                },
                "rating": {
                    "kp": 7.969,
                    "imdb": 7.9,
                    "filmCritics": 7.4,
                    "russianFilmCritics": 75,
                    "await": 85.93
                },
                "votes": {
                    "kp": 940930,
                    "imdb": 1328732,
                    "filmCritics": 335,
                    "russianFilmCritics": 12,
                    "await": 38690
                },
                "movieLength": 162,
                "id": 251733,
                "type": "movie",
                "name": "Аватар",
                "description": "Бывший морпех Джейк Салли прикован к инвалидному креслу. Несмотря на немощное тело, Джейк в душе по-прежнему остается воином. Он получает задание совершить путешествие в несколько световых лет к базе землян на планете Пандора, где корпорации добывают редкий минерал, имеющий огромное значение для выхода Земли из энергетического кризиса.",
                "year": 2009,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/251733.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_251733.jpg"
                },
                "genres": [
                    {
                        "name": "фантастика"
                    },
                    {
                        "name": "боевик"
                    },
                    {
                        "name": "драма"
                    },
                    {
                        "name": "приключения"
                    }
                ],
                "countries": [
                    {
                        "name": "США"
                    }
                ],
                "alternativeName": "Avatar",
                "enName": "Project 880465wtgsdtg",
                "names": [
                    {
                        "name": "Аватар"
                    },
                    {
                        "name": "Avatar"
                    },
                    {
                        "name": "Project 880465wtgsdtg",
                        "language": "US",
                        "type": "working title"
                    },
                    {
                        "name": "Avatar Edicion Coleccionista",
                        "language": "ES",
                        "type": null
                    },
                    {
                        "name": "Avatar: Extended Version",
                        "language": "US",
                        "type": "extended version"
                    },
                    {
                        "name": "Avatar - Collector's Extended Edition",
                        "language": "GB",
                        "type": null
                    },
                    {
                        "name": "Avatar - Edição Estendida de Colecionador",
                        "language": "BR",
                        "type": null
                    },
                    {
                        "name": "Avatar 3D",
                        "language": "US",
                        "type": "3D version"
                    },
                    {
                        "name": "Avatar: An IMAX 3D Experience",
                        "language": "US",
                        "type": "IMAX version"
                    },
                    {
                        "name": "James Cameron's Avatar",
                        "language": "US",
                        "type": "promotional title"
                    },
                    {
                        "name": "Avatar: Special Edition",
                        "language": "US",
                        "type": "longer version"
                    },
                    {
                        "name": "아바타",
                        "language": "KR",
                        "type": null
                    },
                    {
                        "name": "Аватар 3D",
                        "language": "RU",
                        "type": null
                    },
                    {
                        "name": "Avatar - Wersja Specjalna",
                        "language": "PL",
                        "type": null
                    },
                    {
                        "name": "Avatar - Wersja Rozszerzona",
                        "language": "PL",
                        "type": null
                    },
                    {
                        "name": "Avatar - Collector's Edition",
                        "language": "DE",
                        "type": null
                    },
                    {
                        "name": "Avatar - Extended Collector's Edition",
                        "language": "US",
                        "type": "box set"
                    },
                    {
                        "name": "અવતાર",
                        "language": "IN",
                        "type": "Gujarati"
                    },
                    {
                        "name": "अवतार",
                        "language": "IN",
                        "type": "Hindi"
                    },
                    {
                        "name": "অবতার",
                        "language": "IN",
                        "type": "Bengali"
                    },
                    {
                        "name": "Avatar 1 - Aufbruch nach Pandora",
                        "language": "DE",
                        "type": null
                    }
                ],
                "shortDescription": "Парализованный морпех становится мессией для жителей Пандоры. Самый кассовый фильм в истории кино\n",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/2385704/2a00000176f1bb64212c9df414a8909c8f44/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/avatar?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        }
                    ]
                }
            },
            {
                "externalId": {
                    "kpHD": "42d5ba8f195451fda78fe0ce899a964a",
                    "imdb": "tt1375666",
                    "tmdb": 27205
                },
                "rating": {
                    "kp": 8.662,
                    "imdb": 8.8,
                    "filmCritics": 8.1,
                    "russianFilmCritics": 80.9524,
                    "await": 87.61
                },
                "votes": {
                    "kp": 906771,
                    "imdb": 2383192,
                    "filmCritics": 365,
                    "russianFilmCritics": 21,
                    "await": 42546
                },
                "movieLength": 148,
                "id": 447301,
                "type": "movie",
                "name": "Начало",
                "description": "Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил. \n\nИ вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть все назад, но для этого ему нужно совершить невозможное – инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача – не украсть идею, а внедрить ее. Если у них получится, это и станет идеальным преступлением. \n\nНо никакое планирование или мастерство не могут подготовить команду к встрече с опасным противником, который, кажется, предугадывает каждый их ход. Врагом, увидеть которого мог бы лишь Кобб.",
                "year": 2010,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/447301.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_447301.jpg"
                },
                "genres": [
                    {
                        "name": "фантастика"
                    },
                    {
                        "name": "боевик"
                    },
                    {
                        "name": "триллер"
                    },
                    {
                        "name": "драма"
                    },
                    {
                        "name": "детектив"
                    }
                ],
                "countries": [
                    {
                        "name": "США"
                    },
                    {
                        "name": "Великобритания"
                    }
                ],
                "alternativeName": "Inception",
                "enName": null,
                "names": [
                    {
                        "name": "Начало"
                    },
                    {
                        "name": "Inception"
                    },
                    {
                        "name": "El Origen",
                        "language": "ES",
                        "type": null
                    },
                    {
                        "name": "인셉션",
                        "language": "KR",
                        "type": null
                    },
                    {
                        "name": "El origen",
                        "language": "MX",
                        "type": null
                    },
                    {
                        "name": "A Origem",
                        "language": "BR",
                        "type": null
                    },
                    {
                        "name": "Başlangıç",
                        "language": "TR",
                        "type": null
                    },
                    {
                        "name": "潛行凶間",
                        "language": "HK",
                        "type": null
                    },
                    {
                        "name": "盗梦空间",
                        "language": "CN",
                        "type": null
                    },
                    {
                        "name": "Eredet",
                        "language": "HU",
                        "type": null
                    },
                    {
                        "name": "Pirmsākums",
                        "language": "LV",
                        "type": null
                    },
                    {
                        "name": "จิตพิฆาตโลก",
                        "language": "TH",
                        "type": null
                    }
                ],
                "color": "#B5ACAC",
                "shortDescription": "Профессиональные воры внедряются в сон наследника огромной империи. Фантастический боевик Кристофера Нолана",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/200035/2a00000178c5fc5e63481655114331b766a3/orig"
                },
                "watchability": {
                    "items": null
                }
            },
            {
                "externalId": {
                    "kpHD": "49bf154f0dea2d53b169846a284469cd",
                    "imdb": "tt0111161",
                    "tmdb": 278
                },
                "rating": {
                    "kp": 9.108,
                    "imdb": 9.3,
                    "filmCritics": 8.4,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "votes": {
                    "kp": 902657,
                    "imdb": 2717616,
                    "filmCritics": 82,
                    "russianFilmCritics": 1,
                    "await": 2
                },
                "movieLength": 142,
                "id": 326,
                "type": "movie",
                "name": "Побег из Шоушенка",
                "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
                "year": 1994,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/326.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_326.jpg"
                },
                "genres": [
                    {
                        "name": "драма"
                    }
                ],
                "countries": [
                    {
                        "name": "США"
                    }
                ],
                "alternativeName": "The Shawshank Redemption",
                "enName": null,
                "names": [
                    {
                        "name": "Побег из Шоушенка"
                    },
                    {
                        "name": "The Shawshank Redemption"
                    },
                    {
                        "name": "Xiao shen ke de jiu shu",
                        "language": "CN",
                        "type": "Mandarin title"
                    },
                    {
                        "name": "Gaqceva shoushenkidan",
                        "language": "GE",
                        "type": null
                    },
                    {
                        "name": "Rita Hayworth - nyckel till flykten",
                        "language": "SE",
                        "type": null
                    },
                    {
                        "name": "Şouşenkdən qaçış",
                        "language": "AZ",
                        "type": null
                    },
                    {
                        "name": "Shawshank Redemption – Avain pakoon",
                        "language": "FI",
                        "type": "DVD"
                    },
                    {
                        "name": "Искупление Шоушенком",
                        "language": "RU",
                        "type": null
                    },
                    {
                        "name": "Shoushenkden Qacish",
                        "language": "AZ",
                        "type": null
                    },
                    {
                        "name": "Rastgari Dar Shawshank",
                        "language": "IR",
                        "type": null
                    },
                    {
                        "name": "Homot Shel Tikva",
                        "language": "IL",
                        "type": null
                    },
                    {
                        "name": "Shôshanku no sora ni",
                        "language": "JP",
                        "type": null
                    },
                    {
                        "name": "Бекство из Шошенка",
                        "language": "RS",
                        "type": null
                    },
                    {
                        "name": "쇼생크 탈출",
                        "language": "KR",
                        "type": null
                    },
                    {
                        "name": "Les Évadés",
                        "language": "FR",
                        "type": null
                    },
                    {
                        "name": "刺激1995",
                        "language": "TW",
                        "type": null
                    },
                    {
                        "name": "Die Verurteilten",
                        "language": "DE",
                        "type": null
                    }
                ],
                "shortDescription": "Несправедливо осужденный банкир готовит побег из тюрьмы. Тим Роббинс в выдающейся экранизации Стивена Кинга",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/1648503/2a000001705c8bf514c033f1019473a4caae/orig"
                },
                "watchability": {
                    "items": null
                }
            },
            {
                "externalId": {
                    "kpHD": "42e511a460839b298d96effd8de60c68",
                    "imdb": "tt0120689",
                    "tmdb": 497
                },
                "rating": {
                    "kp": 9.072,
                    "imdb": 8.6,
                    "filmCritics": 6.8,
                    "russianFilmCritics": 0,
                    "await": 0
                },
                "votes": {
                    "kp": 872391,
                    "imdb": 1320990,
                    "filmCritics": 136,
                    "russianFilmCritics": 1,
                    "await": 0
                },
                "movieLength": 189,
                "id": 435,
                "type": "movie",
                "name": "Зеленая миля",
                "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
                "year": 1999,
                "poster": {
                    "url": "https://st.kp.yandex.net/images/film_big/435.jpg",
                    "previewUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_435.jpg"
                },
                "genres": [
                    {
                        "name": "драма"
                    },
                    {
                        "name": "фэнтези"
                    },
                    {
                        "name": "криминал"
                    }
                ],
                "countries": [
                    {
                        "name": "США"
                    }
                ],
                "alternativeName": "The Green Mile",
                "enName": "Stephen King's The Green Mile",
                "names": [
                    {
                        "name": "Зеленая миля"
                    },
                    {
                        "name": "The Green Mile"
                    },
                    {
                        "name": "Roheline miil",
                        "language": "EE",
                        "type": null
                    },
                    {
                        "name": "Stephen King's The Green Mile",
                        "language": "US",
                        "type": "complete title"
                    },
                    {
                        "name": "Gurîn Mairu",
                        "language": "JP",
                        "type": null
                    },
                    {
                        "name": "To prasino mili",
                        "language": "GR",
                        "type": null
                    },
                    {
                        "name": "un milagro inesperado: la milla verde",
                        "language": "MX",
                        "type": null
                    },
                    {
                        "name": "綠里奇蹟",
                        "language": "HK",
                        "type": null
                    },
                    {
                        "name": "Зелена миља",
                        "language": "RS",
                        "type": null
                    },
                    {
                        "name": "Yeşil Yol",
                        "language": "TR",
                        "type": null
                    }
                ],
                "shortDescription": "В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга",
                "logo": {
                    "url": "https://avatars.mds.yandex.net/get-ott/239697/2a0000016f12f1eb8870b609ee94313774b2/orig"
                },
                "watchability": {
                    "items": [
                        {
                            "name": "Okko",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                            },
                            "url": "https://okko.tv/movie/the-green-mile?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                        },
                        {
                            "name": "Иви",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                            },
                            "url": "https://www.ivi.ru/watch/90283?utm_source=yandex&utm_medium=wizard"
                        },
                        {
                            "name": "PREMIER",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                            },
                            "url": "https://premier.one/show/16086?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                        },
                        {
                            "name": "Wink",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig"
                            },
                            "url": "https://wink.ru/media_items/54962552?utm_source=yandex&utm_medium=koldunschick&utm_content=name"
                        },
                        {
                            "name": "viju",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig"
                            },
                            "url": "https://viju.ru/filmy/zelenaya-milya?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex"
                        },
                        {
                            "name": "Смотрёшка",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig"
                            },
                            "url": "https://smotreshka.tv/vod/vipplay/619c836bbb003f90030b40bd?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju&utm_content=Viju"
                        },
                        {
                            "name": "НТВ-ПЛЮС Онлайн ТВ",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig"
                            },
                            "url": "https://ntvplus.tv/watch/23303-zelenaya-milya?utm_source=kinopoisk"
                        },
                        {
                            "name": "24ТВ",
                            "logo": {
                                "url": "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig"
                            },
                            "url": "https://24h.tv/contents/1999-the-green-mile-546324607066440278"
                        }
                    ]
                }
            }
        ],
        "total": 942434,
        "limit": 10,
        "page": 1,
        "pages": 94244
    }


    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    const [contentType, setContentType] = useState('movie')
    const [search, setSearch] = useState('')

    const lastElem = useRef()
    const observer = useRef()

    async function loadMovies(localPage = 1){
        // if (localPage === 1){
        //     const zxc = await getAllFilms.get(contentType, localPage, search)
        //     setMovies(zxc.data.docs)
        // } else {
        //     const zxc = await getAllFilms.get(contentType, localPage, search)
        //     setMovies([...movies, ...zxc.data.docs])
        //     console.log([...movies, ...zxc.data.docs])
        // }
        const zxc = await getAllFilms.get('cartoon', 2, 'волк')
        setMovies(zxc.data.docs)
        // console.log(zxc.data.docs)
    }

    const [fetching, isLoading] = useFetching(loadMovies)

    useEffect(() => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        var callback = function(entries) {
            if (entries[0].isIntersecting){
                fetching(page+ 1)
                setPage(page+ 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElem.current)
    }, [isLoading])

    useEffect( () => {
        // setPage(1)
        // fetching()
    }, [contentType, search])

    // async function asd(){
    //     const zxc = await getAllFilms.get('cartoon', 1, 'волк')
    //     const qwe = await getAllFilms.get('cartoon', 2, 'волк')
    //     console.log([...zxc.data.docs, ...qwe.data.docs])
    // }
    //
    // useEffect(() => {
    //     asd()
    // })

    return (
        <div>
            <PageTemplate
                setContentType={setContentType}
                setSearch={setSearch}
            >
                <Heading>Католог фильмов</Heading>
                {data2.docs.map(item => <Card key={item.id} data={item}/>)}
                {data2.docs.length >= 0 &&
                    <div ref={lastElem}></div>
                }
                {isLoading &&
                    <div className={classes.loader}><Loader/></div>
                }
            </PageTemplate>
        </div>
    )
}

export default MoviePage;