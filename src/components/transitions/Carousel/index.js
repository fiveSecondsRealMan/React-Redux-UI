/**
  图片轮播组件
**/

import React, { Component, PropTypes } from 'react';
import { replaceTemplate } from 'utils';

function getStyles (props) {
  return {
    root: {
      position: 'relative',
      width: replaceTemplate('${width}px', props)
    },

    carouselRoot: {
      position: 'relative',
      margin: replaceTemplate('0 ${arrowItemContainerWidth}px', props),
      overflow: 'hidden',
      height: replaceTemplate('${height}px', props)
    },

    carouselRootInner: {
      position: 'absolute'
    },

    arrowItemContainer: {
      position: 'absolute',
      width: replaceTemplate('${arrowItemContainerWidth}px', props),
      height: replaceTemplate('${height}px', props),
      top: 0
    },

    leftArrowItemContainer: {
      left: 0,
      backgroundColor: 'green'
    },

    rightArrowItemContainer: {
      right: 0,
      backgroundColor: 'yellow'
    },

    item: {
      display: 'inline-block',
      boxSizing: 'border-box',
      borderRadius: '4px',
      width: replaceTemplate('${itemWidth}px', props),
      marginRight: replaceTemplate('${itemGap}px', props),
      height: replaceTemplate('${height}px', props),
      backgroundColor: '#efefef'
    }
  }
}

function getArrowItemContainerComponent (props) {
  const { type } = props;

  if (type === 'click') {
    const { arrowItemContainer, leftArrowItemContainer, rightArrowItemContainer } = getStyles(props);

    return {
      leftArrowItemContainerStyle: Object.assign({}, arrowItemContainer, leftArrowItemContainer),
      rightArrowItemContainerStyle: Object.assign({}, arrowItemContainer, rightArrowItemContainer)
    };
  }
}

function getTransformStyle () {
  const node = document.createElement('div');
  const transformStyles = [
    'transform',
    'webkitTransform',
    'mozTransform'
  ];

  for (const value of transformStyles) {
    if (node.style[value] !== undefined) {
      return value;
    }
  }
}

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.transformStyle = getTransformStyle();
    this.itemLength = this.props.data.length;
    this.realWidth = this.getCarouselRealWidth();
    this.maxItemLength = this.getCarouselMaxIndex();

    this.maxIndex = this.itemLength > this.maxItemLength
      ? this.itemLength - 1
      : this.maxItemLength - 1;

    this.currentIndex = this.itemLength > this.maxItemLength
      ? this.maxItemLength - 1
      : this.maxIndex;
  }

  getCarouselMaxIndex() {
    const { itemWidth, itemGap, width } = this.props;

    return Math.floor(width / (itemWidth + itemGap));
  }

  getCarouselRealWidth() {
    const { itemWidth, itemGap, arrowItemContainerWidth, width } = this.props;
    const carouselWidth = width - arrowItemContainerWidth * 2;
    const carouselRealWidth = this.itemLength * itemWidth + this.itemLength * itemGap;

    return carouselRealWidth < carouselWidth
      ? carouselWidth
      : carouselRealWidth;
  }

  createItemComponents() {
    const { item } = getStyles(this.props);
    const { data } = this.props;

    return data.map((dataItem, index) => {
      return (
        <div key={ index } className="carousel-item" style={ item }></div>
      );
    });
  }

  createContainerComponent() {
    let { carouselRoot, carouselRootInner } = getStyles(this.props);
    const { itemWidth } = this.props;
    const itemComponents = this.createItemComponents();
    const carouselNewRootInner = Object.assign({}, carouselRootInner, { width: this.realWidth });

    return (
      <div ref={ el => this.el = el } className="carousel" style={ carouselRoot }>
        <div className="carousel-inner" style={ carouselNewRootInner }>
          { itemComponents }
        </div>
      </div>
    );
  }

  detectIndex(nextCurrentIndex) {
    if (nextCurrentIndex < 0) {
      return 0;
    } else if (nextCurrentIndex > this.maxIndex) {
      return this.maxIndex;
    }

    return nextCurrentIndex;
  }

  moveTo(nextCurrentIndex) {
    const { itemWidth, itemGap } = this.props;

    nextCurrentIndex = this.detectIndex(nextCurrentIndex);
    this.move(-(itemWidth + itemGap));
    this.currentIndex = nextCurrentIndex;
  }

  move(dist) {
    this.el.style[this.transformStyle] = 'translate3d('+ dist +'px, 0px, 0px)';
  }

  handleLeftArrowClick() {
    this.moveTo(this.currentIndex - 1);
  }

  handleRightArrowClick() {
    this.moveTo(this.currentIndex + 1);
  }

  render() {
    const { className } = this.props;
    const { root } = getStyles(this.props);
    const { leftArrowItemContainerStyle, rightArrowItemContainerStyle } = getArrowItemContainerComponent(this.props);
    const leftArrowItemContainerComponent = (<div className="arrow-left" onClick={ this.handleLeftArrowClick.bind(this) } style={ leftArrowItemContainerStyle }></div>);
    const rightArrowItemContainerComponent = (<div className="arrow-right" onClick={ this.handleRightArrowClick.bind(this) } style={ rightArrowItemContainerStyle }></div>);

    return (
      <div className={ className } style={ root }>
        { leftArrowItemContainerComponent }
        { rightArrowItemContainerComponent }
        { this.createContainerComponent() }
      </div>
    );
  }
}

Carousel.propTypes = {
  /**
   * className
  */
  className: PropTypes.string,

  /**
   * width
  */
  width: PropTypes.number,

  /**
   * height
  */
  height: PropTypes.number,

  /**
   * 轮播方式是自动轮播还是点击轮播
  */
  type: PropTypes.oneOf([
    'auto',
    'click'
  ]),

  /**
   * item 数据
  */
  data: PropTypes.array.isRequired,

  /**
   * carousel arrow item 样式信息
  */
  /** @ignore **/
  arrowContainerWidth: PropTypes.number,
  /** @ignore **/
  arrowIconWidth: PropTypes.number,

  /**
   * carousel item 样式信息
  */
  /** @ignore **/
  itemWidth: PropTypes.number,
  /** @ignore **/
  itemGap: PropTypes.number
};

Carousel.defaultProps = {
  className: 'carousel-container',
  type: 'click',
  itemGap: 15,
  itemWidth: 75,
  arrowItemContainerWidth: 55
};
