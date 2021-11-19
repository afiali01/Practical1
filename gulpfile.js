const {src, dest, series} = require('gulp')

function copy (cb) {

    // place code for your default task here

    src('./src/static/data/**')

    .pipe(dest('./dist/data/'))

    function redirects(){
        return(src('./_redirects').pipe(dest('./dist')))
    }

}

exports.default = series(static, redirect)