import Ember from "ember";

export default Ember.Controller.extend({
  columns: [
    {
      name: 'ID',
      map: 'id',
      width:40
    },{
      name: 'Name',
      map: 'name',
      width:30
    }],
  rows: [
    {
      id: 1,
      name: 'tolga'
    }
  ]
});
