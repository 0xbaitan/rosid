import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/NavigationItem.scss';
import { useNavigate } from 'react-router-dom';

export type NavigationItemUniqueProps = {
  icon?: IconDefinition;
  menuLabel: string;
  url: string;
};
export type NavigationItemProps = React.HTMLProps<HTMLLIElement> &
  NavigationItemUniqueProps;
export default function NavigationItem(props: NavigationItemProps) {
  const { icon, menuLabel, url, className, ...liProps } = props;
  const navigate = useNavigate();
  return (
    <li
      {...liProps}
      className={['ro-nav-item'].join(' ')}
      onClick={() => navigate(url)}
    >
      {icon && <FontAwesomeIcon icon={icon} className="ro-nav-item__icon" />}

      <label>{menuLabel}</label>
    </li>
  );
}
