import Ember from "ember";

export default Ember.Controller.extend({
  columns: [
    {
      label: 'ID',
      name: 'id'
    },{
      label: 'Name',
      name: 'name'
    }, {
      label: 'Role',
      name: 'role'
    }]
});
