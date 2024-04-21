import React from "react";
import PropTypes from "prop-types";
import { IconBase } from "./IconStyles";

const Icon = ({ iconPath, viewBox = "0 0 24 24" }) => (
  <IconBase viewBox={viewBox}>
    <path d={iconPath} />
  </IconBase>
);

Icon.propTypes = {
  iconPath: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
};

export default Icon;