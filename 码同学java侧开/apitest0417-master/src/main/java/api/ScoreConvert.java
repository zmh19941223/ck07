package api;

import com.github.crab2died.converter.WriteConvertible;

public class ScoreConvert implements WriteConvertible {
    @Override
    public Object execWrite(Object o) {
        if(o instanceof Integer){
           int score= (Integer)o;
           if(score<=60){
               return "不及格";
           }else if (score>60&&score<80){
               return "良";
           }else if(score>80){
               return "优秀";
           }
        }
        return o;
    }
}
