import React from 'react'
import "./searchPage.css";
import VideoRow from "./VideoRow";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://reactjs.org/logo-og.png"
                verified
                channel="TopaTop "
                subs="990k"
                noOfVideos={232}
                description="you are going to deal with the great programming skils of all time stay tune dwith react"
            />
            <hr />
            <VideoRow
                title="Become a Master of Your Dreams."
                views="2.3m"
                subs="990k"
                channel="TopaTop"
                timestamp="3 days ago"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAmMqalXHyovTSIgeJieclLUZdOCBy80UpsQ&usqp=CAU"
                description="Meditation helps in coading here are the some tips in which you can enhence coading skills while doing meditation"
            />
            <VideoRow
                title="What is good for Mind."
                views="1.3m"
                subs="990k"
                channel="TopaTop"
                timestamp="2 days ago"
                image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190911190208/How-to-Become-A-Successful-Java-Developer.png"
                description="Give your brain a reboot"
            />

            <VideoRow
                title="Become a Master of Your Dreams."
                views="2.3m"
                subs="990k"
                channel="TopaTop"
                timestamp="3 days ago"
                image="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png"
                description="You can learn and earn with this tutorial"
            />
            <VideoRow
                title="JavaScript And React js."
                views="4.3m"
                subs="990k"
                channel="TopaTop"
                timestamp="1 days ago"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGTzFuGM7Rfo5fu3r6r30zH1IgD8jCgj29ZA&usqp=CAU"
                description="Look out for real time hacks"
            />
            <VideoRow
                title="Become a Master of React."
                views="2.3m"
                subs="990k"
                channel="TopaTop"
                timestamp="3 days ago"
                image="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png"
                description="Master your Skils in client side language"
            />
        </div>
    )
}

export default SearchPage
