"use client";
import classNames from "classnames";
import { useCallback, useState } from "react";
import React from "react";
import Accordion from "../accordion/Accordion";

interface objetProps {
  key: string;
  value: string;
  plus?: string;
  insertion?: objetProps[];
  accompagnement?: objetProps;
}

interface AccordionProps {
  data: objetProps[];
  centre: any;
}

const Tabs = ({ centre, data }: AccordionProps) => {
  console.log("🚀 ~ Tabs ~ centreLOLO:", data);
  const [isClicked, setIsClicked] = useState<number>(0);

  const revealAnswer = useCallback((index: number) => {
    setIsClicked(index);
  }, []);

  return (
    <div>
      <ul className="flex gap-10 border-b-[1px] border-b-gray-200 r">
        {data.map((item, index) => (
          <li className={classNames("relative cursor-pointer")} key={index}>
            <div
              className="text-[20px] py-4 before:hover:content-[''] before:hover:w-full before:hover:rounded-sm before:hover:top-[60px] before:hover:absolute before:hover:border-b-4 before:hover:border-black before:transition-all before:duration-300 before:ease-in-out before:w-0"
              onClick={() => revealAnswer(index)}
            >
              <h3 className="font-semibold">{item.key}</h3>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        {data.map((item, index) => (
          <div key={index}>
            <div
              className={classNames(
                "text-base font-normal transition-all duration-300 ease-in-out",
                isClicked === index ? "block" : "hidden"
              )}
            >
              <h2 className="text-4xl font-bold my-10">
                Présentation du centre
              </h2>
              <p>{item.value}</p>
              <p className="ml-[16px] ">{item?.plus}</p>
            </div>

            {item.accompagnement && (
              <div
                className={classNames(
                  "text-base font-normal transition-all duration-300 ease-in-out",
                  isClicked === index ? "block" : "hidden"
                )}
              >
                <h2 className="text-4xl font-bold my-10">
                  {item.accompagnement.key}
                </h2>
                <p>{item.accompagnement.value}</p>
                {/* <p className="ml-[16px] ">{item?.plus}</p> */}
              </div>
            )}

            {item?.insertion ? (
              <div
                className={classNames(
                  "grid grid-cols-2 my-20",
                  isClicked === index ? "block" : "hidden"
                )}
              >
                <h3 className="text-4xl font-bold">
                  Insertion professionnelle{" "}
                </h3>
                <Accordion data={item?.insertion} />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
