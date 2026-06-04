function Navbar() {
  return (
    <nav
      className="
      sticky
      top-0
      bg-white/90
      backdrop-blur-md
      z-50
      shadow-md
      flex
      justify-between
      items-center
      px-8
      py-5
      "
    >
      <h1 className="text-2xl font-bold">
        Amit Shah
      </h1>

      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <a
            href="#about"
            className="hover:text-blue-600 transition"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="hover:text-blue-600 transition"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className="hover:text-blue-600 transition"
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-blue-600 transition"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;