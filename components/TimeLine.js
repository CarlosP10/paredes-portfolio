const TimeLine = () => {
  const works = [
    { id: 1, duration: '.4s', delay: '.5s', title: "iOS Developer", date: "February, 2023 - Today", company: "Grupo GD" },
    { id: 2, duration: '.5s', delay: '.6s', title: "Junior iOS Developer", date: "January, 2019 - January 2021", company: "Soluciones Roots" },
    { id: 3, duration: '.6s', delay: '.7s', title: "Backend Developer", date: "November, 2021 - November, 2022", company: "Superea" },
  ];

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="timeline"
    >
      <div className="kura_tm_timeline w-full h-auto clear-both float-left px-0 pt-[140px] pb-[113px]">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Timeline
            </span>
            <h3 className="font-extrabold uppercase">Working Period</h3>
          </div>
          <div className="timeline_list w-full h-auto clear-both float-left pt-[54px]">
            <ul>
              {works.map((work) => (
                <li
                  key={work.id}
                  className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                  data-wow-duration={work.duration}
                  data-wow-delay={work.delay}
                >
                  <div className="list_inner w-1/3 float-left pr-[40px]">
                    <span className="inline-block text-[18px]">
                      {work.date}
                    </span>
                  </div>
                  <div className="list_inner w-1/3 float-left pr-[40px]">
                    <span className="inline-block text-[18px] text-black">
                      {work.title}
                    </span>
                  </div>
                  <div className="list_inner w-1/3 float-left">
                    <span className="inline-block text-[18px]">
                      {work.company}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
