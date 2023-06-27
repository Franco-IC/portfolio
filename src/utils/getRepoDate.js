function getRepoDate(repoDate) {
  const date = `${new Date(repoDate).toLocaleString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Argentina/Buenos_Aires",
  })} (Buenos Aires, Argentina)`;

  return date;
}

/* 
  
 */

export default getRepoDate;
