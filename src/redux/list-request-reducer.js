import * as types from "./types";
//import * as axios from "axios";

let initialState = {
    listProducts: [],
    dataSchedule: [],
    firstUrl: "Бизнес-портал",
    search: "",
    betweenDate: { startDay: "15:05:2020", endDay: "20:05:2020" },
};

const listRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INPUT_SEARCH_VALUE:
            return {
                ...state,
            };
        case types.SET_PRODUCTS:
            console.log(JSON.stringify(action.products));
            return {
                ...state,
                listProducts: action.products,
            };
        case types.SET_DATA_SCHEDULE:
            return {
                ...state,
                dataSchedule: action.data,
            };
        case types.SET_NEW_URL:
            return {
                ...state,
                firstUrl: action.newUrl,
            };
        default:
            return state;
    }
};

export const inputSearchValueActionCreater = (text) => ({
    type: types.INPUT_SEARCH_VALUE,
    text,
});
export const setProdectActionCreate = (products) => ({
    type: types.SET_PRODUCTS,
    products,
});
export const setDataScheduleActionCreate = (data) => ({
    type: types.SET_DATA_SCHEDULE,
    data,
});
export const setNewUrlActionCreate = (newUrl) => ({
    type: types.SET_NEW_URL,
    newUrl,
});
export default listRequestReducer;
