(function($) {

  window.Album = Backbone.Model.extend({});

  window.AlbumView = Backbone.View.extend({

    initialize: function() {
      this.template = _.template($('#album-template').html());
    },

    render: function() {
      var renderedContent = this.template(this.model.toJSON()); //Combine template and data
      $(this.el).html(renderedContent); //Append to the DOM
      return this; //Return 'this'
    }

  });

})(jQuery);
