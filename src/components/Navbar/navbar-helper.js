import { styled } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import theme from "../../theme";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: "#F5F5F5",
    borderRadius: "21px",
    paddingLeft: "7px"
  },
  // marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    marginLeft: theme.spacing(3),
    width: '245px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.customoffwhite,
  // padding: theme.spacing(0, 2),
  height: '100%',
  width: "39px",
  position: 'absolute',
  right: "0px",
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'visible',
  [theme.breakpoints.up('sm')]: {
    width: '40px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '45px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '49px',
    // backgroundColor: "grey",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 0, 0),
    borderBottom: "none",
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      borderBottom: "none",
    },
    [theme.breakpoints.up('xl')]: {
      width: '20ch',
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));

export {
  Search,
  SearchIconWrapper,
  StyledInputBase
};