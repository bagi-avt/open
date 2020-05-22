import React from "react";
import * as axios from "axios";
import ItemCategorieContainer from "../../containers/ItemCategorieContainer";
import CalendarContainer from "../../containers/CalendarContainer";

import "./Home.css";
import { Input } from "antd";
import ScheduleContainer from "../../containers/ScheduleContainer";

const { Search } = Input;
const Home = ({
    listProducts,
    firstUrl,
    setProdect,
    betweenDate,
    setDataSchedule,
}) => {
    function test() {
        let arr = [];
        axios
            .get(
                `/api/frequencyProduct?from=${betweenDate.startDay}&to=${betweenDate.endDay}&channel=${firstUrl}`
            )
            .then((res) => {
                for (let key in res.data) {
                    arr.push({
                        productName: key,
                        productQuantity: res.data[key],
                        listTopics: [],
                    });
                }
            })
            .then(() => {
                for (let i = 0; i < arr.length; i++) {
                    axios
                        .get(
                            `/api/frequencyCategory?from=${betweenDate.startDay}&to=${betweenDate.endDay}&channel=${firstUrl}&product=${arr[i].productName}`
                        )
                        .then((res) => {
                            for (let key in res.data) {
                                arr[i].listTopics.push({
                                    topicName: key,
                                    topicQuantity: res.data[key],
                                });
                            }
                        });
                }
            })
            .then(() => {
                setProdect(arr);
            })
            .then(() => {
                axios
                    .get(
                        `/api/frequencyProductByDate?from=${betweenDate.startDay}&to=${betweenDate.endDay}&channel=${firstUrl}`
                    )
                    .then((res) => {
                        let arr = [];
                        let dates = Object.keys(res.data);

                        for (let i = 0; i < dates.length; i++) {
                            let keys = res.data[dates[i]];
                            let dict = {};
                            dict["name"] = dates[i];
                            for (let product in keys) {
                                dict[product] = res.data[dates[i]][product];
                            }
                            arr.push(dict);
                        }
                        setDataSchedule(arr);
                    });
            });
    }
    test();
    return (
        <div className="home">
            <div className="block-categories">
                <Search
                    className="input-search"
                    placeholder="Поиск по данной категории"
                    onSearch={(value) => console.log(value)}
                />
                <div className="wrapper-categories">
                    {listProducts.map((item, i) => (
                        <ItemCategorieContainer key={i} item={item} />
                    ))}
                </div>
            </div>
            <div className="block-schedule">
                <ScheduleContainer />
            </div>
            <div className="block-calendar">
                <h2>Настройки:</h2>
                <CalendarContainer />
            </div>
        </div>
    );
};

export default Home;
