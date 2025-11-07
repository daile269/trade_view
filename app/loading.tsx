
const Loading = () => {
    return (
        <div className="w-screen h-screen bg-black">
            <div className="fixed ml-[50vw] translate-x-[-50%]">
                <video autoPlay={true} muted loop id="myVideo" className="max-h-screen min-w-screen max-w-none " >
                    <source src={`/assets/videos/intro.mp4`} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
    )
}

export default Loading