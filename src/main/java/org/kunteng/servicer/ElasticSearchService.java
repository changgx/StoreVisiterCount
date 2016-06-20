package org.kunteng.servicer;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.aggregations.AggregationBuilders;
import org.elasticsearch.search.aggregations.bucket.histogram.DateHistogram;
import org.elasticsearch.search.aggregations.bucket.histogram.DateHistogramBuilder;
import org.kunteng.util.ESClient;
import org.kunteng.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Arrays;

/**
 * Created by Administrator on 2016/6/13.
 */
@Service
public class ElasticSearchService {
    @Value("${elasticSearch.url}")
    private String url;
    @Value("${elasticSearch.params}")
    private String params;
    @Autowired
    private JdbcService jdbcService;

    /**
     * @return
     */
    public int[] post(String account, String startTime, String endTime) throws Exception {
        int[] sum = new int[24];
        String channelPath = jdbcService.getChannelPathByAccount(account);
        if (!"".equals(channelPath)) {
            String info = this.getData(channelPath, startTime, endTime);
            JSONObject json = JSONObject.fromObject(info);
            JSONArray jsonArray = json.getJSONObject("aggregations").
                    getJSONObject("yunac").
                    getJSONArray("buckets");
            for (int n = 0; n < jsonArray.size(); n++) {
                String time = jsonArray.getJSONObject(n).getString("key");
                int count = jsonArray.getJSONObject(n).getInt("doc_count");
                int hour = Utils.hour(time);
                sum[hour] += count;
            }
        }
        System.out.println(Arrays.toString(sum));
        return sum;


    }

//    /**
//     * 通过httpclient 访问elasticSearch api 获取数据
//     *
//     * @param url    elasticSearch url
//     * @param params 查询语句
//     * @return 查询语句
//     * @throws Exception
//     */
//    public String getData(String url, String params) throws Exception {
//        HttpClient httpClient = new HttpClient();
//        PostMethod method = new PostMethod(url);
//        RequestEntity requestEntity = new StringRequestEntity(params, "application/json", "UTF-8");
//        method.setRequestEntity(requestEntity);
//        method.releaseConnection();
//        httpClient.executeMethod(method);
//        //String responses = method.getResponseBodyAsString();//方法返回值为json字符串
//        InputStream resStream = method.getResponseBodyAsStream();
//        BufferedReader br = new BufferedReader(new InputStreamReader(resStream));
//        StringBuffer resBuffer = new StringBuffer();
//        String resTemp = "";
//        while ((resTemp = br.readLine()) != null) {
//            resBuffer.append(resTemp);
//        }
//        String response = resBuffer.toString();
//        return response;
//    }

    public String getData(String channelPath, String startTime, String endTime) {

        TransportClient client = ESClient.getTransportClient();
        SearchRequestBuilder builder = client.prepareSearch("wifiauth").setTypes("auth");
        builder.setQuery(QueryBuilders.boolQuery().must(QueryBuilders.queryString(channelPath).defaultField("channel_path"))
                .must(QueryBuilders.rangeQuery("first_login").gte(startTime).lt(endTime))
                .must(QueryBuilders.queryString("login").defaultField("stage")));

        //builder.setPostFilter(FilterBuilders.rangeFilter("first_login").gte(startTime).lt(endTime));
        DateHistogramBuilder dataBuild = AggregationBuilders.dateHistogram("yunac").field("@timestamp").interval(DateHistogram.Interval.HOUR);
        builder.addAggregation(dataBuild);
        builder.setFrom(0).setSize(0);
        System.out.println(builder.toString());
        SearchResponse searchResponse = builder.execute().actionGet();
        System.out.println(searchResponse);
        return searchResponse.toString();
    }

}
