"use client";

import React from "react";
import ComicCardProps from "./ComicCardProps";
import VerticalComicCard from "./VerticalComicCard";
import HorizonComicCard from "./HorizonComicCard";

export default function ComicCard(props: ComicCardProps) {
  if (props.horizon) {
    return <HorizonComicCard {...props} />;
  }

  return <VerticalComicCard {...props} />;
}
