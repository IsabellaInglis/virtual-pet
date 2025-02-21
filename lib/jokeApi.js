const showJoke = (joke) => {
  const textEl = document.querySelector(".info__text");
  textEl.innerText = `"${joke}"`;
};

export const getJoke = async () => {
  try {
    const joke = await axios.get(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    );

    showJoke(joke.data.joke);
  } catch (error) {
    console.log(error);
  }
};
