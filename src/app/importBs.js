'use client'
import { useEffect } from "react";

export default function ImportBs() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("magnific-popup/dist/jquery.magnific-popup.js")
  }, []);
  return null;
}
