import "../styles/NavigationBar.scss";
import NavigationItem from "./NavigationItem";
import sidebarData from "../constants/NavigationSidebarSchema";
export default function NavigationSidebar() {
  return (
    <nav className="ro-nav-sidebar">
      {sidebarData.map((navItemProps, index) => (
        <NavigationItem key={`sidebar-item-${index}`} {...navItemProps} />
      ))}
    </nav>
  );
}
