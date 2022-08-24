/**
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function CustomPricingCard({ color, badge, price, specifications, action, shadow }) {
  const renderSpecifications = specifications.map(({ label, singlePrice, discount }) => (
    <MKBox key={label} display="flex" alignItems="center" justifyContent="space-between" p={1}>
      {/* <MKBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        mr={2}
        mt={-0.125}
      >
        <MKTypography
          variant="body1"
          color={color === "white" ? "text" : "white"}
          sx={{ lineHeight: 0 }}
        >
          <Icon>{includes ? "done" : "remove"}</Icon>
        </MKTypography>
      </MKBox> */}
      <MKTypography
        variant="body2"
        color={color === "white" ? "text" : "white"}
        fontWeight="regular"
      >
        {label}
      </MKTypography>
      {singlePrice && (
        <MKTypography
          variant="body2"
          color={color === "white" ? "text" : "white"}
          fontWeight="regular"
          textAlign="right"
        >
          {discount ? "- " : ""}${singlePrice}
        </MKTypography>
      )}
    </MKBox>
  ));

  return (
    <Card sx={{ boxShadow: ({ boxShadows: { lg } }) => (shadow ? lg : "none") }}>
      <MKBox
        bgColor={color}
        variant={color === "white" ? "contained" : "gradient"}
        borderRadius="xl"
      >
        <MKBox
          bgColor={badge.color}
          width="max-content"
          px={4}
          pt={0}
          pb={0.5}
          mx="auto"
          mt={-1.375}
          borderRadius="section"
          lineHeight={1}
        >
          <MKTypography
            variant="caption"
            textTransform="uppercase"
            fontWeight="medium"
            color={badge.color === "light" ? "dark" : "white"}
          >
            {badge.label}
          </MKTypography>
        </MKBox>
        <MKBox pt={3} pb={2} px={2} textAlign="center">
          <MKBox my={1}>
            <MKTypography variant="h1" color={color === "white" ? "dark" : "white"}>
              <MKTypography
                display="inline"
                component="small"
                variant="h5"
                color="inherit"
                verticalAlign="top"
              >
                {price.currency}
              </MKTypography>
              {price.value}
              {price.type && (
                <MKTypography display="inline" component="small" variant="h5" color="inherit">
                  /{price.type}
                </MKTypography>
              )}
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKBox pb={3} px={3}>
          {renderSpecifications}
          {action.type === "internal" ? (
            <MKBox mt={3}>
              <MKButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color}
                fullWidth
              >
                {action.label}&nbsp;
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKButton>
            </MKBox>
          ) : (
            <MKBox mt={3}>
              <MKButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color={action.color}
                fullWidth
              >
                {action.label}&nbsp;
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKButton>
            </MKBox>
          )}
        </MKBox>
      </MKBox>
    </Card>
  );
}

// Setting default props for the CustomPricingCard
CustomPricingCard.defaultProps = {
  color: "white",
  shadow: true,
};

// Typechecking props for the CustomPricingCard
CustomPricingCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "white",
  ]),
  badge: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.instanceOf(Array).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export default CustomPricingCard;
