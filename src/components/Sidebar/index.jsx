import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import styles from "./Sidebar.module.css";

const navigationItems = [
  { to: "/", label: "Home", icon: "⌂", end: true },
  { to: "/liked", label: "Liked Videos", icon: "♥" },
  { to: "/history", label: "History", icon: "⟲" },
];

function Sidebar() {
  const appContext = useApp();
  const [fallbackOpen] = useState(true);
  const sidebarOpen = appContext?.sidebarOpen ?? fallbackOpen;

  return (
    <aside
      className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.collapsed}`}
      aria-label="Primary navigation"
    >
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Library</p>
        <nav className={styles.nav}>
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
            >
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>
              <span className={styles.label}>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>Workspace</p>
          <div className={styles.noteCard}>
            Core navigation is ready. Teammates can attach real pages later without changing the sidebar API.
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
