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
// external-global styles must be imported in your JS.
import normalizeCss from "normalize.css";
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import s from "./Home.css";
import moment from "moment";
import numeral from "numeral";
import history from "../../history";

import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Home extends React.Component {
  constructor({movie}){
    super()
    this.backdrop_path = movie.backdrop_path
    this.state = { movie : movie }
  }

  changeMovie = (movie) => {
    this.setState({ movie: movie })
  }

  componentDidMount(){
    let backdropIMG = `https://image.tmdb.org/t/p/original${this.backdrop_path}`

    if (typeof window !== undefined){
      document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
    }
  }

  componentDidUpdate(){
    let backdropIMG = `https://image.tmdb.org/t/p/original${this.state.movie.backdrop_path}`

    if (typeof window !== undefined){
      document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
    }
  }

  render(){
    return (
      <div style={{ position:'relative' }}>
      <div className="img-wrapper"></div>
      <div className="container-fluid">
        <SearchBar call={this.changeMovie} />
        <CSSTransitionGroup
          transitionName="startup"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={300}
          transitionAppearTimeout={1000}
          transitionAppear={true}
          transitionEnter={true}
          transitionLeave={true}>
          <Card movie={this.state.movie} />
        </CSSTransitionGroup>
      </div>
      </div>
    );
  }
}

Home.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(bootstrap, normalizeCss, s)(Home);