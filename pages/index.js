import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Input from '../components/input';
import Popups from '../components/popup';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BackgroundSlider from 'react-background-slider';

export default function Home() {
    const [popup, setPopup] = useState(false);
    const [postData, setPostData] = useState(0);
    const [count, setcount] = useState(0);
    const [width, setWidth] = useState(0);
    const [posts, setPosts] = useState([]);
    const [fonts, setFonts] = useState(['Dancing', 'Lobster', 'Noto', 'Roboto', 'ZCOOL']);
    const [fontWeight, setfontWeight] = useState(['base', 'sm', 'lg', 'xl', 'xl2']);
    const [mt, setMt] = useState([1, 20, 4, 4, 8, 6, 7, 2, 9, 10, 12, 14, 16]);
    const [position, setposition] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']);
    const [mobilePosition, setMobilePosition] = useState([]);

    const [rotate, setRotate] = useState(['rotate-1', 'rotate-2', 'rotate-3', 'rotate-6', 'rotate-12', 'rotate-12', '-rotate-12', '-rotate-12', '-rotate-6', '-rotate-3', '-rotate-2', '-rotate-1']);
    const [color, setColor] = useState(['red', 'green', 'blue', 'purple', 'black']);

    const [chunked, setChunked] = useState([]);
    useEffect(async () => {
        setWidth(window.innerWidth);
        const background = Math.round(Math.random() * 17);
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        shuffleArray(position);

        // document.body.style.backgroundColor = color[background];
        // if(document.readyState){
        //     document.getElementById('message').style.color = color[background];
        // }
        const res = await fetch(`/api/post`);
        const data = await res.json();
        shuffleArray(data);
        console.log(data);

        setPosts(data.slice(0,12));
        if (window.innerWidth <= 768) {
            const result = new Array(Math.ceil(data.length / 4)).fill().map((_) => data.splice(0, 4));
            setChunked(result);
        }

        // Array.from({ length: Math.ceil(data.length / 4) }, (val, i) => {
        //     console.log(chunked);
        //     const slice = data.slice(i * 4, i * 4 + 4);
        //     setChunked(chunked.concat(data.slice(i * 4, i * 4 + 4)));
        // });
    }, [count]);

    const setCount = (data) => {
        console.log(count);
        setcount(data);
        console.log(data);
    };

    console.log(mobilePosition);
    //bg-bg${Math.round(Math.random() * 3)}
    const showPopup=(data)=>{
        setPostData(data);
        setPopup(true);
    }
    const closePopup=()=>{
        setPopup(false);
    }

    return (
        <div className="relative min-h-screen">
            <BackgroundSlider images={['1.jpeg', '2.jpg', '3.jpg']} duration={10} transition={2} />
            <div className={`pb-10  bg-blend-overlay bg-cover bg-opacity-60 bg-black min-h-screen`}>
                <Head>
                    <title>Wall Of Positivity</title>
                    <meta name="description" content="wall-of-positivity" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                {popup?<Popups closePopup={closePopup}>{postData}</Popups>:null}
                <div className="pt-24 xl:pt-36 w-full px-0 md:px-8 h-3/4 main overflow-y-scroll md:overflow-y-visible ">
                    {width <= 768 ? (
                        <Carousel showThumbs={false} autoPlay={true} interval={6000} showArrows={false} infiniteLoop={true} showStatus={false}>
                            {chunked.length &&
                                chunked.map((post, index) => {
                                    return (
                                        <div key={index}>
                                            {post.length &&
                                                post.map((onePost, index) => {
                                                    return (
                                                        <p  key={onePost._id} className={`opacity-60 my-8 mx-5 ml-8 bg-white ${color[Math.round(Math.random() * 4)]} post text-overflow max-w-20 transform min-h-8 bg-white p-3 rounded-md ${fonts[1]} ${fontWeight[4]}`} onClick={()=>showPopup(onePost.post)} >
                                                            {onePost.post}
                                                        </p>
                                                    );
                                                })}
                                        </div>
                                    );
                                })}
                        </Carousel>
                    ) : (
                        posts.length &&
                        posts.map((post, index) => {
                            return (
                                <div style={{ gridArea: position[index], background:"white" }} className={`opacity-60 flex items-center justify-center post transform rounded-md transition duration-500 ease-in-out hover:scale-110 shadow-lg hover:shadow-none`} key={post._id}>
                                    <p className={`opacity-100 bg-white ${color[Math.round(Math.random() * 4)]}  max-w-20  min-h-8 bg-white p-3 rounded-md text-center ${fonts[1]} ${fontWeight[4]}  message`}>{post.post}</p>
                                </div>
                                // font-${fonts[Math.round(Math.random() * 5)]}
                            );
                        })
                    )}
                    {console.log(posts)}
                </div>
                <div className="pb-2 absolute lg:flex flex-col bottom-0 w-full">
                    <Input setcount={setCount} />
                    <div className="flex flex-col2 absolute lg:right-32 right-10 lg:bottom-8 bottom-24 justify-between mt-3 lg:mt-5">
                    <a href="https://www.facebook.com/wopty.wall.of.positivity" className="ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </a>
                  
                    <a href="https://www.instagram.com/wall_of_positivity/">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                    </a>
                  
            </div>
                </div>
            </div>
        </div>
    );
}
//backgroundColor: color[Math.round(Math.random()*17)],
