export async function getRepos() {
  const res = await fetch("https://api.github.com/users/Franco-IC/repos");

  if (!res.ok) return;

  const json = await res.json();

  return json;
}
