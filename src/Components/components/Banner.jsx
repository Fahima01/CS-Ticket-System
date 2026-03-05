import React from 'react';
import image2 from '../../assets/image2.png';
import image1 from '../../assets/Group-1.png';

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <section className='w-full bg-[#F5F5F5] py-10'>
            <div className="max-w-7xl mx-auto px-4">
                {/* banner-cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                        className="h-50
             rounded-lg 
             text-base-100
             flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `url(${image2}),url(${image1}),linear-gradient(to right, #632EE3, #9F62F2)`,
                            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                            backgroundPosition: "left center, right center, center",
                            backgroundSize: "auto, auto, cover"
                        }}
                    >
                        <p className="text-xl">In-Progress</p>
                        <p className="text-5xl font-bold">{inProgressCount}</p>
                    </div>

                    <div
                        className="h-50 
             rounded-lg 
             text-base-100
             flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `url(${image2}),url(${image1}),linear-gradient(to right, #54CF68, #00827A)`,
                            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                            backgroundPosition: "left center, right center, center",
                            backgroundSize: "auto, auto, cover"
                        }}
                    >
                        <p className="text-xl">Resolved</p>
                        <p className="text-5xl font-bold">{resolvedCount}</p>
                    </div>
                </div>
            </div>
            {/* ticket section */}
        </section>

    );
};

export default Banner;