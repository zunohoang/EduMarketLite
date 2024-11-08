function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert('Cảm ơn bạn đã đăng ký nhận bản tin! Email: ' + email);
    event.target.reset();
}