import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


export default function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggle,setToggle] = useState(false)

  const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
  };

  const handleclick = () =>{
    setToggle(!toggle)
  }

  return (
    <>

{
  toggle ? <nav className='h-64  shadow-2xl'>
  <div className="body h-[15%] flex justify-between items-center  ">
       <div className="logo flex items-center">
        <CloseOutlinedIcon sx={{fontSize:"35px"}} onClick={handleclick} />
        <img src="logo.svg" alt="" className='w-2/5'/>
       </div>
       <div className="mr-56">
        <Badge badgeContent={0} showZero sx={{'& .MuiBadge-badge': {backgroundColor: 'black',color: 'white',}, }}>
           <ShoppingCartOutlinedIcon />
        </Badge>
       </div>
      <div className="">
       <PersonIcon sx={{fontSize:"30px"}}/>
       </div>
  </div>
  <div className="bg-[#F7F7F7] h-[85%] px-6  ">
              <div className="dropdown relative py-2 mb-1">
               <Link className='text-lg font-medium text-gray-700'>Shop By Category</Link>
               <button className=" focus:outline-none  absolute right-0">{ isDropdownOpen ? <KeyboardArrowUpOutlinedIcon onClick={toggleDropdown}/>:<KeyboardArrowDownOutlinedIcon onClick={toggleDropdown}/>}</button>
                {isDropdownOpen && (
                    <div className="absolute mt-2 bg-white shadow-lg rounded-md w-40">
                        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Sawan Special</a>
                        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Anime</a>
                       
                    </div>
                )}
              </div>
              <div className="flex flex-col  gap-4">
              <Link to={"#"} className=' text-lg font-medium text-gray-700'>Mens</Link>
              <Link to={"#"} className=' text-lg font-medium text-gray-700'>Womens</Link>
              <Link to={"#"} className=' text-lg font-medium text-gray-700'>Kids</Link>
              <Link to={"#"} className=' text-lg font-medium text-gray-700 mb-1'>New Arrivals</Link>
              </div>
  </div>
  
 </nav>:<nav className="w-full bg-white shadow-lg">
  {/* Top Contact Bar (Hidden on small screens) */}
  <div className="hidden md:flex justify-between items-center bg-[#18D9E4] h-10 px-4 md:px-10">
    <h1 className="font-Inter text-xs md:text-sm text-gray-700">Contact Us: +91-9354795744</h1>
    <h1 className="font-Inter text-xs md:text-sm text-gray-700">For Queries: info@krinvi.com</h1>
  </div>

  {/* Main Navigation */}
  <div className="flex justify-between items-center px-4 md:px-6 xl:px-10 md:h-48 xl:h-20 shadow-md">

    {/* Logo and Menu Icon (For Mobile) */}
    <div className="flex items-center">
      {/* Hamburger Menu Icon (Visible on small screens) */}
      <div className="md:hidden mr-4">
        <MenuOutlinedIcon sx={{ fontSize: "35px" }} onClick={handleclick} />
      </div>
      {/* Logo */}
      <img src="logo.svg" alt="Logo" className="w-32 md:w-44" />
    </div>

    {/* Shopping Cart Icon (Visible on small screens) */}
    <div className="md:hidden mr-24">
      <Badge
        badgeContent={0}
        showZero
        sx={{ "& .MuiBadge-badge": { backgroundColor: "black", color: "white" } }}
      >
        <ShoppingCartOutlinedIcon />
      </Badge>
    </div>

    {/* Main Navigation Links (Hidden on mobile, visible on medium and larger screens) */}
    <div className="hidden md:flex md:flex-col xl:flex-row xl:gap-14 xl:items-center text-black">
      
      {/* Dropdown and Links */}
      <div className="flex gap-6 md:pr-42">
        <div className="relative">
          <button className="focus:outline-none text-sm md:text-lg font-medium flex items-center truncate">
            Shop by Category
            <span>
              {isDropdownOpen ? (
                <KeyboardArrowUpOutlinedIcon onClick={toggleDropdown} />
              ) : (
                <KeyboardArrowDownOutlinedIcon onClick={toggleDropdown} />
              )}
            </span>
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-md w-40 z-10">
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Sawan Special</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Anime</a>
            </div>
          )}
        </div>
        <Link to="#" className="font-medium text-base md:text-lg">Mens</Link>
        <Link to="#" className="font-medium text-base md:text-lg">Womens</Link>
        <Link to="#" className="font-medium text-base md:text-lg">Kids</Link>
        <Link to="#" className="font-medium text-lg md:hidden xl:inline">New Arrivals</Link>
      </div>

      {/* Social Icons (Visible on both md and xl screens) */}
      <div className="flex flex-col items-center justify-center gap-3 items-end md:flex md:mt-4 md:mr-6 xl:flex-row xl:flex xl:pb-6">
        <Link to="#" className="font-medium text-lg">
          <InstagramIcon /> Instagram
        </Link>
        <Link to="#" className="font-medium text-lg">
          <FacebookRoundedIcon /> Facebook
        </Link>
      </div>

      {/* New Arrivals (Visible on large screens) */}
      {/* */}
      <div className="hidden md:block xl:hidden gap-8">
        <Link to="#" className="font-medium text-lg">New Arrivals</Link>
      </div>
    </div>

    {/* Right Section: Cart, Search, and Profile */}
    <div className="flex items-center gap-2">
      {/* Cart Icon (Visible only on medium and larger screens) */}
      <div className="hidden md:block">
        <Badge
          badgeContent={0}
          showZero
          sx={{ "& .MuiBadge-badge": { backgroundColor: "black", color: "white" } }}
        >
          <ShoppingCartOutlinedIcon />
        </Badge>
      </div>

      {/* Search Input (Visible only on medium and larger screens) */}
      <div className="hidden md:block">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </Search>
      </div>

      {/* Profile Icon */}
      <a href="/MyAccount"><PersonIcon sx={{ fontSize: "30px" }}/></a>
    </div>
  </div>
</nav>
}

    </>
  )
}

