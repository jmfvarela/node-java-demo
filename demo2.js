var java = require("java");
java.classpath.push("javaparser-core-2.5.1.jar");

var fileInputStream = java.newInstanceSync("java.io.FileInputStream", "files/CuPrinter.java");
var compilationUnit = java.callStaticMethodSync("com.github.javaparser.JavaParser", "parse", fileInputStream);
fileInputStream.close();

console.log(compilationUnit.toString());

var packageJava = compilationUnit.getPackageSync();

var package = {
    toString: packageJava.toString(),
    beginLine: packageJava.getBeginSync().line, 
    beginColumn: packageJava.getBeginSync().column, 
    endLine: packageJava.getEndSync().line, 
    endColumn: packageJava.getEndSync().column, 
    name: packageJava.getNameSync().getNameSync(),
    packageName: packageJava.getPackageNameSync(),
    annotations: packageJava.getAnnotationsSync()
};

console.log();
console.log(package);

var importsJava = compilationUnit.getImportsSync();

var imports = [];
for (var i=0; i<importsJava.sizeSync(); i++) {
    var importJava = importsJava.getSync(i);

    var import_ = {
        toString: importJava.toString(),
        beginLine: importJava.getBeginSync().line, 
        beginColumn: importJava.getBeginSync().column, 
        endLine: importJava.getEndSync().line, 
        endColumn: importJava.getEndSync().column, 
        name: importJava.getNameSync().getNameSync()
    };

    imports.push(import_);
}

console.log();
console.log(imports);
