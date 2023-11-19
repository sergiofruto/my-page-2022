import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="text-sm mt-6 flex items-center justify-evenly sm:justify-between flex-col sm:flex-row p-4 w-full bg-gray-200">
      <h6 className="text-gray-600">http://sergiofruto.dev - 2023</h6>
    </div>
  );
}

export default Footer;
