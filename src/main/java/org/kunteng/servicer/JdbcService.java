package org.kunteng.servicer;

import org.kunteng.util.Utils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * Created by Administrator on 2016/6/13.
 */
@Component
public class JdbcService {
    private Connection connection;
    @Value("${jdbc.connection.url}")
    private String url;
    @Value("${jdbc.connection.username}")
    private String username;
    @Value("${jdbc.connection.password}")
    private String password;
    private String sql;
    private PreparedStatement ps;
    private ResultSet resultSet;

    /**
     * 获取所有的店铺的channel_path
     *
     * @return
     * @throws Exception
     */
    public String getChannelPathByAccount(String account) throws Exception {
        connection = Utils.getConnection(url, username, password);
        sql = "SELECT code FROM channel where  account=?";
        ps = connection.prepareStatement(sql);
        ps.setString(1, account);
        resultSet = ps.executeQuery();
        String code = "";
        while (resultSet.next()) {
            code = resultSet.getString(1);
            code = code.replace("#", "_");
        }

        this.closeResources();
        return code;
    }

    /**
     * 关闭数据库连接资源
     *
     * @throws Exception
     */
    public void closeResources() throws Exception {
        if (resultSet != null) {
            resultSet.close();
        }
        if (ps != null) {
            ps.close();
        }
        if (connection != null) {
            connection.close();
        }
    }


}
