import {
  star,
  strokeStar,
  arrow,
  rightArrowSmooth,
  heart,
  users,
  close,
  timer,
} from "./icons"

const iconsConfigTest = [
  {
    tags: "image, images, whatsapp, whats app",
    type: "image",
    name: "whats-app",
    path:
      "https://i.pinimg.com/originals/91/9d/f0/919df067a8fbd22ce7b6f401b7688b35.png",
  },
  {
    tags: "svg, vector, star, fill, filled",
    type: "svg",
    name: "star",
    fontName: "ft-star",
    viewBox: "0 0 24 24",
    path: star,
  },
  {
    tags: "svg, vector, stroked, star, stroke star, outlined",
    type: "svg",
    name: "star-stroke",
    fontName: "ft-stroke-star",
    viewBox: "0 0 24 24",
    path: strokeStar,
  },

  {
    tags: "svg, vector, right, arrow, right arrow, stroked, sharp, outlined",
    type: "svg",
    name: "right-arrow",
    fontName: "ft-right-arrow",
    viewBox: "0 0 256 256",
    path: arrow,
  },

  {
    tags:
      "svg, vector, right, arrow, right arrow, smooth, stroked, outlined, rounded",
    type: "svg",
    name: "right-arrow-smooth",
    fontName: "ft-right-arrow-smooth",
    viewBox: "0 0 512 512",
    path: rightArrowSmooth,
  },
  {
    tags: "svg, vector, time, timer, stroked, outlined",
    type: "svg",
    name: "timer",
    fontName: "ft-timer",
    viewBox: "0 0 1792 1792",
    path: timer,
  },

  {
    tags: "svg, vector, close, delete, remove, fill, filled",
    type: "svg",
    name: "close",
    fontName: "ft-close",
    viewBox: "0 0 426.667 426.667",
    path: close,
  },

  {
    tags: "svg, vector, user, users, team, group, fill, filled",
    type: "svg",
    name: "team",
    fontName: "ft-team",
    viewBox: "0 0 511.999 511.999",
    path: users,
  },

  {
    tags: "svg, vector, favorites, hearts, fill, filled",
    type: "svg",
    name: "heart",
    fontName: "ft-heart",
    viewBox: "0 -28 512.00002 512",
    path: heart,
  },
]

const iconsConfig = [
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
  ...iconsConfigTest,
]

export { iconsConfig }
