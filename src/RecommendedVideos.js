import React from 'react'
import "./recommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Become a Master of Your Dreams."
                    views="2.3m views"
                    channel="TopaTop"
                    timestamp="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lotus_position.svg/480px-Lotus_position.svg.png"
                    image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190911190208/How-to-Become-A-Successful-Java-Developer.png"
                />
                <VideoCard
                    title="Become a Master of Your Dreams."
                    views="2.3m views"
                    channel="TopaTop"
                    timestamp="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lotus_position.svg/480px-Lotus_position.svg.png"
                    image="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png"

                />
                <VideoCard
                    title="Become a Master of Your Dreams."
                    views="2.3m views"
                    channel="TopaTop"
                    timestamp="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lotus_position.svg/480px-Lotus_position.svg.png"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAmMqalXHyovTSIgeJieclLUZdOCBy80UpsQ&usqp=CAU"

                />
                <VideoCard
                    title="Become a Master of Your Dreams."
                    views="2.3m views"
                    channel="TopaTop"
                    timestamp="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lotus_position.svg/480px-Lotus_position.svg.png"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGTzFuGM7Rfo5fu3r6r30zH1IgD8jCgj29ZA&usqp=CAU"

                />
                <VideoCard
                    title="Become a Master of Your Dreams."
                    views="2.3m views"
                    channel="TopaTop"
                    timestamp="3 days ago"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lotus_position.svg/480px-Lotus_position.svg.png"
                    image="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png"

                />

            </div>
        </div>
    )
}

export default RecommendedVideos
