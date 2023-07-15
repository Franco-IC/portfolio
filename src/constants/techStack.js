export const techStackLinks = {
  HTML: "https://res.cloudinary.com/dntnaemjx/image/upload/v1669052197/icons8-html-5-240_jsroq9.png",
  CSS: "https://res.cloudinary.com/dntnaemjx/image/upload/v1669052377/icons8-css3-240_zxohaf.png",
  Bootstrap:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1669053299/bootstrap_u5uvzh.png",
  JavaScript:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1669052385/icons8-javascript-240_hsyud1.png",
  React:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1678825590/800px-React.svg_jfyp1h.png",
  "Next.js":
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1689388287/next-js-icon-seeklogo.com_hzchp7.svg",
  "Node.js":
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1678825591/nodejs_txy9gp.png",
  "express.js":
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1678825591/express_e8btcw.webp",
  MySQL:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1687888651/MySQL_ygcvuv.png",
  MongoDB:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1685473145/pngwing.com_slkvgi.png",
  mongoose:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1685651265/0TXzZU7W_400x400_efkvn3.png",
  "NextAuth.js":
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1689387269/nextauthlogo.png",
  JWT: "https://res.cloudinary.com/dntnaemjx/image/upload/v1669058547/jwt_lsndj9.png",
  Axios:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1678825565/PngItem_913031_kugpxn.png",
  MaterialUI:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1685375857/materialui_qcz8sp.png",
  TailwindCSS:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1685373396/Tailwind_CSS_Logo.svg_atrgbh.png",
  FramerMotion:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1685473535/framer-motion-seeklogo.com_rvy9ot.svg",
  codeDefault:
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1669054657/code_i2okww.png",
};

export const techStack = [];

for (const technology in techStackLinks) {
  technology !== "codeDefault" ? techStack.push(technology) : "";
}
