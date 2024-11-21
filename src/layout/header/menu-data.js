const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active",
    sub_menus: []
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "",
    sub_menus: []
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Products",
    link: "/shop",
    active: "",
    sub_menus: [
      { link: "/product-details", title: "Product Details" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Technology",
    link: "#",
    active: "",
    sub_menus: [
      { link: "/project-details", title: "Project Details" },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
    sub_menus: []
  },
];
export default menu_data;
