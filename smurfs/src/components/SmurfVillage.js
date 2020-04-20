import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchData } from "../actions";

const SmurfVillage = (props) => {
    console.log("props", props);
    return (
        <div className="smurf-village">
            <h2>Smurf Village</h2>
            {props.isLoading ? (
                <Loader
                    type="Circles"
                    color="#954F6F"
                    height={80}
                    width={80}
                    timeout={4000}
                />
            ) : (
                <div>
                    <button
                        onClick={() => {
                            props.fetchData();
                        }}
                    >
                        Smurf Village
                    </button>
                    {/* {props.error && <div>{props.error.message}</div>}
                    <div className="village-members">
                        {props.map((smurf) => {
                            return (
                                <div className="village-member">
                                    <h1>{smurf.name}</h1>
                                    <h3>Age:{smurf.age}</h3>
                                    <h3>Heigth:{smurf.height}</h3>
                                </div>
                            );
                        })}
                    </div> */}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: mapStateToProps.error,
    };
};

export default connect(mapStateToProps, { fetchData })(SmurfVillage);
