/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import WeeklyEventsItemType from '../types/WeeklyEventsItemType';
import fs from 'fs';

let items = [];

const weekly_daily_events = {
  type: new List(WeeklyEventsItemType),
  resolve() {
    fs.readFile('./public/db.json', 'utf8', (err, data) => {
      if (err) throw err; // we'll not consider error handling for now
      data = JSON.parse(data).data;
      items = [];

      if (data) {
        data.facilities.map(c => {
          items.push({
            title: c.facility_name,
            type: 'Facilities',
            dayofweek: c.dayofweek,
          });
        });

        return items;
      }
      return items;
    });

    return items;
  },
};

export default weekly_daily_events;
