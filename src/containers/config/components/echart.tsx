import React, { useState, useEffect, useContext } from 'react'
import { useMappedState } from 'redux-react-hook'
import { Form, InputNumber, Input } from 'antd'
import { SketchPicker } from 'react-color'
import { Screen } from '@redux/Stores'
import PageContext from '@context/index'
import styles from './echart.module.less'
const mapState = (state: Screen) => ({
  active: state.active,
})

const EchartConfig = () => {
  const { active } = useMappedState(mapState)
  const { box, changeBox } = useContext(PageContext)
  const [selfbox, setSelfBox] = useState<any>({})

  useEffect(() => {
    setSelfBox(box[active[0]])
  }, [active, box[active[0]]])
  if (active.length === 0 || JSON.stringify(selfbox) === '{}') {
    return <></>
  }
  const handleChange = (color) => {
    console.log(color)
  }
  const handleClose = () => {

  }
  console.log(selfbox, '我是啦啦啦')
  return (
    <>
      <h3>图表</h3>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
      >
        <Form.Item label="边距" style={{ marginBottom: 0 }}>
          <Form.Item
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              marginRight: '8px',
            }}
          >
            <Input
              value={selfbox.option.grid.top}
              onChange={(e) => {
                changeBox(`${active[0]}-option-grid-top`, e.target.value)
              }}
            />
            <div className={styles.text}>上</div>
          </Form.Item>
          <Form.Item
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              marginRight: '8px',
            }}
          >
            <Input
              value={selfbox.option.grid.bottom}
              onChange={(e) => {
                changeBox(`${active[0]}-option-grid-bottom`, e.target.value)
              }}
            />
            <div className={styles.text}>下</div>
          </Form.Item>
          <Form.Item
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              marginRight: '8px',
            }}
          >
            <Input
              value={selfbox.option.grid.left}
              onChange={(e) => {
                changeBox(`${active[0]}-option-grid-left`, e.target.value)
              }}
            />
            <div className={styles.text}>左</div>
          </Form.Item>
          <Form.Item
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              marginRight: '8px',
            }}
          >
            <Input
              value={selfbox.option.grid.right}
              onChange={(e) => {
                changeBox(`${active[0]}-option-grid-left`, e.target.value)
              }}
            />
            <div className={styles.text}>高</div>
          </Form.Item>
          <Form.Item

            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              marginRight: '8px',
            }}
          >

            <div className={styles.popover}>
              <div className={styles.cover} onClick={handleClose} />
              {/* <SketchPicker color={{
                r: '241',
                g: '112',
                b: '19',
                a: '1',
              }} onChange={handleChange} /> */}
            </div>
            <div className={styles.text}>颜色</div>
          </Form.Item>


        </Form.Item>
      </Form>
    </>
  )
}

export default EchartConfig
