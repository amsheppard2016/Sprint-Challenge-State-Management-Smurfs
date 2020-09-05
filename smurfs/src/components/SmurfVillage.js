import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchData } from "../actions";

const SmurfVillage = (props) => {
    console.log("smurfvillage:props", props);

    useEffect(() => {
        props.fetchData();
        console.log("fetchdata");
    }, []);

    return (
        <div className="smurf-village">
            <h2>Smurf Village</h2>
            {props.isLoading ? (
                <Loader type="Circles" color="#954F6F" height={80} width={80} />
            ) : (
                <div>
                    {props.error && (
                        <div style={{ color: "red" }}>{props.error}</div>
                    )}

                    <div className="village-members">
                        {props.smurfs.map((smurf) => {
                            return (
                                <div
                                    className="village-member"
                                    key={smurf.name}
                                >
                                    <h1>{smurf.name}</h1>
                                    <h3>Age:{smurf.age}</h3>
                                    <h3>Height:{smurf.height}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error,
    };
};

export default connect(mapStateToProps, { fetchData })(SmurfVillage);
