/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import axios from 'axios';
import Layout from '../../components/Layout';

const TMDB_API = 'cfe422613b250f702980a3bbf9e90716'

async function action() {
  const resp = await axios(`https://api.themoviedb.org/3/movie/157336?api_key=${TMDB_API}`);
  if (!resp.data) throw new Error('Failed to load the movies feed.');
  return {
    chunks: ['home'],
    title: 'Movie app',
    component: (
    	<Layout>
        	<Home movie={resp.data} />
        </Layout>
    ),
  };
}

export default action;
