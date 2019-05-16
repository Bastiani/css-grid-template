import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 70px 1fr;
  height: 100vh;
  grid-template-areas:
    "header header"
    "aside main";
  ${props =>
    !props.showMenu
      ? `grid-template-columns: 0px 1fr;`
      : `grid-template-columns: 200px 1fr;`}
  @media all and (max-width: 640px) {
    grid-template-columns: 0px 1fr;
    ${props =>
      !props.showMenu
        ? `grid-template-columns: 200px 1fr;`
        : `grid-template-columns: 0px 1fr;`}
  }
`;

const Header = styled.header`
  grid-area: header;
`;

const Aside = styled.aside`
  grid-area: aside;
`;

const Main = styled.main`
  grid-area: main;
`;

export { Layout, Header, Aside, Main };
