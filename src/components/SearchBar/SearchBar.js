/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
const isServer = typeof window === 'undefined'

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./SearchBar.css";

import history from "../../history";
import axios from 'axios'
import $ from "jquery";
isServer ? null : window.$ = $;

import SearchLogo from '../SearchLogo';
import SearchInput from '../SearchInput';

class SearchBar extends React.Component {
  constructor({ call }){
    super()
    this.changeMovie = call
    this.getMovie = this.getMovie.bind(this)
  }

  triggerChange(movie){
    this.changeMovie(movie)
  }

  getMovie(movieID){
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`)
    .then((resp)=>{
      this.triggerChange(resp.data)
    })
  }

  componentDidMount() {
    // Dynamic Imports
    if(!isServer){
      (async () => {
        const [typeahead, Bloodhound] =
          await Promise.all([
              import('typeahead.js'),
              import('bloodhound-js'),
          ]);
          // ========================= BLOODHOUND ==============================//
          let suggests = new Bloodhound({
            datumTokenizer: function(datum) {
              return Bloodhound.tokenizers.whitespace(datum.value);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
              url: 'https://api.themoviedb.org/3/search/movie?query=%QUERY&api_key=cfe422613b250f702980a3bbf9e90716',
              wildcard: '%QUERY',
              filter: function(movies) {
                // Map the remote source JSON array to a JavaScript object array
                return $.map(movies.results, function(movie) {
                  return {
                    value: movie.original_title, // search original title
                    id: movie.id // get ID of movie simultaniously
                  };
                });
              } // end filter
            } // end remote
          }); // end new Bloodhound

          suggests.initialize(); // initialise bloodhound suggestion engine

          //========================= END BLOODHOUND ==============================//

          //========================= TYPEAHEAD ==============================//
          // Instantiate the Typeahead UI
          $('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 2
          }, {source: suggests.ttAdapter(), display: 'value' }).on('typeahead:selected', function(obj, datum) {
            this.getMovie(datum.id)
          }.bind(this)); // END Instantiate the Typeahead UI
          //========================= END TYPEAHEAD ==============================//
      })()
    }
  }

  render(){
    return (
      <div className="search-container row">
        <div className="col-xs-10 col-xs-offset-1">
          <div className="col-xs-12">
            <SearchLogo />
            <SearchInput />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SearchBar);