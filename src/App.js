import React, { useState } from "react";
import styled from "styled-components";
import { Switch, Icon } from "antd";

import { Layout, Header, Main, Aside } from "./components/commom/layout";

const LayoutStyled = styled(Layout)`
  aside {
    background-color: ${props =>
      props.theme.aside.backgroundColor || "#22333b"};
  }

  header {
    background-color: ${props =>
      props.theme.header.backgroundColor || "#8c2f39"};
  }

  main {
    background-color: ${props => props.theme.main.backgroundColor || "#eae0d5"};
  }
`;

const IconStyled = styled(Icon)`
  margin: 15px;
`;

const App = props => {
  const [showMenu, setMenuVisible] = useState(true);
  const { onThemeChange } = props;

  return (
    <LayoutStyled showMenu={showMenu}>
      <Header>
        <IconStyled
          type="menu-fold"
          style={{ fontSize: "36px" }}
          onClick={() => setMenuVisible(!showMenu)}
        />
        <Switch onChange={onThemeChange} />
      </Header>
      {showMenu && <Aside>Aside</Aside>}
      <Main>Main</Main>
    </LayoutStyled>
  );
};

export default App;
