import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GrDocumentPerformance } from 'react-icons/gr'
import { MdOutlineHealthAndSafety, MdDashboard } from "react-icons/md"
import { BiBell, BiTimeFive } from "react-icons/bi";
import { TbCircleDashed, TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineMessage, AiOutlineQuestionCircle } from "react-icons/ai";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import '../Navigaction/Navigaction.moudle.css'
// header
import "../Header/Header";
import '../Header/Header.moudle.css'


const routes = [
  {
    path: "/HomePage",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/Performance",
    name: "Performance",
    icon: <GrDocumentPerformance />,
  },
  {
    path: "/HRHealthMatrix",
    name: "Health metrics",
    icon: <MdOutlineHealthAndSafety />,
  },
  {
    path: "/Subsriptions",
    name: "Subscriptions",
    icon: <TbBrandGoogleAnalytics />,
  },
  {
    path: "/Events",
    name: "Events",
    icon: <BiTimeFive />,
  },
  {
    path: "/RedZone",
    name: "Red Zone",
    icon: <BiBell />,
  },
  {
    path: "/Reports",
    name: "Reports",
    icon: <AiOutlineMessage />,
  },
  {
    path: "/Cohorts",
    name: "Cohorts",
    icon: <TbCircleDashed />,
  },

];


// mobile responsive navbar s


const SideBar = (props) => {

  let toShow = props.show;
  let classname;
  if (toShow == true) {
    classname = "menu-container-active";
  } else {
    classname = "menu-container";
  }

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* <Header /> */}
      {/* dashboard header start */}


      {/* dashboard header end  */}
      <div className={`Hr-Dashboard-main ${classname}`}>
        <motion.div
          animate={{
            width: isOpen ? "150px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`HrDashboard-Slider `}
        >
          <div className="HrDashboard_top_section">

            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                </motion.h1>
              )}
            </AnimatePresence>

            {/* <div className="Dashboard_bars">
              <FaBars onClick={toggle} />
            </div> */}
          </div>

          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="hrDshRoutes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="NavActive"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text_Dsh"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        {/* <RightNavBar /> */}

        {/* <main>{children}</main> */}
      </div>

    </>
  );
};

export default SideBar;
