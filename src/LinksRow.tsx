import React from "react";
import Link from "./Link";

const LinksRow: React.FC = () => {
  return (
    <div className="links">
      <div style={{ display: "flex", justifyContent: "center"}}>
        <Link url="https://example.com" label="Link 1" />
        <Link url="https://example.com" label="Link 2" />
        <Link url="https://example.com" label="Link 3" />
      </div>
    </div>
  );
};

export default LinksRow;
