import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <div >
        <p className="text-4xl">Eroor Page Not Found</p>
        <p>
          Kindly go to <Link to="/" className="text-red-400"> Home</Link> Page{" "}
        </p>
      </div>
    </div>
  );
}
