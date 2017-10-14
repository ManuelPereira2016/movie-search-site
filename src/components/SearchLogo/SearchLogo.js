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
import s from "./SearchLogo.css";
import history from "../../history";

const SearchLogo = () => {
  return (
    <div className="col-xs-5" style={{ paddingLeft: "0px" }}>
    <a href="https://www.themoviedb.org">
      <img
        className="logo"
        src="https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg"
      />
    </a>
    </div>
  );
};

export default withStyles(s)(SearchLogo);