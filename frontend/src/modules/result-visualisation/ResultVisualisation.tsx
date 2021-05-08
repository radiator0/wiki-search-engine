import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IMatchParams {
  id: string;
}

interface IResultVisualisationProps extends RouteComponentProps<IMatchParams> {}

export default function ResultVisualisation(props: IResultVisualisationProps) {
  return <React.Fragment></React.Fragment>;
}
