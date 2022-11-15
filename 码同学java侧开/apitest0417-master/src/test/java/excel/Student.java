package excel;

import com.github.crab2died.annotation.ExcelField;

public  class Student {
    /**
     * id
     */
    @ExcelField(title = "header3")
    private Integer id;  //excel header
    /**
     * 学号
     */
    @ExcelField(title = "header2")
    private String no;
    /**
     * 姓名
     */
    @ExcelField(title = "header1")
    private String name;
    /**
     * 学院
     */
    @ExcelField(title = "header6")
    private String age;
    /**
     * 成绩
     */
    private float score;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", no='" + no + '\'' +
                ", name='" + name + '\'' +
                ", age='" + age + '\'' +
                ", score=" + score +
                '}';
    }
}
