import DS from 'ember-data';
import Adapter from 'ember-cli-encore/adapter';
import Serializer from 'ember-cli-encore/serializer';

export default {
  name: 'ember-encore',
  initialize: function(container) {
    container.register('adapter:-encore', Adapter);
    container.register('serializer:-encore', Serializer);

    if (Ember.libraries) {
      Ember.libraries.register('ember-cli-encore', '0.0.1');
    }
  }
};
