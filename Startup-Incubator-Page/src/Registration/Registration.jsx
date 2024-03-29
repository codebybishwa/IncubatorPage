export default function Registration() {
    const imagesData = [
        {
            imageUrl: "https://vohincubator.org/wp-content/uploads/2023/08/network-graphic-overlay-banner-background-1536x960.jpg",
            text: "Networking Opportunity"
        },
        {
            imageUrl: "https://vohincubator.org/wp-content/uploads/2023/08/leader-authority-boss-coach-director-manager-concept-1536x960.jpg",
            text: "Exposure to Leaders & Mentors"
        },
        {
            imageUrl: "https://vohincubator.org/wp-content/uploads/2023/08/funding-invest-financial-money-budget-concept-1536x960.jpg",
            text: "Funding Opportunity"
        },
        {
            imageUrl: "https://vohincubator.org/wp-content/uploads/2023/08/handshake-close-up-executives-1536x960.jpg",
            text: "Partnership"
        },
        {
            imageUrl: "https://vohincubator.org/wp-content/uploads/2023/08/businessman-touching-glowing-increasing-arrow-business-profit-investment-growth-concept-1536x960.jpg",
            text: "Accelerate the Growth of Startup"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center  min-h-screen ">
            <h1 className="text-[#DFA440] text-4xl mb-6 mt-[2rem] font-bold">Register your startup with VOH Incubator</h1>
            <div className="mb-4 h-[600px] w-full  flex justify-center items-center">
                <img src="https://vohincubator.org/wp-content/uploads/2023/08/startup-new-business-plan-strategy-teamwork-concept-1-1536x864.jpg" className="h-[100%] w-[60%]" alt="" />
            </div>
            <h1 className="text-[#DFA440] text-3xl mb-6 mt-[2rem] font-bold">How Startups Benefit from Our Incubator?</h1>
            <div className="mb-4 flex justify-between items-start flex-wrap">
                {imagesData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center mr-4 mb-4">
                        <img src={data.imageUrl} className="w-auto h-auto max-h-[150px]" alt="" />
                        <p className="mt-2 text-lg">{data.text}</p>
                    </div>
                ))}
            </div>
            <h1 className="text-[#DFA440] text-3xl mb-6 mt-[2rem] font-bold">Selection Process of Startup for Incubator Program</h1>
            <div className="mb-4 h-[600px] w-full  flex justify-center items-center">
                <img src="https://vohincubator.org/wp-content/uploads/2023/08/Cream-and-Brown-Photographic-Beauty-Site-Launch-Website-1.png" className="h-[100%] w-[60%]" alt="" />
            </div>
            <div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_TACluzwMIc5OujZnQwF7wrM_6K2W1VXRcG9z-NP-g7Az4Q/viewform" >
                    <button className="bg-[#1C553B] hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-[2rem] mb-[2rem]">
                        Register your startup
                    </button>
                </a>

            </div>
        </div>
    );
}
