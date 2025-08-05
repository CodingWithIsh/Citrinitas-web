"use client";

import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000,
    });
  }, []);

  return null;
}
