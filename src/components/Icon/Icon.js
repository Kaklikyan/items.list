import React, { Component } from 'react';
import PropTypes from 'prop-types';

const GLYPHS = {
  active: require('../../images/active.svg'),
  arrowRight: require('../../images/arrow-right.svg'),
  help: require('../../images/help.svg')
}

class Icon extends Component {
  static propTypes = {
    glyph: PropTypes.object.isRequired
  }

  render() {
    const glyph = this.props.glyph;
    const fill = this.props.fill || '#dcd4dc';
    const stroke = this.props.stroke || '';
    const strokeWidth = this.props.strokeWidth || '1px';
    const width = this.props.width ? `${this.props.width}px` : '24px';
    const height = this.props.height ? `${this.props.height}px` : '24px';

    if (!glyph) return null;

    return (
      <svg
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        width={width}
        height={height}
      >
        <use xlinkHref={'#'+glyph.default.id} />
      </svg>
    )
  }
}

export { Icon, GLYPHS };
