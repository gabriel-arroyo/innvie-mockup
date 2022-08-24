/* eslint-disable import/no-unresolved */
/*
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/css";
import "swiper/css/navigation";

// Pricing page components
import SliderBackground from "pages/Innvie/Home/components/Background";

// Images
// import bg1 from "assets/images/bg2.jpg";
import bg2 from "assets/images/bg.jpg";
import bg3 from "assets/images/dg1.jpg";
import { Card } from "@mui/material";
import Container from "@mui/material/Container";
import DateInput from "../components/Date/DateInput";

function Header() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <>
      <Swiper
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop
        style={{ height: "75vh" }}
      >
        <SwiperSlide>
          <SliderBackground image={bg2} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBackground image={bg3} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBackground image={bg2} />
        </SwiperSlide>
      </Swiper>
      <div
        style={{
          position: "absolute",
          top: "30vh",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <Container>
          <Card sx={{ ml: "18vw", mr: "18vw", p: "10px", display: "flex" }}>
            <DateInput />
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Header;
