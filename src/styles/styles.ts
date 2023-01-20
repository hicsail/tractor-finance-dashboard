const colors = {
  primary: "#FF481D",
  grey: "#F5F4F6",
  deepGrey: "#898585",
  green: "#00832D",
  black: "#3F404A",
};
const fontStyles = {
  avenirBold: {
    fontFamily: "AvenirLTStdBold",
    fontWeight: 1000,
    fontSize: "14px",
    lineHeight: "16.8px",
    color: colors.black,
  },
  avenirRegular: {
    fontFamily: "AvenirLTStd",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "15.6px",
    color: colors.black,
  },
  rooneyBold: {
    fontFamily: "RooneySans",
    fontWeight: 820,
    fontSize: "20px",
    lineHeight: "25px",
    color: colors.black,
  },
};
const componentStyles = {
  cardGreyBackground: {
    backgroundColor: colors.grey,
    borderRadius: "12px",
    padding: "7px 11px",
  },
  pageBackground: {
    borderRadius: "12px",
    padding: "7px 11px",
  },
};
const sizes = {
  sideBarWidth: "300px",
};
export { colors, fontStyles, componentStyles, sizes };
