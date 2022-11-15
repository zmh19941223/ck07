package excel;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


//了解
public class ExcelUtils {

    /**
     * suffix of excel 2003
     */
    public static final String OFFICE_EXCEL_V2003_SUFFIX = "xls";
    /**
     * suffix of excel 2007
     */
    public static final String OFFICE_EXCEL_V2007_SUFFIX = "xlsx";
    /**
     * suffix of excel 2010
     */
    public static final String OFFICE_EXCEL_V2010_SUFFIX = "xlsx";

    public static final String EMPTY = "";
    public static final String DOT = ".";
    public static final String LIB_PATH = "lib";
    public static final String STUDENT_INFO_XLS_PATH = LIB_PATH + "/student_info" + DOT + OFFICE_EXCEL_V2003_SUFFIX;
    public static final String STUDENT_INFO_XLSX_PATH = LIB_PATH + "/student_info" + DOT + OFFICE_EXCEL_V2007_SUFFIX;
    public static final String NOT_EXCEL_FILE = " is Not a Excel file!";
    public static final String PROCESSING = "Processing...";

    public static void main(String[] args) throws IOException {
        try {
            String path =System.getProperty("user.dir");
            String filePath =path+ File.separator+"data"+File.separator+"test.xlsx";
            List<Student> list = readExcel(filePath);
            System.out.println(list);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Check which version of The Excel file is. Throw exception if Excel file path is illegal.
     *
     * @param path  the Excel file
     * @return a list that contains Students from Excel.
     * @throws IOException
     */
     public static List<Student> readExcel(String path) throws IOException, IllegalArgumentException {
            if (StringUtils.isBlank(path)) {
                throw new IllegalArgumentException(path + " excel file path is either null or empty");
            } else {
                String suffiex = getSuffiex(path);
                if(StringUtils.isBlank(suffiex)){
                    throw new IllegalArgumentException(path + " suffiex is either null or empty");
                }
                if (OFFICE_EXCEL_V2003_SUFFIX.equals(suffiex)) {
                    return readXls(path);
                } else if (OFFICE_EXCEL_V2007_SUFFIX.equals(suffiex)) {
                    return readXlsx(path);
                } else if (OFFICE_EXCEL_V2010_SUFFIX.equals(suffiex)) {
                    return readXlsx(path);
                } else {
                    throw new IllegalArgumentException(path + NOT_EXCEL_FILE);
                }
            }
        }

        /**
         * Read the Excel 2017 or 2010
         * @param path the path of the excel file
         * @return
         * @throws IOException
         */
        public static List<Student> readXlsx(String path) throws IOException {
            System.out.println(PROCESSING + path);
            InputStream is = new FileInputStream(path);
            XSSFWorkbook xssfWorkbook = new XSSFWorkbook(is);
            Student student = null;
            List<Student> list = new ArrayList<Student>();
            // Read the Sheet
            for (int numSheet = 0; numSheet < xssfWorkbook.getNumberOfSheets(); numSheet++) {
                XSSFSheet xssfSheet = xssfWorkbook.getSheetAt(numSheet);
                if (xssfSheet == null) {
                    continue;
                }
                // Read the Row
                for (int rowNum = 1; rowNum <= xssfSheet.getLastRowNum(); rowNum++) {
                    XSSFRow xssfRow = xssfSheet.getRow(rowNum);
                    if (xssfRow != null) {
                        student = new Student();
                        XSSFCell no = xssfRow.getCell(0);
                        XSSFCell name = xssfRow.getCell(1);
                        XSSFCell age = xssfRow.getCell(2);
                        XSSFCell score = xssfRow.getCell(3);
                        student.setNo(getValue(no));
                        student.setName(getValue(name));
                        student.setAge(getValue(age));
                        student.setScore(Float.valueOf(getValue(score)));
                        list.add(student);
                    }
                }
            }
            return list;
        }

        /**
         * Read the Excel 2003
         * @param path the path of the Excel
         * @return
         * @throws IOException
         */
        public static List<Student> readXls(String path) throws IOException {
            System.out.println(PROCESSING + path);
            InputStream is = new FileInputStream(path);
            HSSFWorkbook hssfWorkbook = new HSSFWorkbook(is);
            Student student = null;
            List<Student> list = new ArrayList<Student>();
            // Read the Sheet
            for (int numSheet = 0; numSheet < hssfWorkbook.getNumberOfSheets(); numSheet++) {
                HSSFSheet hssfSheet = hssfWorkbook.getSheetAt(numSheet);
                if (hssfSheet == null) {
                    continue;
                }
                // Read the Row
                for (int rowNum = 1; rowNum <= hssfSheet.getLastRowNum(); rowNum++) {
                    HSSFRow hssfRow = hssfSheet.getRow(rowNum);
                    if (hssfRow != null) {
                        student = new Student();
                        HSSFCell no = hssfRow.getCell(0);
                        HSSFCell name = hssfRow.getCell(1);
                        HSSFCell age = hssfRow.getCell(2);
                        HSSFCell score = hssfRow.getCell(3);
                        student.setNo(getValue(no));
                        student.setName(getValue(name));
                        student.setAge(getValue(age));
                        student.setScore(Float.valueOf(getValue(score)));
                        list.add(student);
                    }
                }
            }
            return list;
        }

        @SuppressWarnings("static-access")
        private static String getValue(XSSFCell xssfRow) {
            if (xssfRow.getCellType() == CellType.BOOLEAN) {
                return String.valueOf(xssfRow.getBooleanCellValue());
            } else if (xssfRow.getCellType() == CellType.NUMERIC) {
                return String.valueOf(xssfRow.getNumericCellValue());
            } else {
                return String.valueOf(xssfRow.getStringCellValue());
            }
        }

        @SuppressWarnings("static-access")
        private static String getValue(HSSFCell hssfCell) {
            if (hssfCell.getCellType() == CellType.BOOLEAN) {
                return String.valueOf(hssfCell.getBooleanCellValue());
            } else if (hssfCell.getCellType() == CellType.NUMERIC) {
                return String.valueOf(hssfCell.getNumericCellValue());
            } else {
                return String.valueOf(hssfCell.getStringCellValue());
            }
        }

        public static String getSuffiex(String path) {
            if(StringUtils.isBlank(path)){
                return EMPTY;
            }
            int index = path.lastIndexOf(DOT);
            if (index == -1) {
                return EMPTY;
            }
            return path.substring(index + 1, path.length());
        }

}

