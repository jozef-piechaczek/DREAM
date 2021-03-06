import React from 'react';
import {Button, Col, Dropdown, Menu, Row} from 'antd';
import {Link} from 'react-router-dom';
import {UnorderedListOutlined} from '@ant-design/icons';
import './HorizontalNavbarResponsive.less'
import Logo from '../other/Logo';
import {NavbarProperties} from './NavbarProperties';

/**
 * Horizontal navbar used in Homepage.
 * @param props Menu items and CSS properties of the Menu component.
 */
const HorizontalNavbarResponsive = (props: NavbarProperties) => {

  const handleClick = (key: string) => {
    let action = props.menuItems.find(item => item.key === key)?.action
    if (action) {
      action()
    }
  }

  const menuItems = props.menuItems.map((item) =>
    <Menu.Item key={item.key}>{item.node}</Menu.Item>)

  const dropDownMenu =
    <Menu mode={"vertical"} onClick={k => handleClick(k.key)}>{menuItems}</Menu>

  const horizontalMenu =
    <Menu className={"h-navbar-h-menu"} style={props.menuBarProperties} mode={"horizontal"}
          onClick={k => handleClick(k.key)}>{menuItems}</Menu>

  return (
    <>
      <Dropdown className={"h-navbar-dropdown"} overlay={dropDownMenu} placement="bottomRight" arrow>
        <Button className={"h-navbar-dropdown-button"} shape="circle" icon={<UnorderedListOutlined/>} size="large"/>
      </Dropdown>
      <Row className={"h-navbar-header-container"}>
        {
          !props?.hideLogo &&
          <Col className={"flex-center"}>
              <Link className={"flex-center"} to={"/"}>
                  <Logo/>
              </Link>
          </Col>
        }
        <Col className={"h-navbar-h-menu-col"}>
          {horizontalMenu}
        </Col>
      </Row>
    </>
  );
};

export default HorizontalNavbarResponsive;