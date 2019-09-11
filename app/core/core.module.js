'use strict';

// Define the `core` module
angular.module('core', ['core.phone']);

require('./checkmark/checkmark.filter')
require('./phone/phone.module')
require('./phone/phone.service')