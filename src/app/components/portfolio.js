export default function Portfolio(){
    return (

        <section className = "bg-pink-100 d:bg-gray-900">
        <div className = "py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 w-">
            <div className = "mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className = "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 d:text-white">Our Potrfolio</h2>
                <p className = "font-light text-gray-700 sm:text-xl d:text-gray-400">Discover our bridal portfolio, a collection of beautiful photos showcasing our expertise in bridal hair and makeup, tailored to make your special day truly memorable.</p>
            </div> 
            <div className = "grid gap-8 lg:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className = "text-center text-gray-500 d:text-gray-400">
                    <img className = "mx-auto mb-4 w-52 h-52 md:w-96 md:h-96 rounded-full myanimate" src="/images/portfolio1.jpg"></img>
                   
                    <p className=""><span className="text-3xl font-bold"> “ </span>Flawless! They made my dream bridal look a reality.<span className="text-3xl font-bold"> ” </span></p>
                    <h3 className = "mb-1 text-2xl font-bold tracking-tight text-gray-900 d:text-white">
                        <a href="#">- Garima</a>
                    </h3>
                    
                </div>
                <div className = "text-center text-gray-500 d:text-gray-400">

                    <img className = "mx-auto mb-4 w-52 h-52 md:w-96 md:h-96 rounded-full myanimate" src="/images/portfolio2.jpg"></img>
                   
                    <p><span className="text-3xl font-bold"> “ </span>Perfection! Couldn't have asked for a better team.<span className="text-3xl font-bold"> ” </span></p>

                    <h3 className = "mb-1 text-2xl font-bold tracking-tight text-gray-900 d:text-white">
                        <a href="#">- Apoorna</a>
                    </h3>
                   
                </div>
                <div className = "text-center text-gray-500 d:text-gray-400">

                    <img className = "mx-auto mb-4 w-52 h-52 md:w-96 md:h-96 rounded-full myanimate" src="/images/portfolio3.jpg"></img>
                    
                    <p><span className="text-3xl font-bold"> “ </span> Exceeded all my expectations!<span className="text-3xl font-bold"> ” </span></p>

                    <h3 className = "mb-1 text-2xl font-bold tracking-tight text-gray-900 d:text-white">
                        <a href="#">- Sania</a>
                    </h3>
                   
                </div>
                <div className = "text-center text-gray-500 d:text-gray-400">
                    <img className = "mx-auto mb-4 w-52 h-52 md:w-96 md:h-96 rounded-full myanimate" src="/images/portfolio4.png"></img>
                    
                    <p><span className="text-3xl font-bold"> “ </span>Made my day truly memorable.<span className="text-3xl font-bold"> ” </span></p>
                    <h3 className = "mb-1 text-2xl font-bold tracking-tight text-gray-900 d:text-white">
                        <a href="#">- Aastha</a>
                    </h3>
                   
                </div>
              
            </div>  
        </div>
      </section>
    )
}