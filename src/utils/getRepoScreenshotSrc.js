export default function getRepoScreenshotSrc(repoDescription) {
  const defaultImageLink =
    "https://res.cloudinary.com/dntnaemjx/image/upload/v1669054657/code_i2okww.png";
  const imageLink = repoDescription.split("Screenshot: ");

  return imageLink[1] ? imageLink[1].split("Stack: ")[0] : defaultImageLink;
}
