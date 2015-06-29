import Ember from 'ember';

export default Ember.Component.extend({
  totalPages: function() {
    return this.get('rows').get('content.meta.total_pages');
  }.property('rows.content'),

  actions: {
    setPage: function(current) {
      this.sendAction('action', current);
    }
  }
});
