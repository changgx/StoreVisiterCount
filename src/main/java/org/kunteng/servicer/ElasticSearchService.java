package org.kunteng.servicer;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.RequestEntity;
import org.apache.commons.httpclient.methods.StringRequestEntity;
import org.kunteng.util.Utils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * Created by Administrator on 2016/6/13.
 */
@Service
public class ElasticSearchService {
    @Value("${elasticSearch.url}")
    private String url;
    @Value("${elasticSearch.params}")
    private String params;

    /**
     *
     *
     * @return
     */
    public int[] post(String channelPath, String startTime, String endTime) throws Exception {
        String data = params.replace("channelPath", channelPath).
                replace("startTime", startTime).
                replace("endTime", endTime);
        int[] sum = new int[24];
        String info = this.getData(url, data);
        JSONObject json = JSONObject.fromObject(info);
        JSONArray jsonArray = json.getJSONObject("aggregations").
                getJSONObject("articles_over_time").
                getJSONArray("buckets");
        for (int n = 0; n < jsonArray.size(); n++) {
            String time = jsonArray.getJSONObject(n).getString("key");
            int count = jsonArray.getJSONObject(n).getInt("doc_count");
            int hour = Utils.hour(time);
            sum[hour] += count;
        }
        return sum;


    }

    /**
     * 通过httpclient 访问elasticSearch api 获取数据
     * @param url  elasticSearch url
     * @param params   查询语句
     * @return  查询语句
     * @throws Exception
     */
    public String getData(String url, String params) throws Exception {
        HttpClient httpClient = new HttpClient();
        PostMethod method = new PostMethod(url);
        RequestEntity requestEntity = new StringRequestEntity(params, "application/json", "UTF-8");
        method.setRequestEntity(requestEntity);
        method.releaseConnection();
        httpClient.executeMethod(method);
        //String responses = method.getResponseBodyAsString();//方法返回值为json字符串
        InputStream resStream = method.getResponseBodyAsStream();
        BufferedReader br = new BufferedReader(new InputStreamReader(resStream));
        StringBuffer resBuffer = new StringBuffer();
        String resTemp = "";
        while ((resTemp = br.readLine()) != null) {
            resBuffer.append(resTemp);
        }
        String response = resBuffer.toString();
        return response;
    }
}
