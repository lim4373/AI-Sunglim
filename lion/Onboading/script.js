// window.onfocus = function () {};
// window.onload = function () {
//   window.focus(); // 현재 window 즉 익스플러러를 윈도우 최상단에 위치
//   window.moveTo(0, 0); // 웹 페이지의 창 위치를 0,0 (왼쪽 최상단) 으로 고정
//   window.resizeTo(1280, 800); // 웹페이지의 크기를 가로 1280 , 세로 800 으로 고정(확장 및 축소)
//   window.scrollTo(0, 250); // 스크롤 위치를 조정
// };

// // document.addEventListener("DOMContentLoaded", function () {
// //   const nextPageLinks = document.querySelectorAll(".next-page-link");

// //   nextPageLinks.forEach(function (link) {
// //     link.addEventListener("click", function (event) {
// //       event.preventDefault();
// //       const nextPageUrl = link.getAttribute("href");
// //       const content = document.querySelector("#div_left");

// //       // 애니메이션 추가 (현재 페이지 내용 사라짐)
// //       content.style.animation = "fadeOutUp 0.5s ease-in-out forwards";

// //       setTimeout(function () {
// //         window.location.href = nextPageUrl;
// //       }, 500);
// //     });
// //   });
// // });

// // document.addEventListener("DOMContentLoaded", function () {
// //   // 버튼 클릭 시 페이지 이동
// //   const button = document.querySelector(".button");
// //   button.addEventListener("click", function () {
// //     window.location.href = "index.html";
// //     // 버튼을 클릭하면 이동할 페이지의 URL을 입력하세요.
// //   });
// // });

// index.html의 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const divRootLink = document.querySelector("#div_root a");
  const content = document.querySelector("#div_left");
  const images = document.querySelectorAll("img");
  const divRight = document.querySelector("#div_right");

  divRootLink.addEventListener("click", function (event) {
    event.preventDefault();

    // 애니메이션 추가 (현재 페이지 내용 및 이미지 사라짐)
    content.style.animation = "fadeOutUp 0.5s ease-in-out forwards";
    images.forEach(function (img) {
      img.style.animation = "fadeOutUp 0.5s ease-in-out forwards";
    });
    divRight.style.animation = "fadeOutUp 0.5s ease-in-out forwards";

    setTimeout(function () {
      const nextPageUrl = divRootLink.getAttribute("href");
      window.location.href = nextPageUrl;
    }, 500);
  });
});

// index2.html의 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const divRootLink = document.querySelector("#div_root a");
  const content = document.querySelector("#div_left");
  const images = document.querySelectorAll("img");
  const divRight = document.querySelector("#div_right2");

  divRootLink.addEventListener("click", function (event) {
    event.preventDefault();

    // 애니메이션 추가 (현재 페이지 내용 및 이미지 사라짐)
    content.style.animation = "fadeOutUp 0.5s ease-in-out forwards";
    images.forEach(function (img) {
      img.style.animation = "fadeOutUp 0.5s ease-in-out forwards";
    });
    divRight.style.animation = "fadeOutUp 0.5s ease-in-out forwards";

    setTimeout(function () {
      const nextPageUrl = divRootLink.getAttribute("href");
      window.location.href = nextPageUrl;
    }, 500);
  });
});

// index3.html의 애니메이션은 다른 페이지로 넘어갈 때 버튼을 누르기 때문에 굳이 안 만들어도 됨
