package httpclient;

import api.utils.HttpClientUtils;
import lombok.SneakyThrows;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

public class HttpClientsTest {

    @SneakyThrows
    public static void main(String[] args) {
//        CloseableHttpClient httpClient = HttpClients.createDefault();
//
//        HttpGet httpGet = new HttpGet("http://www.baidu12121212.com");
//
//        CloseableHttpResponse httpResponse = httpClient.execute(httpGet);
//
//        int statusCode = httpResponse.getStatusLine().getStatusCode();
//        System.out.println(statusCode);
       //工具类
        System.out.println(HttpClientUtils.doGet("http://82.156.80.137:8080/goods/UserServlet?method=loginMobile&loginname=test1&loginpass=test1"));

    }

}
