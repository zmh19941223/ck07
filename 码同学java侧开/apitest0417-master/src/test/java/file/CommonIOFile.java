package file;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.List;

public class CommonIOFile {

    //第三方的包 apache spring springboot
    public static void main(String[] args) throws IOException {
        String path =System.getProperty("user.dir");
        String filePath =path+File.separator+"data"+File.separator+"apitest.txt";

        Charset charset =Charset.forName("utf-8");
        List<String> strings = FileUtils.readLines(new File(filePath), charset);
        System.out.println(strings);
        System.out.println("--------------11222");
        strings.forEach(d-> System.out.println(d));
        String filePath2 =path+File.separator+"data"+File.separator+"apitest2.txt";
        FileUtils.write(new File(filePath2),"测试1\n","utf-8",true);
        FileUtils.write(new File(filePath2),"测试2\n","utf-8",true);
    }
}
