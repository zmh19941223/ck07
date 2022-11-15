package api;

import com.github.crab2died.ExcelUtils;
import lombok.SneakyThrows;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class ApiTest {
    public static final String dir =System.getProperty("user.dir")+File.separator+"data"+File.separator;

    @SneakyThrows
    public static void main(String[] args) {
        String filePath =dir+"apitest.xlsx";
        //反射技术 你把对象的定义给Excel4J框架，框架帮你new
        List<TestCase> list = ExcelUtils.getInstance().readExcel2Objects(filePath, TestCase.class);

      //  List<TestCase> list = ExcelUtils.getInstance().readExcel2Objects(filePath, TestCase.class,1);
       //所有sheet

       // list.forEach(d-> System.out.println(d));
       //lombok 工具代码提示 //jdk8
        List<TestCase> testCases = list.stream().filter(d -> d.getRun().equals("是"))
                .sorted(Comparator.comparing(TestCase::getOrder)).
                collect(Collectors.toList());

        testCases.forEach(d-> System.out.println(d));


        //excel写
        long timeMillis = System.currentTimeMillis();//当前的毫秒  - 开始时间 1970
        //result_12121212.xlsx
        ExcelUtils.getInstance().exportObjects2Excel(testCases, TestCase.class, "result_"+timeMillis+".xlsx");
        //年月日 时分
        SimpleDateFormat format0 = new SimpleDateFormat("yyyy-MM-dd(HH_mm)");
        String time = format0.format(timeMillis);
        System.out.println(time);
        ExcelUtils.getInstance().exportObjects2Excel(testCases, TestCase.class, "result_"+time+".xlsx");

    }
}
