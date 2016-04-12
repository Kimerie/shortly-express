Shortly.LinkView = Backbone.View.extend({
  className: 'link',

  template: Templates['link'],

  events: {
    'click': 'All Links'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
