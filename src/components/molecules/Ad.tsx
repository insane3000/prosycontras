"use client";
import "./Ad.css";
import React from "react";

import { useEffect, useRef } from "react";

export default function Ad() {
  //   const banner: any = useRef<HTMLDivElement>();

  //   useEffect(() => {
  //     const atOptionsDesktop = {
  //       key: "28a57aecc744f36c5015438dfb76e9b1",
  //       format: "iframe",
  //       height: 90,
  //       width: 728,
  //       params: {},
  //     };

  //     const atOptionsMobile = {
  //       key: "0dd4c6cd766d6ac2149268646d476dbd",
  //       format: "iframe",
  //       height: 50,
  //       width: 320,
  //       params: {},
  //     };

  //     const atOptions = window.innerWidth > 600 ? atOptionsDesktop : atOptionsMobile;
  //     if (!banner.current.firstChild) {
  //       const conf = document.createElement("script");
  //       const script = document.createElement("script");
  //       script.type = "text/javascript";
  //       script.src = `//www.profitablecreativeformat.com/${atOptions.key}/invoke.js`;
  //       conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

  //       if (banner.current) {
  //         banner.current.append(conf);
  //         banner.current.append(script);
  //       }
  //     }
  //   }, []);

  //   return <div className="ad" ref={banner} />;
  return <div className="ad" />;
}
