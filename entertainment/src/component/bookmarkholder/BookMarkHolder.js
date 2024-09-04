import React from "react";
import Bookmark from "../bookmarkmovies/BookmarkMovie";
import TvSerialBookMark from "../tvserialbookmark/TvSerialBookMark";

export default function BookMarkHolder() {
  return (
    /* Bookholder conatins 2 component
  1. bookmark - for movie book holder which is saved in local storage
  2. TvserilaBookHolder - for tvshow list which is saved in local storage
  */

    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <Bookmark />
      </div>
      <div className="mt-20">
        <TvSerialBookMark />
      </div>
    </div>
  );
}
