export default function sortReposByDate(repos) {
  return [...repos].sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });
}
