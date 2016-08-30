/**
 reducer入口
 **/

 'use strict';

import { combineReducers } from 'redux';
import buttonDisabled from './buttonDisabled.js';

export default combineReducers({ buttonDisabled });
