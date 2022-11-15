package file;

import api.TestCase;
import lombok.SneakyThrows;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class ApiTestFromTxt {

    @SneakyThrows
    public static void main(String[] args)  {
        String path =System.getProperty("user.dir");
        String filePath =path+File.separator+"data"+File.separator+"apitest.txt";
        List<String> list = FileUtils.readLines(new File(filePath), "utf-8");
       //testcase对象
        List<TestCase> testCases=new ArrayList<>();
        for (int i = 1; i < list.size(); i++) {
            String line = list.get(i);
            if (StringUtils.isNotBlank(line)) {
                System.out.println(line);
                String[] splits = line.split(";");
                if(splits.length==5){
                    TestCase testCase = new TestCase();
                    testCase.setOrder(Integer.valueOf(splits[0]));
                    testCase.setRun(splits[1]);
                    testCase.setCaseName(splits[2]);
                    testCase.setType(splits[3]);
                    testCase.setUrl(splits[4]);
                    testCases.add(testCase);
                }
            }
        }

        //排序
//        Collections.sort(testCases, new Comparator<TestCase>() {
//            @Override
//            public int compare(TestCase o1, TestCase o2) {
//                return o1.getOrder()-o2.getOrder();
//            }
//        });

       // Collections.sort(testCases, (o1, o2)-> o1.getOrder()-o2.getOrder());

        //stream流排序扩展
        List<TestCase> caseList = testCases.stream().filter(d -> d.getRun().equals("是"))
                .sorted(Comparator.comparing(TestCase::getOrder).reversed())
                .collect(Collectors.toList());

        System.out.println(caseList);
    }
}
