package stream;


import api.TestCase;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;



public class StreamTest {

    public static void main(String[] args) {

        List<TestCase> list=new ArrayList<>();
        list.add(new TestCase("是","测试用例1"));
        list.add(new TestCase("是","测试用例2"));
        list.add(new TestCase("否","测试用例3"));
        list.add(new TestCase("是","测试用例4"));

        List<TestCase> testCaseList2=new ArrayList<>();
        for (TestCase testCase : list) {
            if("是".equals(testCase.getRun())){
                testCaseList2.add(testCase);
            }
        }

//        List<TestCase> testCaseList = list.stream().
//                filter(d -> d.getRun().equals("是")).collect(Collectors.toList());

 //       System.out.println(testCaseList);

        //流式计算
        List<String> list3 =new ArrayList<>();
        list3.add("testfan");
        list3.add("testfan");
        list3.add("testfan");

        List<String> stringList = list3.stream().distinct().
                collect(Collectors.toList());
        System.out.println(list3);
        System.out.println(stringList);


        List<String> stringList1 = list.stream().map(TestCase::getCaseName).collect(Collectors.toList());
        System.out.println(stringList1);


    }
}
