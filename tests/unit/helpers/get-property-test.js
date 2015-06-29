import {
  getProperty
} from '../../../helpers/get-property';
import { module, test } from 'qunit';


// Replace this with your real tests.
test('get-property works', function(assert) {
  var result = getProperty([{
    get: function() {
      return 'test';
    }
  }, {
    name: 'key'
  }]);
  
  assert.equal(result, 'test');
});
