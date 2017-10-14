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
import s from "./CardContent.css";
import moment from "moment";
import numeral from "numeral";
import history from "../../history";

const CardContent = ({ movie }) => {
  let {
    backdrop_path,
    original_title,
    overview,
    poster_path,
    popularity,
    release_date,
    runtime,
    vote_average,
    tagline,
    revenue
  } = movie;

  let poster_image = `https://image.tmdb.org/t/p/w500${poster_path}`;

  if(overview.length > 330){
    overview = overview.slice(0,330) + ' ...'
  }

  return (
    <div className="col-xs-7 card-content" style={{ paddingLeft: "0px" }}>
      <div className="col-xs-12">
        <div className="form-group"><h1>{original_title}</h1></div>
        <div className="form-group"><span className="tagline" >{tagline}</span></div>
        <div className="form-group" style={{ marginBottom: '40px' }}><p>{overview}</p></div>
      </div>
      <div className="form-group">
        <div className="col-xs-6">
          <div className="form-group">
            <label className="">Original Release:</label>
            <span className="tagline">{moment(release_date).format("YYYY-MM-DD")}</span>
          </div>
          <div className="form-group">
            <label className="">Box Office:</label>
            <span className="tagline">{numeral(revenue).format("($0,0)")}</span>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="form-group">
            <label className="">Running Time:</label>
            <span className="tagline">....</span>
          </div>
          <div className="form-group">
            <label className="">Vote Average:</label>
            <span className="tagline">....</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// CardContent.propTypes = {
//   movie: PropTypes.shape({
//     backdrop_path: PropTypes.string.isRequired,
//     original_title: PropTypes.string.isRequired
//   }).isRequired
// };

export default withStyles(s)(CardContent);