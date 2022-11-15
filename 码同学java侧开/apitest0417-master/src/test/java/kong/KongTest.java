package kong;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class KongTest {

    public static void main(String[] args) {
        //字符串空值
        String str1=null;
        String str2="";
        String str3="  ";
        //
        if (str1 != null) {

        }

        if (str2 != null&&str2.length()>1) {

        }

        if (str3 != null&&str3.length()>1&&str3.trim().length()>1) {

        }
        System.out.println(StringUtils.isNotEmpty(str1));
        System.out.println(StringUtils.isNotEmpty(str2));
        System.out.println(StringUtils.isBlank(str3));

        List list1 =null;
        List list2 =new ArrayList();

        if (list1 != null) {

        }

        if (list2 != null&&!list2.isEmpty()) {

        }
        System.out.println(CollectionUtils.isEmpty(list2));

        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("test1","111");

        String test1 = (String) hashMap.get("test1");
        String test2 = (String) hashMap.get("test2");
       // System.out.println(test2.length());

        String test21 = MapUtils.getString(hashMap, "test1", "");

        System.out.println(test21.length());


    }
}
