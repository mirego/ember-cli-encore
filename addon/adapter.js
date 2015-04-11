import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  defaultSerializer: '-encore',

  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  },

  ajaxError: function(jqXHR) {
    var error = this._super(jqXHR);

    if (jqXHR && jqXHR.status === 422) {
      var data = JSON.parse(jqXHR.responseText);
      var errors = data.errors.reduce(function(memo, errorGroup) {
        memo[errorGroup.field] = errorGroup.types;
        return memo;
      }, {});

      return new DS.InvalidError(errors);

    } else {
      return error;
    }
  }
});
