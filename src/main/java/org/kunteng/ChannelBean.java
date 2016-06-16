package org.kunteng;

/**
 * Created by Administrator on 2016/6/14.
 */
public class ChannelBean {
    private String channelPath;
    private String account;

    @Override
    public String toString() {
        return "ChannelBean{" +
                "channelPath='" + channelPath + '\'' +
                ", account='" + account + '\'' +
                '}';
    }

    public String getChannelPath() {
        return channelPath;
    }

    public void setChannelPath(String channelPath) {
        this.channelPath = channelPath;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }
}
