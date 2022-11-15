package api.utils;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class HttpClientUtils {

    public static String doGet(String url){
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(url);
        CloseableHttpResponse httpResponse = null;
        HttpEntity entity = null;
        try {
             httpResponse = httpClient.execute(httpGet);
             int statusCode = httpResponse.getStatusLine().getStatusCode();
             entity = httpResponse.getEntity();
            return EntityUtils.toString(entity, "utf-8");
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
                try {
                    EntityUtils.consume(entity);
                } catch (IOException e) {
                    e.printStackTrace();
                }
        }
        return "error";
    }
}
