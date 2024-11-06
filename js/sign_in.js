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

  // Kiểm tra trường tên đăng nhập
  if (user.value.trim() === "") {
    const formUser = user.closest(".form");
    formUser.classList.add("error");
    formUser.querySelector("small").textContent =
      "Error: Tên đăng nhập không được để trống";
    hasError = true;
  }

  // Kiểm tra trường email
  if (email.value.trim() === "") {
    const formEmail = email.closest(".form");
    formEmail.classList.add("error");
    formEmail.querySelector("small").textContent =
      "Error: Email không được để trống";
    hasError = true;
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      const formEmail = email.closest(".form");
      formEmail.classList.add("error");
      formEmail.querySelector("small").textContent =
        "Error: Email không hợp lệ";
      hasError = true;
    }
  }

  // Kiểm tra trường mật khẩu
  if (pass.value.trim() === "") {
    const formPass = pass.closest(".form");
    formPass.classList.add("error");
    formPass.querySelector("small").textContent =
      "Error: Mật khẩu không được để trống";
    hasError = true;
  } else {
    hasError = false;

    // Kiểm tra mật khẩu có ít nhất 5 ký tự
    if (pass.value.length < 5) {
      const formPass = pass.closest(".form");
      formPass.classList.add("error");
      formPass.querySelector("small").textContent =
        "Error: Mật khẩu phải có ít nhất 5 ký tự";
      hasError = true;
    }

    // Kiểm tra ký tự in hoa
    let hasUpperCase = false;
    for (let i = 0; i < pass.value.length; i++) {
      if (
        pass.value[i] === pass.value[i].toUpperCase() &&
        pass.value[i] !== pass.value[i].toLowerCase()
      ) {
        hasUpperCase = true;
        break;
      }
    }

    if (!hasUpperCase) {
      const formPass = pass.closest(".form");
      formPass.classList.add("error");
      formPass.querySelector("small").textContent =
        "Error: Mật khẩu phải có ít nhất một chữ cái in hoa";
      hasError = true;
    }

    // Kiểm tra mật khẩu có ít nhất một ký tự đặc biệt
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharPattern.test(pass.value)) {
      const formPass = pass.closest(".form");
      formPass.classList.add("error");
      formPass.querySelector("small").textContent =
        "Error: Mật khẩu phải có ít nhất một ký tự đặc biệt";
      hasError = true;
    }
  }

  // Kiểm tra trường xác nhận mật khẩu
  if (checkPass.value.trim() === "") {
    const formCheckPass = checkPass.closest(".form");
    formCheckPass.classList.add("error");
    formCheckPass.querySelector("small").textContent =
      "Error: Bạn cần xác nhận mật khẩu";
    hasError = true;
  } else if (checkPass.value.trim() !== pass.value.trim()) {
    // Kiểm tra nếu không khớp
    const formCheckPass = checkPass.closest(".form");
    formCheckPass.classList.add("error");
    formCheckPass.querySelector("small").textContent =
      "Error: Mật khẩu không trùng khớp";
    hasError = true;
  }

  // Nếu không có lỗi, có thể thực hiện hành động đăng nhập (nếu cần)
  if (!hasError) {
    alert("Đăng nhập thành công");
  }
}

document.querySelector("#onPass").addEventListener("click", function () {
  const temp = document.querySelector("#pass");
  const formOnPass = temp.closest(".form");
  const icon = formOnPass.querySelector("i");
  if (temp.type === "password") {
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
    temp.type = "text";
  } else {
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
    temp.type = "password";
  }
});

document.querySelector("#onCheckPass").addEventListener("click", function () {
  const temp = document.querySelector("#check_pass");
  const formOnPass = temp.closest(".form");
  const icon = formOnPass.querySelector("i");
  if (temp.type === "password") {
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
    temp.type = "text";
  } else {
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
    temp.type = "password";
  }
});
