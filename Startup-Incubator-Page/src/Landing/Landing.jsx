import NavBar from "../Components/NavBar/NavBar";


export default function Landing() {
    return (
        <div className="landing-container">
            <NavBar />
            <div className="video-background">
                <video className="video w-full" autoPlay loop muted>
                    <source src="https://vohincubator.org/wp-content/uploads/2023/07/Video-2.mp4#t=0,6" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
