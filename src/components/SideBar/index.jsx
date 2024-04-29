import styled from "styled-components";
import NavItem from "./NavItem";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 212px;
`;

export default function SideBar() {
  return (
    <aside>
      <nav>
        <StyledList>
          <NavItem
            activeIcon="/icons/active_home.png"
            inactiveIcon="/icons/inactive_home.png"
            active
          >
            Ínicio
          </NavItem>
          <NavItem
            activeIcon="/icons/active_most_viewed.png"
            inactiveIcon="/icons/inactive_most_viewed.png"
          >
            Mais vistas
          </NavItem>
          <NavItem
            activeIcon="/icons/active_more_likes.png"
            inactiveIcon="/icons/inactive_more_likes.png"
          >
            Mais curtidas
          </NavItem>
          <NavItem
            activeIcon="/icons/active_news.png"
            inactiveIcon="/icons/inactive_news.png"
          >
            Novas
          </NavItem>
          <NavItem
            activeIcon="/icons/active_surprise.png"
            inactiveIcon="/icons/inactive_surprise.png"
          >
            Surpreenda-me
          </NavItem>
        </StyledList>
      </nav>
    </aside>
  );
}
