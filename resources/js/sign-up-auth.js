document.addEventListener('DOMContentLoaded', function() {
            const registerForm = document.getElementById('registerForm');
            const messageDiv = document.getElementById('message');

            const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

            // Validate Email
            const validateEmail = (email) => {
                return emailRegex.test(email);
            }

            // Validate Password
            const validatePassword = (password, rePassword) => {
                return password === rePassword;
            }

            // Check Empty
            const isEmpty = (value) => value.trim() === "";

            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const fullname = document.getElementById('fullname').value;
                const username = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;

                // Check for empty fields
                if (isEmpty(fullname) || isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
                    showMessage('Vui lòng điền đầy đủ thông tin!', 'error');
                    return;
                }

                // Validate email
                if (!validateEmail(email)) {
                    showMessage('Email không hợp lệ!', 'error');
                    return;
                }

                // Validate passwords match
                if (!validatePassword(password, confirmPassword)) {
                    showMessage('Mật khẩu không khớp!', 'error');
                    return;
                }

                // Check if username already exists
                if (localStorage.getItem(username + '_password')) {
                    showMessage('Tên tài khoản đã tồn tại!', 'error');
                    return;
                }

                // Store user data
                localStorage.setItem(username + '_fullname', fullname);
                localStorage.setItem(username + '_username', username);
                localStorage.setItem(username + '_email', email);
                localStorage.setItem(username + '_password', password);

                showMessage('Đăng kí thành công! Chuyển hướng đến trang đăng nhập...', 'success');

                // Redirect to login page after 2 seconds
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            });

            function showMessage(text, type) {
                messageDiv.textContent = text;
                messageDiv.className = 'message ' + type;
                messageDiv.style.display = 'block';
            }
        });