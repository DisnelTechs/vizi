import Link from "next/link";

const Header = ({ menu }) => {
  return (
    <header className="fixed w-full z-50 flex justify-between p-5">
      <Link href={`/`}>
          <div className="flex space-x-2 items-center">
            <div className="rounded-full overflow-hidden">
              <a href="/">
                <img src="https://picsum.photos/50/50" alt="ViziAr" />
              </a>
            </div>
            ViziAr
          </div>
      </Link>
      <nav>
        <ul className="flex space-x-3">
          {menu.tree.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
