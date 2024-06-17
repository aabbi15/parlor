import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";


const styles = StyleSheet.create({
    bounce: {
        animationName: bounce,
        animationDuration: '5s'
    }
})

export default function Bridal() {
    return (
        <div>
        <section id='bridal' className=" block md:hidden fill-banner banner-2-bg">
        <div className="container">
            <div className="row px-3">
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
                        <h2 className=" text-center py-10 font-bold text-5xl" style={{ fontFamily: "Kurale" }} >
                        {" "}
                        The Best <br className="d-none d-xl-inline-block" />
                        <span className='text-green-600' style={{textShadow:" h-shadow v-shadow blur-radius red"}}> Bridal Makeup</span>  in Town  {" "}
                    </h2>
                    </AnimateKeyframes>
                    <div className=' text-center text-lg py-3 mb-4'>
                        {" "}
                        We make your bridal dreams come true. Elegant makeup and hair done just right, for your special day.{" "}
                    </div>
                    <div className='pr-10 w-screen flex  justify-center items-center'>
                    <a href="/menu/bridal" className="btn">
                        View Bridal Packages
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </section>




        <section id='bridal' className="hidden md:block fill-banner banner-2-bg">
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
                            The Best <br className="d-none d-xl-inline-block" />
                            <span className='text-green-600' style={{textShadow:" h-shadow v-shadow blur-radius red"}}> Bridal Makeup</span>  in Town  {" "}
                        </h2>
                        </AnimateKeyframes>
                        <div className='text-lg mb-2'>
                            {" "}
                            We make your bridal dreams come true. Elegant makeup and hair done just right, for your special day.{" "}
                        </div>
                        <a href="/menu/bridal" className="btn">
                        View Bridal Packages
                    </a>
                    </div>
                </div>
            </div>
        </section>

        </div>
    )
}