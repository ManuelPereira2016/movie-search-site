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
import s from "./SearchInput.css";
import history from "../../history";

const SearchInput = () => {
  return (
    <div className="col-md-7">
      <div className="form-group">
        <input
          type="text"
          placeholder="Search movie title..."
          className="form-control typeahead"
        />
      </div>
    </div>
  );
};

export default withStyles(s)(SearchInput);