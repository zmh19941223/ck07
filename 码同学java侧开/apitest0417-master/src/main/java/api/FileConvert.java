package api;

import com.github.crab2died.converter.ReadConvertible;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class FileConvert implements ReadConvertible {

    @Override
    public Object execRead(String s) {
        System.out.println("------------"+s);
        if(StringUtils.isNotBlank(s)&&StringUtils.endsWithAny(s,".csv",".json",".txt")){
            String filePath = ApiTest.dir+s;
            System.out.println(filePath);
            try {
                return FileUtils.readFileToString(new File(filePath),"utf-8");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return s;
    }
}
