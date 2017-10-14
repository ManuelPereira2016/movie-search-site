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
import s from "./Card.css";
import moment from "moment";
import numeral from "numeral";
import history from "../../history";

import PosterCard from '../PosterCard'
import CardContent from '../CardContent'

const Card = ({ movie}) => {
  let {
    poster_path
  } = movie;

  let poster_image = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <div className="col-xs-12">
            <div id="main">
              <PosterCard image={poster_image} />
              <CardContent movie={movie} />
            </div>
          </div>
        </div>
      </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(s)(Card);