import React from "react";
import Img from "./img/javascr.png";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import * as S from "./Components/style";

export default function app({ props }) {
  return (
    <>
      <S.Logo src={Img} alt="Java" />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
