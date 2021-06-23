const Popups = ({children,closePopup}) => {
        return (
                <div className="flex items-center justify-center">

            <div className="p-8 bg-white text-2xl Lobster flex items-center justify-center transform rounded-md shadow-lg shadow-none z-20 absolute top-20 m-10">
                    <span className="font-black text-xl font-sans text-red-600 absolute top-1 right-1" onClick={closePopup}>X</span>
                {children}
            </div>
                </div>
        );
    };
    
    export default Popups;
    