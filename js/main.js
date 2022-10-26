let shareCont = document.querySelector(".author .share .share-cont"),
  social = document.querySelector(".author .social");

shareCont.onclick = () => {
  shareCont.classList.toggle("active");
  social.style.setProperty("opacity", "1", "important");
  social.style.zIndex = "1";

  if (!shareCont.classList.contains("active")) {
    social.style.opacity = "0";
    social.style.zIndex = "-1";
  }
};
