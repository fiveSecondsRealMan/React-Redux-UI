/**
  CheckboxGroup(复选框容器组件)
**/

'use strict';

import React, { Component, PropTypes } from 'react';
import { class2type } from 'utils';

class CheckboxGroup extends Component {
  formatData() {
    const { data } = this.props;

    // 如果data是对象
    if (class2type(data) === 'object') {

    }
  }

  renderItems() {

  }

  render() {

  }

}

CheckboxGroup.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  fetch: PropTypes.object,
  order: PropTypes.oneOf([
    'horizontal',
    'vertical'
  ]),
  changeEventHandle: PropTypes.func
};

CheckboxGroup.defaultProps = {
  data: [],
  order: 'horizontal',
  checked: false,
  readOnly: false
};

export default CheckboxGroup;
