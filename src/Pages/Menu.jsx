import React, { useState } from 'react';

function Menu() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case 'services':
        setIsServicesOpen(!isServicesOpen);
        break;
      case 'projects':
        setIsProjectsOpen(!isProjectsOpen);
        break;
      case 'pages':
        setIsPagesOpen(!isPagesOpen);
        break;
      case 'blog':
        setIsBlogOpen(!isBlogOpen);
        break;
      default:
        break;
    }
  };

  return (
    <ul className="main-menu__list">
      <li className="dropdown">
        <a href="index.php">Home</a>
        <ul>
          <li><a href="index.php">Home One</a></li>
          <li><a href="index2.php">Home Two</a></li>
          <li><a href="index3.php">Home Three</a></li>
          <li><a href="index-dark.php">Home Dark</a></li>
        </ul>
      </li>

      <li>
        <a href="about.php">About Us</a>
      </li>

      <li className="dropdown" onClick={() => toggleDropdown('services')}>
        <a href="#">Services</a>
        {isServicesOpen && (
          <ul>
            <li><a href="service.php">Services</a></li>
            <li><a href="international-transport.php">International Transport</a></li>
            <li><a href="track-transport.php">Local Track Transport</a></li>
            <li><a href="personal-delivery.php">Fast Personal Delivery</a></li>
            <li><a href="ocean-transport.php">Safe Ocean Transport</a></li>
            <li><a href="warehouse-facility.php">Warehouse Facility</a></li>
            <li><a href="emergency-transport.php">Emergency Transport</a></li>
          </ul>
        )}
      </li>

      <li className="dropdown" onClick={() => toggleDropdown('projects')}>
        <a href="#">Projects</a>
        {isProjectsOpen && (
          <ul>
            <li><a href="project.php">Projects</a></li>
            <li><a href="project-details.php">Project Details</a></li>
          </ul>
        )}
      </li>

      <li className="dropdown" onClick={() => toggleDropdown('pages')}>
        <a href="#">Pages</a>
        {isPagesOpen && (
          <ul>
            <li><a href="team.php">Team</a></li>
            <li><a href="team-details.php">Team Details</a></li>
            <li><a href="testimonial.php">Testimonials</a></li>
            <li><a href="pricing.php">Pricing</a></li>
            <li><a href="faq.php">Faq</a></li>
            <li><a href="404.php">404 Error</a></li>
          </ul>
        )}
      </li>

      <li className="dropdown" onClick={() => toggleDropdown('blog')}>
        <a href="#">Blog</a>
        {isBlogOpen && (
          <ul>
            <li><a href="blog.php">Blog</a></li>
            <li><a href="blog-standard.php">Blog Standard</a></li>
            <li><a href="blog-left-sidebar.php">Blog Left Sidebar</a></li>
            <li><a href="blog-right-sidebar.php">Blog Right Sidebar</a></li>
            <li><a href="blog-details.php">Blog Details</a></li>
          </ul>
        )}
      </li>

      <li>
        <a href="contact.php">Contact</a>
      </li>
    </ul>
  );
}

export default Menu;
