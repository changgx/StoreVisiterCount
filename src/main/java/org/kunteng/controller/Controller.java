package org.kunteng.controller;

import net.sf.json.JSONObject;
import org.kunteng.servicer.ElasticSearchService;
import org.kunteng.servicer.JdbcService;
import org.kunteng.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Enumeration;

/**
 * Created by Administrator on 2016/6/13.
 */
@org.springframework.stereotype.Controller("controller")
public class Controller {
    @Autowired
    private JdbcService jdbcService;
    @Autowired
    private ElasticSearchService elasticSearchService;

    @RequestMapping("/index.do")
    public String index() {
        return "index";
    }

    /**
     * Ajax 必须使用ResponseBody注解，否则无法返回数据
     *
     * @param request
     * @return
     */
    @RequestMapping("/view.do")
    @ResponseBody
    public String view(HttpServletRequest request) {

        Enumeration en = request.getParameterNames();
        String data = en.nextElement().toString();
        JSONObject jsonObject = JSONObject.fromObject(data);
        String account = jsonObject.get("account").toString();

        int[] info = new int[24];
        JSONObject msg = new JSONObject();
        msg.put("account", account);
        if ("".equals(account)) {
            msg.put("data", Arrays.toString(info));
            return msg.toString();
        }
        try {
            System.out.println(jsonObject.getString("startTime"));
            System.out.println(jsonObject.getString("endTime"));
            String startTime = Utils.dateFromate(jsonObject.getString("startTime"));
            String endTime = Integer.parseInt(Utils.dateFromate(jsonObject.getString("endTime"))) + 86400 + "";

            int day = (Integer.parseInt(endTime) - Integer.parseInt(startTime)) / 86400;
            System.out.println(day);
            info = elasticSearchService.post(account, startTime, endTime);
            for (int i = 0; i < info.length; i++) {
                info[i] = info[i] / day;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        msg.put("data", Arrays.toString(info));
        return msg.toString();
    }


}
