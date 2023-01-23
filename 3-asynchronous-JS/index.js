const fs = require('fs');
const superagent = require('superagent');

//////////////////// Callback Hell ////////////////////////
// fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
//   console.log(data);
//   superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, response) => {
//     console.log(response.body);
//     if (err) return console.log(err.message);
//     fs.writeFile('dog-img.txt', response.body.message, err => {
//       if (err) return console.log(err.message);
//       console.log('Random dog image saved to file');
//     });
//   });
// });

//////////////////// Promises ////////////////////////
const readFilePromise = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const writeFilePromise = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, err => {
      if (err) reject(err);
      resolve('successful');
    });
  });
};

//////////////////// Using the Promise ////////////////////////
// readFilePromise(`${__dirname}/dog.txt`).then(data => {
//   console.log(`Bread: ${data}`);
//   return superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then(response => {
//       if (!response.body.message) {
//         return Promise.reject(`No URL found for breed ${data}`);
//       }
//       console.log(response.body);
//       return writeFilePromise('dog-img.txt', response.body.message);
//     })
//     .then(msg => {
//       console.log(`Random dog image saved to file [${msg}]`);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

//////////////////// Async/Await ////////////////////////
const getDogPic = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const imgs = all.map(el => el.body.message);
    console.log(imgs);

    await writeFilePromise('dog-img.txt', imgs.join('\n'));
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);

    throw err;
  }
  return '2: READY 🐶';
};

//////////////////// Getting return values from Async/Await ////////////////////////
(async () => {
  try {
    console.log('1: Will get dog pics!');
    const response = await getDogPic();
    console.log(response);
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log(err);
  }
})();
