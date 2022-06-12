// TODO: import module bila dibutuhkan di sini
const fileStream = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3


const bacaData = (fnCallback) => {
  const dataKompilasiArray = [];

  fileStream.readFile(file1, { encoding: "utf-8" }, (err, dataYangDibaca) => {
    if (err) {
      return fnCallback(err, null);
    }

    let getData = JSON.parse(dataYangDibaca);
    let getMessage = getData.message.split(" ");
    dataKompilasiArray.push(getMessage[1]);


    fileStream.readFile(file2, { encoding: "utf-8" }, (err, dataYangDibaca) => {
      if (err) {
        return fnCallback(err, null);
      }

      let getData = JSON.parse(dataYangDibaca);
      let getMessage = getData[0].message.split(" ");
      dataKompilasiArray.push(getMessage[1]);


      fileStream.readFile(file3, { encoding: "utf-8" }, (err, dataYangDibaca) => {
        if (err) {
          return fnCallback(err, null);
        }

        let getData = JSON.parse(dataYangDibaca);
        let getMessage = getData[0].data.message.split(" ");
        dataKompilasiArray.push(getMessage[1]);

        return fnCallback(err, dataKompilasiArray);

      })
    })
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
