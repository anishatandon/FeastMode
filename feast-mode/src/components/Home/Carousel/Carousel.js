import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import Indicator from './Indicator'

const CarouselContainer = styled.div`
  width: 90%;
  display: flex;
  transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};
  transform: ${(props) => {
    if (props.numSlides === 1) return 'translateX(0%)'
    if (props.numSlides === 2) {
      if (!props.sliding && props.direction === 'next') return 'translateX(calc(-100% - 2rem))'
      if (!props.sliding && props.direction === 'prev') return 'translateX(0%)'
      if (props.direction === 'prev') return 'translateX(calc(-100% - 2rem))'
      return 'translateX(0%)'
    }
    if (!props.sliding) return 'translateX(calc(-100% - 2rem))'
    if (props.direction === 'prev') return 'translateX(calc(2 * (-100% - 2rem)))'
    return 'translateX(0%)'
  }};
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  margin-right: 2rem;
  order: ${(props) => props.order};
  opacity: ${(props) => {
    if (props.numSlides === 1) return 1
    if (props.numSlides === 2) return props.order === props.position ? 1 : 0.5
    return props.order === 1 ? 1 : 0.5
  }};
  transition: opacity 1s ease;
`
const ButtonWrapper = styled.div`
  position: absolute;
  width: 98%;
  display: flex;
  justify-content: space-between;
  opacity: 0.5;
`

class Carousel extends Component {
  constructor(props){
    super(props)
    this.state = {
      position: 0,
      direction: props.children.length === 2 ? 'prev' : 'next',
      sliding: false
    }
  }

  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1

    if (numItems === 2) return itemIndex

    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2 && position === 1) return

    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
  }

  prevSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length

    if (numItems === 2 && position === 0) return

    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })
    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

  render() {
    const { children } = this.props
    const { sliding, direction, position } = this.state

    return (
      <>
      {children.length > 1 && <Indicator length = { children.length } position = { position } />}
      <Wrapper>
        <CarouselContainer sliding = {sliding} direction = {direction} numSlides = {children.length}>
          {children.map((child, index) => (
            <CarouselSlot key = {index} order = {this.getOrder(index)} numSlides = {children.length} position = {position}>
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
        <ButtonWrapper>
          <div onClick = {() => this.prevSlide()}> <FontAwesomeIcon icon = {faChevronCircleLeft} size = "5x" color = "#2C3E50" /> </div>
          <div onClick = {() => this.nextSlide()}> <FontAwesomeIcon icon = {faChevronCircleRight} size = "5x" color = "#2C3E50"/> </div>
        </ButtonWrapper>
      </Wrapper>
      
      </>
    )
  }
}

export default Carousel