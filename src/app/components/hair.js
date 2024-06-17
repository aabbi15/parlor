import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";



export default function Hair() {
    return(
        <div>
        <section id='hair' className="block md:hidden fill-banner banner-1-bg">
        <div className="container ">
            <div className="row px-3 ">
            <div className="col-12 col-md-10 col-xl-5 ">
                        
                        <AnimateKeyframes
                            play
                            delay={1}
                            duration={2}
                            iterationCount="infinite"
                            direction="alternate"
                            keyframes={[
                                { 0: 'scale: 1' }, // 0%
                                { 50: 'scale: 1.02' }, // 50%
                                { 100: 'scale: 1.08' } // 100%
                              ]}
                        >
                            <div style={{ fontFamily: "Kurale" }} className=" text-center py-10 font-bold text-5xl" >
                            {" "}
                            Hair styled <br className="d-none d-xl-inline-block" />
                            to <span className=' text-amber-400'>  perfection</span> every single time   {" "}
                        </div>
                        </AnimateKeyframes>
                        <div className=' text-center text-lg py-10 mb-4'>
                            {" "}
                            With more than 20 years of experience, we continue to deliver haircuts and hair spas, setting the standard for excellence in the industry.{" "}
                        </div>
                        <div className='pr-10 w-screen flex  justify-center items-center'>
                        <a href="/menu/6" className="btn ">
                            Hair Services Catalog
                        </a>
                        </div>
                    </div>
            </div>
        </div>
    </section>



        <section id='hair' className="hidden md:block fill-banner banner-1-bg">
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-10 col-xl-5">
                        
                        <AnimateKeyframes
                            play
                            delay={1}
                            duration={2}
                            iterationCount="infinite"
                            direction="alternate"
                            keyframes={[
                                { 0: 'scale: 1' }, // 0%
                                { 50: 'scale: 1.02' }, // 50%
                                { 100: 'scale: 1.08' } // 100%
                              ]}
                        >
                            <h2 className="font-bold" style={{ fontFamily: "Kurale" }}>
                            {" "}
                            Hair styled <br className="d-none d-xl-inline-block" />
                            to <span className=' text-amber-400'>  perfection</span> every single time   {" "}
                        </h2>
                        </AnimateKeyframes>
                        <div className='text-lg mb-4'>
                            {" "}
                            With more than 20 years of experience, we continue to deliver haircuts and hair spas, setting the standard for excellence in the industry.{" "}
                        </div>
                        <a href="/menu/6" className="btn ">
                            Hair Services Catalog
                        </a>
                    </div>
            </div>
        </div>
    </section>

    </div>

    );
}