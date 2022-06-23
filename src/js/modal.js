const chatButton = document.querySelector(".button--chat");
const callButton = document.querySelector(".button--call");
const feedBackModal = document.querySelector(".modal-feedback");
const closeButton = document.querySelector(".modal-feedback__close");
const hFeedback = document.querySelector(".modal-feedback__title");
const hCall = document.querySelector(".modal-call__title");
const header = document.querySelector(".header");
const main = document.querySelector(".wrapper-main");
const aside = document.querySelector(".aside");

const chatButtonAside = document.querySelector(".aside-information__icon:nth-child(1)");
const callButtonAside = document.querySelector(".aside-information__icon:nth-child(2)");

const text = document.querySelector(".text");
const email = document.querySelector(".email");
const name = document.querySelector(".name");

const wrapper = document.querySelector(".wrapper-main");

chatButton.addEventListener("click", function() {
  hFeedback.classList.remove("hidden");
  feedBackModal.classList.toggle("modal--hide");
  header.classList.add("opacity");
  main.classList.add("opacity");
  aside.classList.add("opacity");
});

callButton.addEventListener("click", function() {
  text.classList.toggle("hidden");
  name.classList.toggle("hidden");
  email.classList.toggle("hidden");

  hCall.classList.remove("hidden");
  feedBackModal.classList.toggle("modal--hide");
  header.classList.add("opacity");
  main.classList.add("opacity");
  aside.classList.add("opacity");
  console.log('yes');
});

chatButtonAside.addEventListener("click", function() {
  hFeedback.classList.remove("hidden");
  feedBackModal.classList.toggle("modal--hide");
  header.classList.add("opacity");
  main.classList.add("opacity");
  if(window.innerWidth >= 320 && window.innerWidth < 1440)
  {
    aside.classList.add('modal');
  }
  else {
    aside.classList.add('opacity');
  }
  console.log('yes');
});

callButtonAside.addEventListener("click", function() {
  text.classList.toggle("hidden");
  name.classList.toggle("hidden");
  email.classList.toggle("hidden");

  hCall.classList.remove("hidden");
  feedBackModal.classList.toggle("modal--hide");
  header.classList.add("opacity");
  main.classList.add("opacity");
  if(window.innerWidth >= 320 && window.innerWidth < 1440)
  {
    aside.classList.add('modal');
  }
  else {
    aside.classList.add('opacity');
  }
});

closeButton.addEventListener("click", function() {
  text.classList.toggle("hidden");
  name.classList.toggle("hidden");
  email.classList.toggle("hidden");

  hCall.classList.toggle("hidden");
  hFeedback.classList.toggle("hidden");
  feedBackModal.classList.toggle("modal--hide");
  header.classList.remove("opacity");
  main.classList.remove("opacity");
  aside.classList.remove("opacity");
});

wrapper.addEventListener("click", function() {
  text.classList.remove("hidden");
  name.classList.remove("hidden");
  email.classList.remove("hidden");

  hCall.classList.add("hidden");
  hFeedback.classList.add("hidden");
  feedBackModal.classList.add("modal--hide");
  header.classList.remove("opacity");
  main.classList.remove("opacity");
  aside.classList.remove("opacity");
});
