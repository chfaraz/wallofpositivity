const Header = () => {
    return (
        <div className="px-16 pb-4 lg:pb-0 flex fixed justify-between pt-5 z-10 bg-black w-full">
            <img src="/logo.png" alt="logo" className="lg:w-20 lg:h-20 w-14 h-14 lg:mb-5" />
            <div className="flex justify-between mt-3 lg:mt-5 w-32">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
            </div>
            {/* <div className="text-center text-4xl font-bold py-5 text-white">Wall Of Positivity</div>; */}
        </div>
    );
};

export default Header;
