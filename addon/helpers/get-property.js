import Ember from 'ember';

export function getProperty(args) {
  var obj = args[0];
  var key = args[1].name;
  return obj.get(key);
}

export default Ember.HTMLBars.makeBoundHelper(getProperty);
