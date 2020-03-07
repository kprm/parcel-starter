const purify = require('purify-css');
const fs = require('fs');

let root = fs.existsSync('./dist/css/') ? './dist/css/' : './dist/';

let cssArr = [];
fs.readdirSync(root).filter(file => file.endsWith('css')).map(file => cssArr.push(file))
console.log(cssArr);


cssArr.forEach(file => {
  const content = ['./dist/*.js', './dist/js/*.js', './dist/*.html'];

  const css = [root + file];

  const whiteListClass = [
    'is-open',
    'dropdown',
    'active',
    '*owl*',
    '*mfp*'
  ];

  const options = {
    output: root + file,
    whitelist: whiteListClass,
    info: true,
    minify: true
  };
  
  console.log(css);
  console.log(options.output);
  
  purify(content, css, options);

})


