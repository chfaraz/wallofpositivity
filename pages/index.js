import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Input from '../components/input';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
    const [count, setcount] = useState(0);
    const [width, setWidth] = useState(0);
    const [posts, setPosts] = useState([]);
    const [fonts, setFonts] = useState(['Dancing', 'Limelight', 'Lobster', 'Noto', 'Roboto', 'ZCOOL']);
    const [fontWeight, setfontWeight] = useState(['base', 'sm', 'lg', 'xl', '2xl', '3xl']);
    const [mt, setMt] = useState([1, 20, 4, 4, 8, 6, 7, 2, 9, 10, 12, 14, 16, 20]);
    const [position, setposition] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']);
    const [mobilePosition, setMobilePosition] = useState([]);

    const [rotate, setRotate] = useState(['rotate-1', 'rotate-2', 'rotate-3', 'rotate-6', 'rotate-12', 'rotate-12', '-rotate-12', '-rotate-12', '-rotate-6', '-rotate-3', '-rotate-2', '-rotate-1']);
    const [color, setColor] = useState(['#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE', '#0091EA', '#00B8D4', '#00BFA5', '#00C853', '#64DD17', '#FFD600', '#FFAB00', '#FF6D00', '#DD2C00', '#6D4C41', '#757575', '#263238', '#78909C']);

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

        document.body.style.backgroundColor = color[background];
        const res = await fetch(`/api/post`);
        const data = await res.json();
        shuffleArray(data);
        console.log(data);
        setPosts(data);
        if (window.innerWidth <= 580) {
            const result = new Array(Math.ceil(data.length / 4)).fill().map((_) => data.splice(0, 4));
            setChunked(result);
        }

        // Array.from({ length: Math.ceil(data.length / 4) }, (val, i) => {
        //     console.log(chunked);
        //     const slice = data.slice(i * 4, i * 4 + 4);
        //     setChunked(chunked.concat(data.slice(i * 4, i * 4 + 4)));
        // });
    }, [count]);

    useEffect(() => {
        console.log(posts);
    }, [posts]);
    console.log(position);

    const setCount = (data) => {
        console.log(count);
        setcount(data);
        console.log(data);
    };

    console.log(mobilePosition);
    //bg-bg${Math.round(Math.random() * 3)}
    return (
        <div className={`pb-10 bg${Math.round(Math.random() * 2) + 1} bg-blend-overlay bg-cover bg-opacity-40 bg-black`}>
            <Head>
                <title>Wall Of Positivity</title>
                <meta name="description" content="wall-of-positivity" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="pb-16 mt-1 w-full h-5/6 main overflow-y-scroll md:overflow-y-visible">
                {width <= 580 ? (
                    <Carousel showThumbs={false} autoPlay={true} showArrows={false}>
                        {chunked.length &&
                            chunked.map((post, index) => {
                                return (
                                    <div key={index}>
                                        {post.length &&
                                            post.map((onePost, index) => {
                                                return (
                                                    <p key={onePost._id} className={`bg-white text-black mt-20 post max-w-20 transform min-h-8 mx-8 bg-white p-3 rounded-md font-${fonts[Math.round(Math.random() * 5)]} text-${fontWeight[Math.round(Math.random() * 5)]}`}>
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
                            <div style={{ gridArea: position[index] }} key={post._id}>
                                <p className={`bg-white text-black mt-${mt[Math.round(Math.random() * 14)]} post max-w-20 transform min-h-8 mx-8 bg-white p-3 rounded-md font-${fonts[Math.round(Math.random() * 5)]} text-${fontWeight[Math.round(Math.random() * 5)]}`}>{post.post}</p>
                            </div>
                        );
                    })
                )}
                {console.log(posts)}
            </div>
            <div className="relative mt-20">
                <Input setcount={setCount} />
            </div>
        </div>
    );
}
//backgroundColor: color[Math.round(Math.random()*17)],
