"use client";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect } from "react";

const BootstrapClient = () => {
  useEffect(() => {
    require ("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return null;
};

export default BootstrapClient;
