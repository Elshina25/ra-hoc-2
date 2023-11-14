import React from "react";
import withWrapper from "./WithWrapper";
import Video from "./Video";
import Article from "./Article";

const VideoWithWrapper = withWrapper(Video);
const ArticleWithWrapper = withWrapper(Article);

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoWithWrapper {...item} key={item.id}/>
                );

            case 'article':
                return (
                    <ArticleWithWrapper {...item} key={item.id}/>
                );
        }
    });
};