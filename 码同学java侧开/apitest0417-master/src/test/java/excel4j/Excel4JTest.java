package excel4j;

import com.github.crab2died.ExcelUtils;
import excel.Student;
import lombok.SneakyThrows;

import java.io.File;
import java.util.List;

public class Excel4JTest {

    @SneakyThrows
    public static void main(String[] args) {
        String path =System.getProperty("user.dir");
        String filePath =path+ File.separator+"data"+File.separator+"test.xlsx";
        //反射技术 你把对象的定义给Excel4J框架，框架帮你new
        List<Student> list = ExcelUtils.getInstance().readExcel2Objects(filePath, Student.class);

        list.forEach(d-> System.out.println(d));


    }
}
