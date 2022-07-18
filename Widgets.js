import React from 'react';
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets"><h2>Widgets</h2>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div classsName="widget__widgetContainer">
                <h2>What's happening</h2>
                {/* first tweet on whats happening */}
                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                {/* whole timeline tweets by a person  */}
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{ height: 400 }}
                />
                {/* last tweet button on widgets */}
                <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
                />
            </div>
        </div>
    );
}

export default Widgets;