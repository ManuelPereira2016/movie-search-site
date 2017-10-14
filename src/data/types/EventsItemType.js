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
  GraphQLInt,
  GraphQLNonNull as NonNull,
} from 'graphql';

const EventsItemType = new ObjectType({
  name: 'EventsItem',
  description: 'This is Event Info',
  fields: {
    title: { type: new NonNull(StringType) },
    type: { type: new NonNull(StringType) },
    start: {
      type: new NonNull(StringType),
      description: 'The date!',
    },
    end: {
      type: new NonNull(StringType),
      description: 'The date!',
    },
  },
});

export default EventsItemType;
