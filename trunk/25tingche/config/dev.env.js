'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://39.104.113.112:2088"'
  // API_ROOT: '"http://114.55.168.103:8040/"'
})
