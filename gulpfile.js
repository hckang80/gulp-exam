var gulp = require("gulp");

//hello라는 gulp task를 등록
gulp.task("hello", function () {
  return console.log("hello");
});

gulp.task("gulpworld", ["hello"], function () {
  return console.log("gulpworld");
});

gulp.task("default", ["gulpworld"]);