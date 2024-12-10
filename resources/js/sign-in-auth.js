document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('loginForm');
            const messageDiv = document.getElementById('message');

            // Check Empty
            const isEmpty = (value) => value.trim() === "";

            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                // Check for empty fields
                if (isEmpty(username) || isEmpty(password)) {
                    showMessage('Vui lòng điền đầy đủ thông tin!', 'error');
                    return;
                }

                // Check if username exists and password matches
                const storedPassword = localStorage.getItem(username + '_password');
                const storedUsername = localStorage.getItem(username + '_username');

                if (storedUsername == username && storedPassword === password) {
                    showMessage('Đăng nhập thành công!', 'success');
                    setTimeout(() => {
                    window.location.href = 'index.html';
                    }, 2000);
                } else {
                    showMessage('Tên tài khoản hoặc mật khẩu không đúng!', 'error');
                }
            });

            function showMessage(text, type) {
                messageDiv.textContent = text;
                messageDiv.className = 'message ' + type;
                messageDiv.style.display = 'block';
            }
        });