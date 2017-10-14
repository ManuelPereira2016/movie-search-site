/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./PosterCard.css";
import history from "../../history";

const PosterCard = ({ image }) => {
  let poster_image = image;

  return (
    <div className="poster-image col-xs-5">
      <img src={poster_image} />
    </div>
  );
};

PosterCard.propTypes = {
  image: PropTypes.string.isRequired
};

export default withStyles(s)(PosterCard);