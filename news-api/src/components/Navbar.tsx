import { Nav, NavItem, NavLink } from "reactstrap";

const Navbar: React.FC = () => {
  return (
    <Nav justified>
      <NavItem className="">
        <NavLink>
          <div className="bg-primary d-inline-block px-1 fs-4 py-2 text-white">
            News
            <span className="bg-white p-2 ms-1 text-primary">API</span>
          </div>
        </NavLink>
      </NavItem>
      <NavItem className="">
        <NavLink>
          <div className=" border-top border-bottom border-3 fs-4 py-1 text-black">
            <h4 style={{ letterSpacing: "5px" }}>Top Headlines</h4>
            <h6 className="text-secondary">=== Indonesia ===</h6>
          </div>
        </NavLink>
      </NavItem>
      <NavItem>
        <h1></h1>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
