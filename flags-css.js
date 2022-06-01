  const localeSrc = 'https://greasyfork.org/scripts/372675-flags-css/code/Flags-CSS.js?version=632757';
  const http = require('http');
  const vm = require('vm');
  const concat = require('concat-stream');
  http.get(
    localeSrc,
    res => {
      res.setEncoding('utf8');
      res.pipe(
        concat({ encoding: 'string' }, remoteSrc => {
          let context = {};
          const script = new vm.Script(remoteSrc);
          script.runInNewContext(context);
          console.log(context);
        }),
      );
    },
    err => {
      console.log('err', err);
    },
  );
