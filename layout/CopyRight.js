const CopyRight = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="kura_tm_section w-full h-auto clear-both float-left">
      <div className="kura_tm_copyright w-full h-auto clear-both float-left bg-black px-0 pt-[28px] pb-[32px] text-center">
        <div className="container">
          <div
            className="copyright_inner w-full h-auto clear-both float-left flex items-center justify-between wow fadeInUp"
            data-wow-duration=".7s"
          >
            <div className="text">
              <p className="text-white">
                Copyright © {currentYear}. All rights reserved.
              </p>
            </div>
            <div className="social">
              <ul>
                <li className="mr-[20px] inline-block">
                  <a className="text-white" href="https://www.linkedin.com/in/cparedes-dev/">
                    <img
                      className="svg"
                      src="assets/img/svg/social/linkedin.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[20px] inline-block">
                  <a className="text-white" href="https://github.com/CarlosP10">
                    <img
                      className="svg"
                      src="assets/img/svg/social/github.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[20px] inline-block">
                  <a className="text-white" href="https://twitter.com/C_Paredes10">
                    <img
                      className="svg"
                      src="assets/img/svg/social/x.svg"
                      alt=""
                    />
                  </a>
                </li>
                {/* If you want to change or add any svg icons you can download here for free www.flaticon.com */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
