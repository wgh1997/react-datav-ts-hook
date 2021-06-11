import React, { useState, useContext } from 'react'
import Drag from '@components/drag'
import { Collapse } from 'antd'
import { menu, ehartOption, staticState } from '@config/menu'
import styles from './assembly.module.less'
import { MenuContext } from "./MenuContext";
const { Panel } = Collapse
const Assembly = () => {
  const Menu = useContext(MenuContext);
  const getMenu = () => {
    return Menu['navname'].map((item, index) => {
      return (
        <Panel header={item.title} key={index} className="panel">
          {getList(item.children)}
        </Panel>
      )
    })
  }
  const getList = (list) => {
    return list.map((item, index) => {
      const option = ehartOption[item.id]
      
      return (
        <div className={styles.item} key={index}>
          <Drag key={index} option={option} data={item}>
            <div className={styles.name}>{item.title}</div>
            <img src={item.imgPath} />
          </Drag>
        </div>
      )
    })
  }
  return (
    <>
      <Collapse accordion ghost expandIconPosition="left">
        {getMenu()}
      </Collapse>
    </>
  )
}
export default Assembly
