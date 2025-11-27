function calculate() {

    const a = parseFloat(document.forms['calcform']['txta'].value);
    const b = parseFloat(document.forms['calcform']['txtb'].value);
    const op = document.forms['calcform']['sto'].value;
    
    let result;
    switch (op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                result = 'Lỗi: Không thể chia cho 0';
            } else {
                result = a / b;
            }
            break;
        case '%': // Phép toán chia lấy dư
            result = a % b;
            break;
        case '**': // Phép toán lũy thừa (a mũ b)
            result = Math.pow(a, b); // hoặc a ** b
            break;
        default:
            result = 'Toán tử không hợp lệ';
    }

    document.forms['calcform']['txtr'].value = result;
}