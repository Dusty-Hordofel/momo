"use client";
import { insertManyCenters } from "@/actions/centers";
// import { insertManyCenters } from "@/actions/centers";

import React from "react";

const InitData = () => {
  return (
    <button
      onClick={() => insertManyCenters()}
      className="bg-red-200 p-2 rounded"
    >
      Init Data
    </button>
  );
};

export default InitData;
