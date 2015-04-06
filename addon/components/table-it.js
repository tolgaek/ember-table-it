import Ember from 'ember';

export default Ember.Component.extend({
  totalPages: function() {
    return this.get('rows').get('content.meta.total_pages');
  }.property(),
  actions: {
    setPage: function(current) {
      this.sendAction('action', current);
    }
  }
});
