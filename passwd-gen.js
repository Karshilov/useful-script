const crypto = require('crypto');

const sign = ['+', '-', '_', '$', '#', '&', '^', '@', '=', '*'];
const isDigit = (value) => {
    let patrn = /^[0-9]*$/;
    if (patrn.exec(value) == null || value == "") {
        return false;
    } else {
        return true;
    }
}

const tranfer = (value) => {
    let str = value.toString('hex');
    console.log(str);
    let newPasswd = str.split('');
    return newPasswd.map((item) => {
        if (Math.random() > 0.3 && !isDigit(item)) {
            return sign[Math.floor(Math.random() * 100) % sign.length];
        }
        else if (Math.random() > 0.7 && !isDigit(item)) {
           return item.toString().toUpperCase()[0];
        }
        return item;
    }).join('');
}

crypto.randomBytes(5, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.length} 位的随机数据: ${tranfer(buf)}`);
});