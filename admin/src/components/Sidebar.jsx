import { useDashboardContext } from "../pages/DashboardLayout";
import { NavLink } from "react-router-dom";
import { MdAddToPhotos } from "react-icons/md";

import styled from "styled-components";

const Wrapper = styled.aside`
  //display: none;
  @media (min-width: 992px) {
    background-color: yellow;
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 230px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--background-color);
    }
  }
`;

const Sidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>Logo</header>
          <NavLink to="all-product" end>
            <span className="icon">
              <MdAddToPhotos />
            </span>
            All Product
          </NavLink>
          <NavLink to="add-product" end>
            <span className="icon">
              <MdAddToPhotos />
            </span>{" "}
            Add Product
          </NavLink>
          <NavLink to="add-category" end>
            <span className="icon">
              <MdAddToPhotos />
            </span>
            Add Category
          </NavLink>
          <NavLink to="all-category" end>
            <span className="icon">
              <MdAddToPhotos />
            </span>
            All Category
          </NavLink>
          <NavLink to="add-coupon" end>
            <span className="icon">
              <MdAddToPhotos />
            </span>
            Add Coupon
          </NavLink>
          <NavLink to="all-coupon" end>
            <span className="icon">
              <MdAddToPhotos />
            </span>
            All Coupon
          </NavLink>
          <NavLink to="all-user" end>
            <span className="icon">
              <MdAddToPhotos />
            </span>
            All User
          </NavLink>
          <NavLink to="all-order" end>
            <span className="icon">
              <MdAddToPhotos />
            </span>
            All Order
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;