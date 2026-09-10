import { NavLink } from 'react-router-dom';
import { useFooter } from '../../hooks/useFooter';
import { styles } from './styles';

export function Footer() {
  const { items } = useFooter();

  return (
    <footer style={styles.footer}>
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={item.route}
          style={({ isActive }) => ({
            ...styles.item,
            ...(isActive ? styles.active : {}),
          })}
        >
          <span style={styles.icon}>{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </footer>
  );
}