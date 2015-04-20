describe('marionette-checkbox-behavior', function() {

  CheckboxView = Marionette.ItemView.extend({
    template: function() {
      return '<input type="checkbox">';
    },
    ui: {
      checkbox: '> input'
    },
    behaviors: [
      {
        behaviorClass: CheckboxBehavior,
        selector: '> input',
        modelField: 'checked'
      }
    ]
  });

  before(function() {
    this.region = new Marionette.Region({el: '#fixture'});
    this.setupView = function (model) {
      var view = new CheckboxView({model: model});
      this.region.show(view);
      return view;
    }
  });

  after(function() {
    this.region.reset();
  });

  describe('initial state', function () {
    it('should be unchecked when the value is false', function() {
      var model = new Backbone.Model({checked: false});
      var view = this.setupView(model);
      expect(view.ui.checkbox.is(':checked')).to.be.false;
    });
    it('should be checked when the value is true', function() {
      var model = new Backbone.Model({checked: true});
      var view = this.setupView(model);
      expect(view.ui.checkbox.is(':checked')).to.be.true;
    });
  });

  describe('changing state from model', function() {
    it('should be checked when the value changes to true', function() {
      var model = new Backbone.Model({checked: false});
      var view = this.setupView(model);
      model.set('checked', true);
      expect(view.ui.checkbox.is(':checked')).to.be.true;
    });
    it('should be unchecked when the value changes to false', function() {
      var model = new Backbone.Model({checked: true});
      var view = this.setupView(model);
      model.set('checked', false);
      expect(view.ui.checkbox.is(':checked')).to.be.false;
    });
  });

  describe('changing state from DOM', function() {
    it('should change to true when checking', function() {
      var model = new Backbone.Model({checked: false});
      var view = this.setupView(model);
      view.ui.checkbox.click();
      expect(model.get('checked')).to.be.true;
    });
    it('should change to false when unchecking', function() {
      var model = new Backbone.Model({checked: true});
      var view = this.setupView(model);
      view.ui.checkbox.click();
      expect(model.get('checked')).to.be.false;
    });
  });

});
