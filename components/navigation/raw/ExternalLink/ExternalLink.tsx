export const ExternalLink = ({ link, onClick, children, className }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    onClick={onClick}
  >
    {children}
  </a>
);
