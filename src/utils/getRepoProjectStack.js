export default function getRepoProjectStack(repoDescription) {
  const stack = repoDescription.split("Stack: ")[1].split(", ");
  //repo.description.split("Stack: ").split(", ")

  return stack;
}
