import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  // Map paths to display names
  const getBreadcrumbItems = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const items = [
      { label: 'Home', path: '/', icon: true }
    ];

    let currentPath = '';
    pathnames.forEach((pathname, index) => {
      currentPath += `/${pathname}`;
      
      // Convert pathname to readable label
      let label = pathname
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Special cases
      if (pathname === 'job-details') {
        label = 'Job Details';
      } else if (pathname === 'services') {
        label = 'Services';
      }
      
      // Last item is current page (not a link)
      const isLast = index === pathnames.length - 1;
      items.push({
        label,
        path: isLast ? null : currentPath,
        icon: false,
        isLast
      });
    });

    return items;
  };

  const items = getBreadcrumbItems();

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.isLast ? (
              <span className="breadcrumb-page">{item.label}</span>
            ) : (
              <Link to={item.path} className="breadcrumb-link">
                {item.icon && <Home className="breadcrumb-icon" />}
                {!item.icon && <span>{item.label}</span>}
              </Link>
            )}
            {!item.isLast && <span className="breadcrumb-separator">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

