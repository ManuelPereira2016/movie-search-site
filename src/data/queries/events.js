/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import EventsItemType from '../types/EventsItemType';
import fs from 'fs';

let items = [];

const events = {
  type: new List(EventsItemType),
  resolve() {
    fs.readFile('./public/db.json', 'utf8', (err, data) => {
      if (err) throw err; // we'll not consider error handling for now
      data = JSON.parse(data).data;
      items = [];

      if (data) {
        data.classes.map(c => {
          items.push({
            title: c.class_name,
            type: 'Classes',
            start: new Date(`${c.date} ${c.starttime}`),
            end: new Date(`${c.date} ${c.endtime}`),
          });
        });

        data.events.map(e => {
          items.push({
            title: e.name,
            type: 'Events',
            start: new Date(`${e.startdate} ${e.starttime}`),
            end: new Date(`${e.enddate} ${e.endtime}`),
          });
        });

        return items;
      }
      return items;
    });

    return items;
  },
};

export default events;
