'use strict';

const AppConfig = require('./configuration');

const lan = AppConfig.readSettings('language');

let Common;
if (lan === 'en_US') {
  Common = require('./common_en');
} else {
  Common = require('./common_cn');
}

module.exports = Common;
