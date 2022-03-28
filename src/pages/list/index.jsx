import React from 'react'
import { Row, Col } from 'antd'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <Row style={{ display: 'flex', justifyItems: 'center' }}>
        <Col span={10}>第一列</Col>
        <h1>哈哈哈我恁爹</h1>
        <Col span={10}>第二列</Col>
      </Row>
    </div>
  )
}
