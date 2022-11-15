package api;

import com.github.crab2died.annotation.ExcelField;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TestCase {
    @ExcelField(title = "是否开启")
    private String run;
    @ExcelField(title = "用例名称")
    private String caseName;
    @ExcelField(title = "顺序",order = 1)
    private int order;
    @ExcelField(title = "类型")
    private String type;
    @ExcelField(title = "地址")
    private String url;
    @ExcelField(title = "参数",readConverter =FileConvert.class)
    private String params;
    @ExcelField(title = "头部")
    private String headers;

    @ExcelField(title = "分数",writeConverter = ScoreConvert.class)
    private Integer score;


    public TestCase(String run, String caseName) {
        this.run = run;
        this.caseName = caseName;
    }

}

