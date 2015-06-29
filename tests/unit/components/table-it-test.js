import { test, moduleForComponent } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('table-it', 'TableItComponent', {
  needs: ['component:row-it', 'component:header-it', 'component:pagination-pager']
});

test('it renders', function(assert) {
  var component = this.subject();

  // creates the component instance
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
