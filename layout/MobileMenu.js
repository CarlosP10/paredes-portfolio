const MobileMenu = ({ dark }) => {
  return (
    <div className="kura_tm_mobile_menu w-full h-auto fixed top-0 left-0 hidden z-[10] middle:block">
      <div className="mobile_menu_inner w-full h-auto clear-both float-left bg-white py-[15px] pr-[30px] pl-[40px]">
        <div className="mobile_in w-full h-auto clear-both float-left flex items-center justify-between">
          <div className="logo">
            <a href="#">
              <img
                className="max-w-[80px] max-h-[50px]"
                src={
                  dark ? "assets/img/logo/logo.png" : "assets/img/logo/dark.png"
                }
                alt=""
              />
            </a>
          </div>
          <div className="trigger leading-[0]">
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown w-full h-auto clear-both float-left bg-white hidden">
        <div className="dropdown_inner w-full h-auto clear-both float-left py-[25px] px-[40px]">
          <ul className="anchor_nav">
            <li className="current float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#timeline"
              >
                Timeline
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#price"
              >
                Price
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#news"
              >
                News
              </a>
            </li>
            <li className="float-left w-full">
              <a
                className="text-black inline-block p-0 font-poppins font-medium"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
