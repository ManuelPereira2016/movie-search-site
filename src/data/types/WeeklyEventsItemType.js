/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const WeeklyEventsItemType = new ObjectType({
  name: 'WeeklyEventsItem',
  fields: {
    title: { type: new NonNull(StringType) },
    type: { type: new NonNull(StringType) },
    dayofweek: { type: new NonNull(StringType) },
  },
});

export default WeeklyEventsItemType;
