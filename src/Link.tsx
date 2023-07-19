import React from "react";

interface LinkProps {
  url: string;
  label: string;
}

const Link: React.FC<LinkProps> = ({ url, label }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="box" onClick={handleClick}>
      {label}
    </div>
  );
};

export default Link;
