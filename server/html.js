/*
 * @author: Caesar
 * @module:
 *
 */

'use strict'

const fs   = require('fs')
const path = require('path')
const glob = require( 'glob' );
const del  = require('del');
const cons = require('consolidate')

const src = path.join(__dirname, './page');

glob( src + '/**/*.ejs', function( err, files ) {
  console.log( files );

  del([__dirname + '/html/**', '!' + __dirname + '/html']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));

  for (let i = 0;i < files.length;i++) {
    console.log( i );
    let file = files[i];
    console.log('file path: ' + file);
    // read file by encoding
    fs.readFile(file, {flag: 'r+', encoding: 'utf8'}, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      let fileName = file.split('page')[1].split('.')[0];
      if (fileName.split('/').length > 2) {
        //使用fs.mkdir创建目录
        //fs.mkdir(path, [mode], callback);

        /**
         * path, 被创建目录的完整路径及目录名；
         * [mode], 目录权限，默认0777
         * [callback(err)], 创建完目录回调函数,err错误对象
         */

        let aDir = fileName.split('/');
        aDir.pop();
        for (let a = 1;a < aDir.length;a++) {
          let dir = '';
          for (let b = 1;b <= a;b++) {
            dir = dir + '/' + aDir[b];
          }

          console.log('fileName: ' + fileName);
          console.log('dir: ' + dir);
          fs.mkdir(__dirname + '/html' + dir, function (err) {
            if(err)
              throw err;
            console.log('创建目录成功')
          });
        }
      }

      let mockPath = src + '' + fileName + '.mock'
      let viewPath = src + '' + fileName + '.ejs'
      let fileName2 = __dirname + '/html' + fileName + '.ejs';
          fileName  = __dirname + '/html' + fileName + '.html';

      console.log('fileName: ' + fileName);

      // console.log(data);

      const mock = require(mockPath)
      cons.ejs(viewPath, mock)
        .then(function (html) {
          console.log('html: ' + html);
          const w_data = new Buffer(html);

          // delete files before write new files
          del([fileName]).then(paths => {
            fs.writeFile(fileName, w_data, {flag: 'a'}, function (err) {
               if(err) {
                console.error(err);
                } else {
                   console.log('写入' + fileName + '成功');
                }
            });
          });

          // del([fileName2]).then(paths => {
          //   fs.writeFile(fileName2, w_data, {flag: 'a'}, function (err) {
          //      if(err) {
          //       console.error(err);
          //       } else {
          //          console.log('写入' + fileName2 + '成功');
          //       }
          //   });
          // });

        })
        .catch(function (err) {
          throw err;
        });


    });

  }

  });

});
