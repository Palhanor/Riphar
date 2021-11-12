var gulp = require('gulp');

// Cria a task "test"
function test() {
  // Descreve execução da task
  return gulp.src('src/assets/img/**/*').pipe(gulp.dest('dist/assets/img'));
}
// Atribui o nome "test" para a task "test"
exports.test = test;