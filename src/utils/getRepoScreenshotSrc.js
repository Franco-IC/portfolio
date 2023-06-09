export default function getRepoScreenshotSrc(repoDescription) {
  const defaultLink =
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1669054657/code_i2okww.png";
  const link = repoDescription.split("Screenshot: ");

  return link[1] ? link[1].split("Stack: ")[0] : defaultLink;
}
