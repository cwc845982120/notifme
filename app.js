'use strict';

var _notifmeSdk = require('notifme-sdk');

var _notifmeSdk2 = _interopRequireDefault(_notifmeSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// empty config = all providers are set to console.log
var notifmeSdk = new _notifmeSdk2.default({
    useNotificationCatcher: true
});
notifmeSdk.send({ sms: { from: '1623782183791239878', to: '+8615381257610', text: 'Hello, how are you?' } }).then(console.log);