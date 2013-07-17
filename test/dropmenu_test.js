(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  var $DOM = $( '#qunit-fixture' ),
      $NAV = $DOM.children('div'),
      $LIST = $NAV.children('li');

  module('jQuery#dropmenu', {
    // This will run before each test in this module.
    setup: function() {
      this.elem = $NAV;
      this.elem.list = $LIST;
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elem.dropmenu(), this.elem, 'should be chainable');
  });

}(jQuery));
