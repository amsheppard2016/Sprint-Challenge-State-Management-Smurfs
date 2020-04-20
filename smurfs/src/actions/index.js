import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";
export const DATA_FETCH_ERROR = "DATA_FETCH_ERROR";

// export const POST_DATA = "POST_DATA";
// export const DATA_POST_SUCCESS = "DATA_POST_SUCCESS";
// export const DATA_POST_ERROR = "DATA_POST_ERROR";

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
            dispatch({ type: DATA_FETCH_SUCCESS, payload: smurfs });
        })
        .catch((err) => {
            console.log("action:asiox:catch:err", err);
            dispatch({ type: DATA_FETCH_ERROR, payload: err.message });
        });
};

// export const postData = () => () => {};
