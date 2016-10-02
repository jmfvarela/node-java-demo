package io.galileo.nodejavademo;

import java.io.FileInputStream;
import com.github.javaparser.JavaParser;
import com.github.javaparser.ast.CompilationUnit;


public class CuPrinter {

    public static void main(String[] args) throws Exception {
        // creates an input stream for the file to be parsed
        FileInputStream in = new FileInputStream("src/main/java/CuPrinter.java");

        CompilationUnit cu;
        try {
            // parse the file
            cu = JavaParser.parse(in);
        } finally {
            in.close();
        }

        // prints the resulting compilation unit to default system output
        System.out.println(cu.toString());
    }
}