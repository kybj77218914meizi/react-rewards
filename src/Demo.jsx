import React, { Component } from 'react'
import Reward from './components/Reward'
import 'antd/dist/antd.css'
import Button from 'antd/lib/button'
import Switch from 'antd/lib/switch'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import ConfigSlider from './Slider'

export default class App extends Component {
  state = {
    type: true,
    fakingRequest: false,
    angle: 90,
    decay: 0.91,
    spread: 360,
    startVelocity: 15,
    elementCount: 27,
    elementSize: 15,
    lifetime: 200,
    springAnimation: true
  }

  fakeRequest = () => {
    this.setState({
      fakingRequest: true
    })
    setTimeout(() => {
      this.setState({ fakingRequest: false })
      this.reward.rewardMe()
    }, 1500)
  }

  typeChange = (value) => { this.setState({ type: value }) }
  lifetimeChange = (value) => { this.setState({ lifetime: value }) }
  angleChange = (value) => { this.setState({ angle: value }) }
  decayChange = (value) => { if (!isNaN(value)) { this.setState({ decay: value }) } }
  spreadChange = (value) => { this.setState({ spread: value }) }
  startVelocityChange = (value) => { this.setState({ startVelocity: value }) }
  elementCountChange = (value) => { this.setState({ elementCount: value }) }
  elementSizeChange = (value) => { this.setState({ elementSize: value }) }

  render () {
    const {
      type,
      fakingRequest,
      lifetime,
      angle,
      decay,
      spread,
      startVelocity,
      elementCount,
      springAnimation,
      elementSize
    } = this.state
    return (
      <div style={containerStyle}>
        <Reward
          ref={(ref) => { this.reward = ref }}
          active={fakingRequest}
          type={type ? 'emoji' : 'confetti'}
          config={{
            lifetime,
            angle,
            decay,
            spread,
            startVelocity,
            elementCount,
            elementSize,
            springAnimation
          }}
        >
          <Button
            type='primary'
            shape='circle'
            loading={fakingRequest}
            icon={type ? 'like' : 'trophy'}
            size='large'
            onClick={this.fakeRequest}
          />
        </Reward>
        <div style={cardStyle}>
          <Row style={rowStyle}>
            <Col style={colStyle} span={24}>
              <Switch checkedChildren='👍' unCheckedChildren='🎉' defaultChecked onChange={this.typeChange} />
            </Col>
          </Row>
          <ConfigSlider title='lifetime' inputValue={lifetime} min={0} max={360} onChange={this.lifetimeChange} />
          <ConfigSlider title='angle' inputValue={angle} min={0} max={360} onChange={this.angleChange} />
          <ConfigSlider title='decay' inputValue={decay} min={0} max={1} step={0.01} onChange={this.decayChange} />
          <ConfigSlider title='spread' inputValue={spread} min={0} max={360} onChange={this.spreadChange} />
          <ConfigSlider title='startVelocity' inputValue={startVelocity} min={1} max={100} onChange={this.startVelocityChange} />
          <ConfigSlider title='elementCount' inputValue={elementCount} min={1} max={256} onChange={this.elementCountChange} />
          <ConfigSlider title='elementSize' inputValue={elementSize} min={1} max={50} onChange={this.elementSizeChange} />
        </div>
      </div>
    )
  }
}

const containerStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 30,
  borderTop: '15px solid #e96443',
  borderBottom: '15px solid #904e95',
  backgroundImage: 'linear-gradient(#e96443, #904e95), linear-gradient(#e96443, #904e95)',
  backgroundSize: '15px 100%',
  backgroundPosition: '0 0, 100% 0',
  backgroundRepeat: 'no-repeat',
  overflowY: 'hidden'
}

const cardStyle = {
  width: '90%',
  maxWidth: 600,
  marginTop: 160
}

const rowStyle = {
  marginBottom: 20
}

const colStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
