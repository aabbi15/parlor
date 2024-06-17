export default function Brands() {

    const logos = [
        { url: '/images/brand1.png' },
        { url: '/images/brand2.png' },
        { url: '/images/brand3.png' },
        { url: '/images/brand4.png' },
    ]

    return (
        <section className="bg-white">
            <div className="items-center py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 style={{ fontFamily: "Kurale" }} className="  animate-bounce mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl items-center"> Our Partner Brands</h2>
                <div key = {"ok"} className="  grid grid-cols-2 gap-8  text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center">
                    {logos.map(logo => {
                        return (
                            <div className="flex justify-center items-center myanimate " key = {logos.url}>
                                <img src={logo.url} alt="logo"  className="object-contain h-24 mx-auto" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
