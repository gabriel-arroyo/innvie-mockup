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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKAlert from "components/MKAlert";
// @mui material components
import Icon from "@mui/material/Icon";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DateInput from "pages/Innvie/Home/components/Date/DateInput";
// Otis Kit PRO examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Rental page sections
// import Search from "pages/LandingPages/Rental/sections/Search";
import Places from "pages/LandingPages/Rental/sections/Places";
// import Testimonials from "pages/LandingPages/Rental/sections/Testimonials";
// import Faq from "pages/LandingPages/Rental/sections/Faq";
// import Contact from "pages/LandingPages/Rental/sections/Contact";

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-rental.jpeg";
import routes from "../../../innvie.routes";

import Offers from "../../Innvie/Home/components/Offers/offers";
import Places2 from "../../Innvie/Home/sections/Amenities";

function Rental() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        logoUrl="https://firebasestorage.googleapis.com/v0/b/innvie-6e09a.appspot.com/o/logo-blanco2.png?alt=media&token=cabde339-12a3-4b84-8879-1e945fdc7696"
        action={{
          type: "external",
          route: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
          label: "buy now",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h2"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Nuestras Opciones
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={1}>
              Habitaciones disponibles para la fecha seleccionada:
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "hidden",
        }}
      >
        {/* <Search /> */}
        <Container sx={{ mt: "20px", mb: "40px" }}>
          <DateInput />
        </Container>
        <MKAlert color="error" dismissible>
          <Icon fontSize="small">warning</Icon>&nbsp; Favor de seleccionar una fecha para validar la
          disponibilidad
        </MKAlert>
        <Places />
        {/* <Testimonials />
        <Faq />
        <Contact /> */}
        <Container>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
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
        <Places2 />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Rental;
