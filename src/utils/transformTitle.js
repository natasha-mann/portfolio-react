const transformTitle = (title) => {
  const titleCharacters = title.replace(/([^A-Za-z])+/g, " ");
  const array = titleCharacters.split(" ");
  const capitalArray = array.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalArray.join(" ");
};

export default transformTitle;
