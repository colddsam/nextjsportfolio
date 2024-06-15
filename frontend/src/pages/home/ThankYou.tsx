"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/infinite-moving-texts";

export default function ThankYou() {
  return <InfiniteMovingCards
        items={items}
        direction="right"
        speed="slow"
        />;
}

const items = [
    "Thank You",
    "ধন্যবাদ",
    "धन्यवाद",           
    "ಧನ್ಯವಾದ",           
    "ధన్యవాదాలు",       
    "நன்றி",             
    "നന്ദി",              
    "આભાર",              
    "ਧੰਨਵਾਦ",            
    "ଧନ୍ୟବାଦ",   
    "Gracias",
    "Merci",
    "Danke",
    "Obrigado",
    "Grazie",
    "谢谢",
    "ありがとう",
    "고맙습니다",
    "Спасибо"
];
