import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('resolve-conflicts-page', 'Integration | Component | resolve conflicts page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{resolve-conflicts-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#resolve-conflicts-page}}
      template block text
    {{/resolve-conflicts-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
