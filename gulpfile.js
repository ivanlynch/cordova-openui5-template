var fs = require('fs');
let gulp = require('gulp');
let ui5preload = require('gulp-ui5-preload');
var download = require("gulp-download");
let uglify = require('gulp-uglify');
let gulpif = require('gulp-if');
const { url } = require('inspector');

gulp.task('patching required files', () => {

    const read_package_json = JSON.parse(fs.readFileSync('./package.json'));

    const dev_dependencies = Object.keys(read_package_json.devDependencies);

    const ui5_dependecies_url = dev_dependencies.filter(elem => elem.includes('@openui5/sap'));

    let urls = [];

    ui5_dependecies_url.forEach(function(part, index) {

        this[index] = this[index].substr(9,this[index].length);

        this[index] = this[index].replace(/\./g, "/");

        const dir = this[index];

        this[index] = `https://openui5.hana.ondemand.com/resources/${this[index]}/themes`;

        const url1 = `${this[index]}/sap_fiori_3_dark/library.css`;
        const url2 = `${this[index]}/sap_fiori_3_dark/library-parameters.json`;
        
        const url3 = `${this[index]}/sap_fiori_3/library.css`;
        const url4 = `${this[index]}/sap_fiori_3/library-parameters.json`;

        urls.push(url1);
        urls.push(url2);
        urls.push(url3);
        urls.push(url4);

        download(url1)
            .pipe(gulp.dest(`www/resources/${dir}/themes/sap_fiori_3_dark/`));
        download(url2)
            .pipe(gulp.dest(`www/resources/${dir}/themes/sap_fiori_3_dark/`));
        download(url3)
            .pipe(gulp.dest(`www/resources/${dir}/themes/sap_fiori_3/`));
        download(url4)
            .pipe(gulp.dest(`www/resources/${dir}/themes/sap_fiori_3/`));

    }, ui5_dependecies_url);
})


gulp.task('creating resource folder', () => {
    return gulp.src(["" +
        "./node_modules/@openui5/sap.ui.core/src/**/*",
        "./node_modules/@openui5/sap.m/src/**/*",
        "./node_modules/@openui5/sap.ui.layout/src/**/*",
        "./node_modules/@openui5/sap.ui.unified/src/**/*",
        "./node_modules/@openui5/themelib_sap_fiori_3/src/**/*"
    ])
    .pipe(gulp.dest("www/resources"));
});

gulp.task('creating component preload file', () => {
    return gulp.src([
        'www/**/**.+(js|xml)', '!www/resources/**', '!www/Component-preload.js', '!gulpfile.js'
    ])
        .pipe(gulpif('www/**/*.js', uglify()))
        .pipe(ui5preload({
            base : '.', namespace : 'com/ws'
        }))
        .pipe(gulp.dest('www'))
});

gulp.task('default', gulp.series('creating resource folder', 'creating component preload file', 'patching required files'));