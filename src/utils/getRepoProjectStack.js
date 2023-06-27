export default function getRepoProjectStack(repoDescription) {
  const stack = repoDescription.split("Stack: ")[1].split(", ");

  return stack;
}
