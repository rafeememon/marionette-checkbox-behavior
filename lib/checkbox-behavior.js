(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['backbone.marionette'], factory);
  } else {
    root.CheckboxBehavior = factory(root.Marionette);
  }
})(this, function (Marionette) {

  return Marionette.Behavior.extend({

    defaults: {
      selector: null,
      modelField: null
    },

    modelEvents: function() {
      var modelEvents = {};
      modelEvents['change:' + this.getOption('modelField')] = '_updateView';
      return modelEvents;
    },

    events: {
      'change @ui.el': '_updateModel'
    },

    ui: function() {
      return {el: this.getOption('selector')};
    },

    initialize: function() {
      if (!this.getOption('selector')) {
        throw new Error('Must specify selector in CheckboxBehavior');
      }
      if (!this.getOption('modelField')) {
        throw new Error('Must specify modelField in CheckboxBehavior');
      }
    },

    onRender: function() {
      this._updateView();
    },

    _updateView: function() {
      var modelField = this.getOption('modelField');
      var checked = !!this.view.model.get(modelField);
      this.ui.el.prop('checked', checked);
    },

    _updateModel: function() {
      var modelField = this.getOption('modelField');
      var checked = this.ui.el.is(':checked');
      this.view.model.set(modelField, checked);
    }

  });

});
