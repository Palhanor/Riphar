/* SEGURANÇA: O pacote 'gulp-usemin' foi abandonado! Migrar para o 'browserify' ou 'webpack' */
const { src, dest, watch, series } = require('gulp');
const gulpClean = require('gulp-clean'); // Apaga diretórios e arquivos
const gulpUsemin = require('gulp-usemin'); // Edita os arquivos HTML e compila e minifica textos (html-minifier), scripts (uglify-js) e estilos (clean-css)
  const cleanCss = require('gulp-clean-css'); // Minifica arquivos CSS (usado no usermin)
  const uglify = require('gulp-uglify'); // Minifica arquivos JS (usado no usermin)
  // ajeitar o 'gulp-htmlmin'; adicionar o 'gulp-rev'; adicionar o 'gulp-rename'
const browserSync = require('browser-sync'); // Sincroniza as atualizações com o navegedor
  const gulpSass = require('gulp-sass')(require('sass')); // Sincroniza as atualizações do SCSS com o CSS (usado no browserSync)

/************ DEFAULT ***************/

//gulp
exports.default = series(clean, copy, usemin);

/************ CLEAN ***************/

//gulp-clean
function clean() {
  return src('dist')
    .pipe(gulpClean());
}
exports.clean = clean;

/************ COPY ***************/

//gulp
function copy() {
  return src('src/**')
    .pipe(dest('dist'));
}
exports.copy = copy;

/************ USEMIN ***************/

//gulp-usemin
function usemin() {
  return src('dist/**/*.html')
    .pipe(gulpUsemin({
      'js': [uglify],//gulp-uglify
      'css': [cleanCss] //gulp-clean-css
    }))
    .pipe(dest('dist'));
}
exports.usemin = usemin;

/************ SERVER ***************/

//browser-sync
function server() {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });

  //gulp-sass & sass
  watch('src/scss/**/*.scss').on('change', function() {
    return src('src/scss/*.scss')
      .pipe(gulpSass())
      .pipe(dest('src/css'));
  });

  watch('src/**/*').on('change', browserSync.reload);
}
exports.server = server;