"use client";
import styled from "styled-components";

import { useEffect, useRef } from "react";

const AdSt = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #101010; */
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export default function Ad() {
  const banner: any = useRef<HTMLDivElement>();

  useEffect(() => {
    const atOptionsDesktop = {
      key: "41da79362b289874249dacdecbda3feb",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    const atOptionsMobile = {
      key: "1cc9040f3fe34754f4d1866608eb7de1",
      format: "iframe",
      height: 50,
      width: 320,
      params: {},
    };

    const atOptions = window.innerWidth > 600 ? atOptionsDesktop : atOptionsMobile;
    if (!banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.topcreativeformat.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      if (banner.current) {
        banner.current.append(conf);
        banner.current.append(script);
      }
    }
  }, []);

  return <AdSt ref={banner} />;
}
