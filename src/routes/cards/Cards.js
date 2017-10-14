/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Cards.css';
import moment from 'moment';

class Cards extends React.Component {
  static propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    let i = 0;
    return (
      <div className={s.root} style={{ height: '650px', marginTop: '20px' }}>
        <div className={s.container}>
          {this.props.events.map(ev => (
            <div key={i++} className="col-sm-4 col-xs-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>{ev.type}</h4>
                </div>
                <div className="panel-body">
                  <p className="lead">{ev.title}</p>
                  <p className="time-meta">
                    Start time: {ev.start} /
                    End time: {ev.end}
                  </p>
                  <p className="text-justify break-words" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Cards);
