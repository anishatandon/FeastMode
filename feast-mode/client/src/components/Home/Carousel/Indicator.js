import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  margin: 2rem 0rem;
`
const Pip = styled.span`
  background: ${(props) => (props.isCurrent) ? 'var(--color-main)' : 'gainsboro'};
  width: 60px;
  height: 5px;
  margin-right: 5px;
  display: inline-block;
  transition: background 0.5s ease;
  cursor: pointer;
`

class Indicator extends Component {
  render() {
    const { length, position } = this.props
    return (
        <Container>
            {Array.from({length}, (pip, i) => <Pip key = {i} isCurrent = {i === position} />)}
        </Container>
    )
  }
}

export default Indicator