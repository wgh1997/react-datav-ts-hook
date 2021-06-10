import React, { useState, useContext } from 'react'
import { MenuContext } from "./MenuContext";
import { nav } from '@config/menu'
import styles from './nav.module.less'
const Nav = (props) => {
  const Menu = useContext(MenuContext);
  const { setnavname } = props;
  const getNav = () => {
    return nav.map((item, index) => {
      return (
        <div className={styles.item} key={index} onClick={() => {
          setnavname(item.navname)
        }}>
          <i className={`iconfont ${item.icon} `}></i>
        </div>
      )
    })
  }
  return <>{getNav()}</>
}
export default Nav


