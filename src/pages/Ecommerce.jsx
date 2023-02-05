import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContaxt } from "../contexts/ContextProvider";
import topImage from "../data/vecteezy_man-rest-on-wooden-terrace-on-mediterranean-island_16265334.jpg";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white flex min-w-[600px] justify-between items-center dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80  m-3">
          <div className="flex flex-col  justify-center items-center p-8 pt-9 ">
            <div className="flex flex-col">
              <div>
                <p className="font-bold text-gray-400">Earnings</p>
                <p className="text-2xl">$63,448.78</p>
              </div>
            </div>

            <div className="mt-6">
              <Button
                color="white"
                bgColor={"blue"}
                text="Download"
                borderRadius="10px"
              />
            </div>
          </div>
          <img
            src={topImage}
            alt="top"
            className="object-cover w-full h-full  "
          />
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44   dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780px"></div>
      </div>
    </div>
  );
};

export default Ecommerce;
