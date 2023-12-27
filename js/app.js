function checkPassword() {
  var password = document.getElementById('passwordInput').value;
  var errorMessage = document.getElementById('error-message');

  // Предположим, что правильный пароль - "секрет123"
  if (password === '30DIANA04') {
    window.location = 'welcome.html'; // Перенаправление на другую страницу
  } else {
    errorMessage.textContent = 'Пароль неверен!'; // Устанавливаем сообщение об ошибке
  }
}