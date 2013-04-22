(function($) {

  window.Album = Backbone.Model.extend({});

  window.AlbumView = Backbone.View.extend({

    intialize: function(){
      this.template = _.template($('#album-template'.html()));
    },

    render: function(){
      var renderedContent = this.template(this.model.toJSON());
      $(this.el).html(renderedContent);
    }

  });

})(jQuery);
