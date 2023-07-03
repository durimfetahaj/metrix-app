export function getTitle(pathName: string) {
  let trimmedWord;

  if (pathName === "/dashboard") {
    trimmedWord = pathName.split("/")[1];
  } else if (pathName.startsWith("/dashboard/")) {
    trimmedWord = pathName.split("/")[2];
  }

  if (trimmedWord) {
    trimmedWord = trimmedWord.charAt(0).toUpperCase() + trimmedWord.slice(1);
  }

  return trimmedWord;
}
