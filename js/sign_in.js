var user = document.querySelector("#name");
var email = document.querySelector("#email");
var pass = document.querySelector("#pass");
var checkPass = document.querySelector("#check_pass");

function showError() {
  // Lấy tất cả các phần tử có class "form"
  const forms = document.querySelectorAll(".form");

  // Xóa tất cả thông báo lỗi trước khi kiểm tra
  forms.forEach((form) => {
    form.classList.remove("error");
    form.querySelector("small").textContent = ""; // Xóa nội dung trong thẻ small
  });

  let hasError = false;

  if (user.value.trim() === "") {
    const formUser = user.closest(".form");
    formUser.classList.add("error");
    formUser.querySelector("small").textContent = "Error";
    hasError = true;
  }

  if (email.value.trim() === "") {
    const formEmail = email.closest(".form");
    formEmail.classList.add("error");
    formEmail.querySelector("small").textContent = "Error";
    hasError = true;
  }

  if (pass.value.trim() === "") {
    const formPass = pass.closest(".form");
    formPass.classList.add("error");
    formPass.querySelector("small").textContent = "Error";
    hasError = true;
  }

  if (checkPass.value.trim() === "") {
    const formCheckPass = checkPass.closest(".form");
    formCheckPass.classList.add("error");
    formCheckPass.querySelector("small").textContent = "Error";
    hasError = true;
  }

  // Nếu không có lỗi, có thể thực hiện hành động đăng nhập (nếu cần)
  if (!hasError) {
    // Thực hiện hành động đăng nhập
    console.log("Đăng nhập thành công");
  }
}
