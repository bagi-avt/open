import React, { PureComponent } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
let data = [
    {
        name: "15:05:2020",
        "Тарифный план": 2,
        Кредит: 1,
        "Дебетовая карта": 1,
        Банкоматы: 1,
        "Контактный центр": 1,
        "Зарплатный проект ЮЛ": 0,
        "Веб-сайт": 1,
        "Мобильный банк": 0,
    },
    {
        name: "16:05:2020",
        Кредит: 2,
        Банкоматы: 0,
        "Зарплатный проект ЮЛ": 0,
        "Веб-сайт": 0,
        "Дебетовая карта": 0,
        "Тарифный план": 0,
        "Контактный центр": 1,
        "Мобильный банк": 1,
    },
    {
        name: "17:05:2020",
        Кредит: 0,
        "Веб-сайт": 0,
        "Тарифный план": 0,
        "Дебетовая карта": 2,
        Банкоматы: 2,
        "Контактный центр": 1,
        "Мобильный банк": 1,
        "Зарплатный проект ЮЛ": 0,
    },
    {
        name: "18:05:2020",
        "Веб-сайт": 0,
        Банкоматы: 0,
        "Контактный центр": 0,
        "Дебетовая карта": 0,
        "Тарифный план": 5,
        "Мобильный банк": 5,
        Кредит: 2,
        "Кредитная карта": 0,
        "Зарплатный проект ЮЛ": 1,
        "Call-центр": 0,
    },
    {
        name: "19:05:2020",
        Кредит: 0,
        "Кредитная карта": 10,
        "Веб-сайт": 0,
        Банкоматы: 0,
        "Дебетовая карта": 0,
        "Мобильный банк": 0,
        "Интернет-банк": 4,
        "Call-центр": 4,
        "Тарифный план": 3,
        "Зарплатный проект ЮЛ": 1,
        "Контактный центр": 1,
    },
    {
        name: "20:05:2020",
        Кредит: 0,
        "Контактный центр": 0,
        "Кредитная карта": 0,
        "Мобильный банк": 0,
        "Call-центр": 0,
        "Дебетовая карта": 0,
        "Тарифный план": 0,
        Банкоматы: 0,
        "Интернет-банк": 1,
        "Зарплатный проект ЮЛ": 1,
        "Веб-сайт": 1,
    },
];

export default class Schedule extends PureComponent {
    render() {
        //let data = JSON.stringify(this.props.dataSchedule);
        //console.log(this.props.listProducts[0].productName);
        return (
            <LineChart
                width={880}
                height={445}
                //data={this.props.dataSchedule || data}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {this.props.listProducts.map((item, i) => (
                    <Line
                        type="monotone"
                        dataKey={item.productName}
                        key={i}
                        stroke={
                            "#" +
                            Math.floor(Math.random() * 16777215).toString(16)
                        }
                    />
                ))}
            </LineChart>
        );
    }
}
