import React, { useState } from "react";
import ItemTopics from "../ItemTopics/ItemTopics";
import "./ItemCategorie.css";
const ItemCategorie = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="button-categotie"
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <div className="button-categotie-text">
                {props.item.productName}
                <div>
                    {isOpen &&
                        props.item.listTopics.map((item, i) => (
                            <ItemTopics key={i} item={item} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ItemCategorie;
