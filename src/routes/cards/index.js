/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Cards from './Cards';
import Layout from '../../components/Layout';
import moment from 'moment'

async function action(fetch) {
  const context = Object.assign({}, fetch);
  fetch = fetch.fetch;
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `{events{title,type,start,end}}`,
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.events) throw new Error('Failed to load the events feed.');

  let filtered = [];

  if(context.params.date){
    filtered = data.events.filter( ev => {
     return ( moment(ev.start).format('YYYY-MM-DD') == context.params.date );
    });
  }

  return {
    chunks: ['cards'],
    title: 'Day Events',
    component: (
      <Layout>
        <Cards events={ context.params.date ? filtered : data.events } />
      </Layout>
    ),
  };
}

export default action;
