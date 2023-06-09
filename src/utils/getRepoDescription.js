export default function getRepoDescription(repoDescription) {
  let description = repoDescription.split("Screenshot: ");

  return description[0];
}
