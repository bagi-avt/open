import React from "react";
import "./ItemTopics.css";
const ItemTopics = (props) => {
    return <div className="item-topics">{props.item.topicName}</div>;
};

export default ItemTopics;
