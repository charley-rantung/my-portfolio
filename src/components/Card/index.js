import React, { Children, useId } from "react";
import "./card.scss";

// Image
export const CardImg = ({ children }) => {
  return <div className="card--image">Card</div>;
};

// Header //
export const CardHeader = ({ children }) => {
  return <div className="card--header">{children}</div>;
};
// Body //
export const CardBody = ({ children }) => {
  return <div className="card--body">{children}</div>;
};
// Footer //
export const CardFooter = ({ children }) => {
  return <div className="card--footer">{children}</div>;
};

// Title
export const CardTitle = ({ children }) => {
  return <div className="card--title">{children}</div>;
};

// Subtitle
export const CardSubtitle = ({ children }) => {
  return <div className="card--subtitle">{children}</div>;
};

// Text
export const CardText = ({ children }) => {
  return <p className="card--text">{children}</p>;
};

// Link
export const CardLink = ({ href = "", children }) => {
  return (
    <a href={href} target={"_blank"} className="card--link">
      {children}
    </a>
  );
};
/* =============================================================== */

export default function Card({ children }) {
  const id = useId();
  return (
    <div id={id} className="card">
      {children}
    </div>
  );
}
