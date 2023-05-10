function handleSubmit() {
  // lay gia tri input cua email va chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // lay element cua the p hien thi loi
  const errorEmail = document.getElementById("error-email");
  // Dieu kien de la mot email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Dung ham  match de kiem tra email vua nhap
  const checkMail = emailValue.match(regex);
  //lay phan tu chua thong tin ng dung
  const sectionContent = document.querySelector(
    "#personal-info .section-content"
  );
  //lay element de kiem soat submit
  const submitControl = document.querySelector(".submit-email");
  //Kiem tra dieu kien checkMail
  if (checkMail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui long nhap dung email";
  }
}
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "block"; //Hiện button View more
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none"; //Ẩn button View more
  }
}
function handleViewMore(element) {
  // Lay element cha gần nhất
  const parentElement = element.closest(".parent");
  // Lay element button
  const viewMore = parentElement.querySelector(".control-view");
  // Lay tat ca elments ".section-content"
  const sectionContent = parentElement.querySelectorAll(".section-content");
  if (viewMore.classList.value.includes("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "Less more";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View more";
  }
}
