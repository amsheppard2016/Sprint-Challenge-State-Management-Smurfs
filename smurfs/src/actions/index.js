import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";
export const DATA_FETCH_ERROR = "DATA_FETCH_ERROR";

export const POST_DATA = "POST_DATA";
export const DATA_POST_SUCCESS = "DATA_POST_SUCCESS";
export const DATA_POST_ERROR = "DATA_POST_ERROR";

export const fetchData = () => (dispatch) => {
    dispatch({
        type: FETCH_DATA,
    });
    axios
        .get("http://localhost:3333/smurfs")
        .then((res) => {
            console.log("action:asiox:then:res", res.data);
            const smurfs = res.data.map((smurf) => {
                return {
                    name: smurf.name,
                    age: smurf.age,
                    height: smurf.height,
                };
            });
            console.log("actions:axios:then:res:smurfs", smurfs);
            dispatch({ type: DATA_FETCH_SUCCESS, payload: smurfs });
        })
        .catch((err) => {
            console.log("action:asiox:catch:err", err);
            dispatch({ type: DATA_FETCH_ERROR, payload: err.message });
        });
};

export const postData = (smurf) => (dispatch) => {
    dispatch({
        type: POST_DATA,
    });
    console.log("postdatasmurf", smurf);
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then((res) => {
            console.log("action:asiox:post:then:res", res.data);
            dispatch({ type: DATA_POST_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("action:asiox:post:catch:err", err);
            dispatch({ type: DATA_POST_ERROR, payload: err.message });
        });
};
