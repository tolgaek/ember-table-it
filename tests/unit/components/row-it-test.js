import { test, moduleForComponent } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('row-it');

test('it renders', function(assert) {
  // creates the component instance
  var component = this.subject({
    columns: [
      {
        label: 'ID',
        name: 'id'
      }
    ],
    rows: [
      {
        id: 3,
        name: 'test'
      }
    ]
  });
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');

});
