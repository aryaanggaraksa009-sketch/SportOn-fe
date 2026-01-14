const HeroSection = () => {
    return (
        <section id="hero-section" className="container mx-auto h-screen flex">
            <div className="relative self-center">
                <div className="relative ml-40 relative w-full">
                    <div className="text-primary italic">
                        Friday Sale, 50%
                    </div>
                    <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797D1] bg-clip-text text-transparent">WEAR YOUR <br/> TOP-QUALITY <br/>SPORTSWEAR</h1>
                    <p className="mt-10 leading-loose">
                        Engineered for endurance and designed for speed. Experience gear <br/> that moves as fast as you do. Premium fabrics. Unmatched comfort. <br/> Limitless motion.
                    </p>
                    <div className="flex gap-5">
                        <button>select</button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HeroSection;