import React from 'react';


const StarRating = ({ rating }) => {
    // Ensure rating is between 0 and 5
    
    if(rating==4.5){
    return (
        <div className = "flex">
        <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-red-600"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-green-600"
            viewBox="0 0 16 16">
            <path
                d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
        </svg>



        
    </div>
    );
    }

    else if(rating==4) {
        return(
            <div className = "flex">
            <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-red-600"
                viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
    
            <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
    
            <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-green-600"
                viewBox="0 0 16 16">
                <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
        </div>
        )
    }

    //rating is 5
    else  {
        return(
            <div className = "flex">
            <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-red-600"
                viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className = "text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
    
          
        </div>
        )
    }
};

export default function Review(){

    const reviewdatas = [
        {   key:1,
            mainreview: (
                <>
                    Had an amazing experience at here! The staff was so {' '}  
                    <span className="bg-red-100">friendly</span> 
                    , I had a fantastic manicure and pedicure session.
                    
                </>
            ),
            myrating: 4,
            name: "Urvi Sethi",
            img: "/images/friend3.jpg",
        },

        {
            key:2,
            mainreview: (
                <>
                    I got my first ever hair color done here, and the results were fantastic. The products used were of
                    <span className="bg-red-100"> top-notch quality.  </span> 
                     
                </>
            ),
            myrating: 5,
            name: "Sharda Chhabra",
            img: "/images/friend1.jpg",
        },

        {
            key:3,
            mainreview: (
                <>
                    
                    <span className="bg-red-100"> Excellent makeup and hairstyle</span> 
                    {' '} done by Poonam. Would definitely recommend the place to family and friends.
                </>
            ),
            myrating: 4.5,
            name: "Rimpi Gulati",
            img: "/images/friend2.jpg",
        }
    ];
    
    
    const Reviewbox = ({reviewdata}) => {
        
        return(
            <div className = "px-3 md:px-0" id='review'>
                <div id={reviewdata.key} className = "flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 ring-pink-600 ring-2  md:px-14 rounded-2xl md:py-14 ">
                    <p className = "text-xl leading-normal ">
                        {reviewdata.mainreview}
                    </p>
                    <div className = "flex items-center mt-8 space-x-3">
                        <div className = "flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src={reviewdata.img} loading="lazy" />
                        </div>
                        <div>
                            <div className = "text-lg font-medium"> {reviewdata.name} </div>
                            <StarRating rating={reviewdata.myrating} />
                        </div>
                    </div>
                </div>

                
                
                
            </div>
        );

    }







    return(
        <div className = "pb-5">
    <div className = "container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
        {/* <div className = "text-sm font-bold tracking-wider text-indigo-600 uppercase">Testimonials</div> */}
        <h2 className = "max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-5xl "  style={{"fontFamily":"Kurale"}}>Here&#x27;s what our customers said</h2>
        <p className = "max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">Have a look at reviews from some of the customers who visited us at the Alisha Beauty Parlor.</p>
    </div>
    <div className = "container p-6 mx-auto mb-10 xl:px-0">
        <div className = "grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            
            

            

            {
                    reviewdatas.map(reviewdata => <Reviewbox reviewdata={reviewdata} />)
                }

        </div>
    </div>
</div>
    )
}