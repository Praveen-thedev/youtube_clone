import React from 'react'
import "./channelRow.css";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Avatar } from '@material-ui/core';

function ChannelRow({ image, channel, verified, subs, description, noOfVideos }) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineIcon />}</h4>
                <p>
                    {subs} Subscriber.{noOfVideos} videos
                </p>
                <p>{description}</p>

            </div>

        </div>
    )
}

export default ChannelRow
