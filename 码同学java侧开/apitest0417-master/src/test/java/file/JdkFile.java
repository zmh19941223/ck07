package file;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class JdkFile {

    //list<String>
    //list<TestCase>
    public static List<String> readTxt(String txtPath) {
        File file = new File(txtPath);
        List<String> list =new ArrayList<>();
        if(file.isFile() && file.exists()){
            FileInputStream fileInputStream = null;
            InputStreamReader inputStreamReader=null;
            BufferedReader bufferedReader=null;
            try {
                 fileInputStream = new FileInputStream(file);
                 inputStreamReader = new InputStreamReader(fileInputStream,"utf-8");
                 bufferedReader = new BufferedReader(inputStreamReader);
                StringBuffer sb = new StringBuffer();
                String text = null;
                while((text = bufferedReader.readLine()) != null){
//                    sb.append(text+"\n");
                    list.add(text);
                }
               // return sb.toString();
                return list;
            } catch (Exception e) {
                e.printStackTrace();
            }finally {
                try {
                    if(fileInputStream!=null){
                        fileInputStream.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
                try {
                    if(inputStreamReader!=null){
                        inputStreamReader.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
                try {
                    if(bufferedReader!=null){
                        bufferedReader.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return null;
    }

    public static void main(String[] args) {
        String path =System.getProperty("user.dir");
        System.out.println(path);
        String filePath =path+File.separator+"data"+File.separator+"apitest.txt";
        System.out.println(filePath);
        System.out.println(readTxt(filePath));
    }
}
