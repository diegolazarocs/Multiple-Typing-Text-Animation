const text = document.querySelector(".second-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Estudante ";
  }, 0);
  setTimeout(() => {
    text.textContent = "Blogueiro ";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Freelancer ";
  }, 8000);
  setTimeout(() => {
    text.textContent = "TechLover ";
  }, 12000);
};
textLoad();
setInterval(textLoad, 16000);
