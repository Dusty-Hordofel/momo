"use client";
import { Chevron } from "@/assets/icons";
import classNames from "classnames";
import { useCallback, useState } from "react";
import React from "react";

interface objetProps {
  key: string;
  value: string;
  plus?: string;
}

interface AccordionProps {
  data: objetProps[];
}

const Accordion = ({ data }: AccordionProps) => {
  const [isClicked, setIsClicked] = useState<number | null>(null);

  const revealAnswer = useCallback(
    (index: number) => {
      if (index === isClicked) {
        return setIsClicked(null);
      }
      setIsClicked(index);
    },
    [isClicked]
  );

  return (
    <div className="border-t-[1px] border-b-[1px]  border-black">
      <ul>
        {data.map((item, index) => (
          <li
            className={classNames(
              "border-b-[1px] border-black last:border-none",
              isClicked === index ? "pb-[32px]" : ""
            )}
            key={index}
          >
            <div
              className="text-[20px] py-7 flex items-center justify-between cursor-pointer"
              onClick={() => revealAnswer(index)}
            >
              <h3 className="font-semibold uppercase">{item.key}</h3>
              <span>
                <Chevron
                  className={classNames(
                    "w-4 h-4 transition-all duration-300 ease-in-out",
                    isClicked === index ? "-rotate-90" : "rotate-90"
                  )}
                />
              </span>
            </div>
            <div
              className={classNames(
                "text-base font-normal transition-all duration-300 ease-in-out",
                isClicked === index ? "block" : "hidden"
              )}
            >
              <p>{item.value}</p>
              <p className="ml-[16px] ">{item?.plus}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
