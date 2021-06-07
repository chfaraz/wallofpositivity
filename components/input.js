import { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const Input = ({ setcount }) => {
    const [post, setPost] = useState('');
    const [picker, setPicker] = useState(false);
    const postData = async () => {
        if (post !== '') {
            await fetch('/api/post', {
                method: 'POST',

                body: JSON.stringify({
                    post: post,
                }),

                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        }
        setPost('');
        setcount(Math.random() * 300);
    };
    const onChange = (e) => {
        setPost(e.target.value);
    };

    const addEmoji = (emoji) => {
        console.log(emoji);
        setPost(post + emoji.native);
    };
    return (
        <div className="absolute bottom-0 w-full mb-3">
            <div className="flex justify-center pt-20">
                <div className=" lg:w-3/5 w-11/12 flex justify-center bg-gray-200 p-2 rounded-md">
                    <input type="text" className="w-3/5" onChange={(e) => onChange(e)} value={post} maxLength="200" />
                    <button className="lg:px-8 px-3 lg:py-2 bg-blue-400 ml-5 rounded-md" onClick={postData}>
                        Send
                    </button>
                    <button
                        className="lg:px-8 px-3 py-2 bg-black ml-5 rounded-md"
                        onClick={() => {
                            setPicker(!picker);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-smile" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="9" y1="10" x2="9.01" y2="10" />
                            <line x1="15" y1="10" x2="15.01" y2="10" />
                            <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="absolute bottom-24 lg:inset-x-2/3 inset-x-24">
                {picker ? (
                    <>
                        <Picker set="apple" onSelect={addEmoji} />
                    </>
                ) : null}
            </div>
        </div>
    );
};
export default Input;
