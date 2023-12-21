import React from "react";
import HashLoader from "react-spinners/HashLoader";

const PreLoader = (props) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#050505]">
      <HashLoader
        color={"#FFBF00"}
        loading={props.loading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default PreLoader;
