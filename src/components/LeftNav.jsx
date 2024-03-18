import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";
import { BsFillCheckCircleFill } from "react-icons/bs";

const LeftNav = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu ,subList , setsubList} =
        useContext(Context);

    const navigate = useNavigate();


    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
        <div
            className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
                mobileMenu ? "translate-x-0" : ""
            }`}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    clickHandler(item.name, item.type);
                                    navigate("/");
                                }}
                                className={`${
                                    selectedCategory === item.name
                                        ? "bg-white/[0.15]"
                                        : ""
                                }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: Arpit Kumar
                    
                </div>
                <div className="text-red-600 text-[15px] mt-3">
                    Subscriptions:
                    
                </div>
                
                
                
                {subList.map((ele,i) => {return <div className="hidden md:flex items-center">
                <div className="flex items-start mr-3">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={ele.src}
                            />
                        </div>
                    </div>
                    <span className="text-sm font-semibold mt-2 text-white/[0.7] flex items-center" key={i}>
                                {ele.title}
                                {ele.auth ===
                                    "VERIFIED_CHANNEL" && (
                                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                                )}
                            </span>
                       </div>})}
                            <button onClick={() => {setsubList([])}}>Clear</button>
                
                
            </div>
        </div>
    );
};

export default LeftNav;
