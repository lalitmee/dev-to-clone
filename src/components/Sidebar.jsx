import PropTypes from "prop-types";

const Sidebar = ({ links }) => {
  return (
    <ul className="flex flex-col gap-4 w-2/12">
      {links.map((link) => (
        <li
          key={link.id}
          className="hover:underline hover:text-white p-2 w-full hover:bg-blue-500 rounded cursor-pointer"
        >
          <span className="text-lg">
            <i className={link.iconClass}></i>
          </span>
          <span className="ml-3">{link.label}</span>
        </li>
      ))}
    </ul>
  );
};

Sidebar.propTypes = {
  links: PropTypes.array,
};

export default Sidebar;
