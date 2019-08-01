import React from "react";
import loadingGif from "./loading.gif";

export const Loading: React.FunctionComponent = () => (
  <img src={loadingGif} alt="Loading…" />
);

export default Loading;
