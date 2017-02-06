import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import StopWatch from 'StopWatch';

describe('StopWatch', () => {
  it('should exist', () => {
    expect(StopWatch).toExist();
  });
  it('clock rendering text', () => {
    var clock = TestUtils.renderIntoDocument(<StopWatch/>);
    var $el = $(ReactDOM.findDOMNode(clock));
    var actualText = $el.find('.outer-circle').text();
    expect(actualText).toBe('00:00:000');
  })
  it('clock rendering text', () => {
    var clock = TestUtils.renderIntoDocument(<StopWatch/>);
    var time = 60000;
    var expected = '01:00:000';
    var actual = clock.timeStringifyGenerator(time);
    expect(actual).toBe(expected);
  })
})
