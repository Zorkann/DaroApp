import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Menu mode={"horizontal"} theme={"dark"}>
          <Menu.Item>
            <Link to="/guest-list/">Lista gości</Link>
          </Menu.Item>
          <Menu.SubMenu title={"Rozmieszczenie na sali"}>
            <Menu.Item>
              <Link to="/big-hall/">Sala duża</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/small-hall/">Sala mała</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>
            <Link to="/dont-know/"> Nie wiem</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
