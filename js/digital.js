let title = document.querySelector("h1");
console.log(Document.URL);

if (document.location.href.includes("project-pets")) {
  title.innerHTML = "Project Chapter - PETS WEB";
  let all = document.querySelectorAll(".pets");
  all.forEach((item) => {
    item.style.display = "flex";
  });
} else if (document.location.href.includes("project-cv")) {
  title.innerHTML = "Project Chapter - CV WEB";
  let all = document.querySelectorAll(".cv");
  all.forEach((item) => {
    item.style.display = "flex";
  });
} else if (document.location.href.includes("project-new")) {
  title.innerHTML = "Project Chapter - NEWS WEB";
  let all = document.querySelectorAll(".news");
  all.forEach((item) => {
    item.style.display = "flex";
  });
}
