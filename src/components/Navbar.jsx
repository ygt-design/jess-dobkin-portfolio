import { Link } from 'react-router-dom';
import Grid from './Grid';

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <Grid style={styles.navbarContainer}>
        <div style={styles.logo}>
          <Link to="/" style={styles.navbarLogoLink}>Jess Dobkin</Link>
        </div>
        <div style={styles.navbarCta}>
            <ul style={styles.links}>
          <li><Link to="/projects" style={styles.link}>Projects</Link></li>
          <li><Link to="/gallery" style={styles.link}>Archive</Link></li>
          <li><Link to="/about" style={styles.link}>About Us</Link></li>
          <li><Link to="/contact" style={styles.ctaLink}>Contact</Link></li>
        </ul>
        </div>
      </Grid>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    left: 0,
    width: '100%',
    zIndex: 1000,
  },
  navbarContainer: {
    width: '50%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1rem',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: '0.5px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '0.375rem',
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  navbarLogoLink: {
    textDecoration: 'none',
    color: 'black',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '1rem',
  },
  cta: {},
  ctaLink: {
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    backgroundColor: 'magenta',
    color: 'white',
    borderRadius: '0.375rem',
    fontWeight: 500,
  }
};
