import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const propTypes = {
  icon: PropTypes.string,
};

const defaultProps = {
  icon: 'chevron-right',
};

const BreadcrumbSeparator = ({ icon }) => (
  <div className="rc-breadcrumb-separator">
    <Icon size="tiny" type={icon} />
  </div>
);

BreadcrumbSeparator.propTypes = propTypes;
BreadcrumbSeparator.defaultProps = defaultProps;

export default BreadcrumbSeparator;
