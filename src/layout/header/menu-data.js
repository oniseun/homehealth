import technologies_data from "@/data/technologies-data";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active", // Set manually as needed
    sub_menus: [],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "", // Not active by default
    sub_menus: [],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Products",
    link: "/shop",
    active: "", // Not active by default
    sub_menus: [
      { link: "/product-details", title: "Product Details", active: "" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Technology",
    link: "#",
    active: "", // Not active by default
    sub_menus: technologies_data.map((tech) => ({
      link: `/technology/${tech.id}`,
      title: tech.main_title,
      active: "", // Not active by default
    })),
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "", // Not active by default
    sub_menus: [],
  },
];

export default menu_data;