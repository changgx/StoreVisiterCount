package org.kunteng.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Properties;

/**
 * Created by Administrator on 2016/6/13.
 */

/**
 * 创建自己的工具类
 */
public class Utils {
    /**
     * 获取mysql连接
     *
     * @param url      MySQLurl
     * @param username MySQL账号
     * @param password MySQL密码
     * @return
     * @throws Exception
     */
    public static Connection getConnection(String url, String username, String password) throws Exception {
        Class.forName("com.mysql.jdbc.Driver");
        java.sql.Connection conn = DriverManager.getConnection(url, username, password);
        return conn;
    }

    /**
     * 根据属性文件的路径以及key获取对应的的value
     *
     * @param path 属性文件路径
     * @param key  value对应的key
     * @return
     */
    public static String getPropertiesValue(String path, String key) throws Exception {
        Properties properties = new Properties();
        properties.load(Utils.class.getClassLoader().getResourceAsStream(path));
        return properties.getProperty(key);

    }

    /**
     * 时间格式化   yyyy-MM-dd  ==> 时间戳
     *
     * @param data
     * @return
     */
    public static String dateFromate(String data) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String time = null;
        try {
            time = format.parse(data).getTime() / 1000 + "";
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return time;
    }

    /**
     * 时间格式化 dd/MMM/yyyy:HH:mm:ss Z  ===》yyyy-MM-dd HH:mm:ss
     *
     * @param data
     * @return
     */
    public static String dateFromate2(String data) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MMM/yyyy:HH:mm:ss Z", Locale.US);
        Date time = null;
        try {
            time = sdf.parse(data);
            sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            return sdf.format(time);
        } catch (ParseException e) {
            return data;
        }
    }

    /**
     * 根据unix时间戳获取对应的小时
     * 2014/12/12 10:2:23 对应的小时为10
     * 2014/12/12 0:0:0 对应的小时为0
     *
     * @param time
     * @return
     */
    public static int hour(String time) {
        time = time.substring(0, time.length() - 3);
        int num = Integer.parseInt(time) + 28800;
        for (int i = 0; ; i++) {
            if (num < 86400) {
                for (int j = 0; ; j++) {
                    if (num < 3600) {
                        return j;
                    }
                    num -= 3600;
                }
            }
            num -= 86400;

        }
    }

    public static String timeFrmate(String time) {
        Long timestamp = Long.parseLong(time) * 1000;
        String date = new java.text.SimpleDateFormat("yyyy/MM/dd HH").format(new java.util.Date(timestamp));
        return date;
    }

    public static void main(String[] args) {
        System.out.println(hour("1460430000000"));
    }

}
