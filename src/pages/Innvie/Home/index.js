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

// @mui material components
// import Card from "@mui/material/Card";

// Otis Kit PRO components
import MKBox from "components/MKBox";

// Otis Kit PRO examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "innvie.routes";
import footerRoutes from "footer.routes";
import CenteredFooter from "examples/Footers/CenteredFooter";
import Contact from "pages/Blogs/Author/sections/Contact";
import Places from "./sections/Places";
import Header from "./sections/Header";
import Offers from "./components/Offers/offers";
import Map from "./components/Map/map";

function Reservation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <Header />
      <Offers
        cards={[
          {
            variant: "contained",
            color: "primary",
            icon: "shuffle_on",
            title: "Oferta 1",
            description:
              "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
          },
          {
            variant: "gradient",
            color: "primary",
            icon: "beenhere",
            title: "Oferta 2",
            description:
              "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
          },
          {
            variant: "contained",
            color: "primary",
            icon: "ballot",
            title: "Oferta 3",
            description:
              "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
          },
        ]}
      />
      <Map />

      {/* <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > */}
      <Places />
      <Contact />
      {/* </Card> */}
      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Reservation;
