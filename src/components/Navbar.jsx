function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow-md">
      <h1 className="text-2xl font-bold">Amit Shah</h1>

      <ul className="hidden md:flex gap-8 font-medium">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;