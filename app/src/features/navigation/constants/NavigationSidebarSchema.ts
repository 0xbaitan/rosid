import { faHome, faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import { NavigationItemUniqueProps } from "../components/NavigationItem";

export type NavigationSidebarSchema = NavigationItemUniqueProps[];

const sidebarData: NavigationSidebarSchema = [
  {
    menuLabel: "Home",
    url: "/",
    icon: faHome,
  },
  {
    menuLabel: "Budget and Expenses",
    url: "/budget-and-expenses",
    icon: faMoneyBills,
  },
];

export default sidebarData;
