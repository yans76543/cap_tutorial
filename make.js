const fs = require("fs");

console.log('파일을 생성합니다.');

fs.writeFile('./sample.txt','hello workd..', function(err){
    if (err) throw err
    console.log('생성완료')
});
console.log('파일 생성 시작');
