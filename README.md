# Aria2-Trackers
## 自动获取tracker文件并转换为Aria2可用格式
国外：https://tk.sleele.com

国内：https://sleele.gitee.io/aria2-trackers/

## 2020.10.15日更新

        1、将数据源地址更改为jsdelivr cdn地址，现在国内访问速度大大提升，应该不会再出现无非获取trackers的情况了
        2、添加XIU2/TrackersListCollection trackers数据源，推荐使用，tracker数量更多，且更符合国情，包含更多国内站点

Aria2下载BT和磁力经常会遇到没有速度这个问题，配置Trackers可以很大程度减少这种情况，并且可以加快BT下载速度，由于ngosang/trackerslist https://github.com/ngosang/trackerslist 给出的list Aria2是不能够直接解析的，需要稍作处理，于是便有了此工具，此工具基于kooolshare论坛的'898028948'释放的源码制作（http://koolshare.cn/forum.php?mod=viewthread&tid=139749&highlight=Trackers ），不过由于源码没有完全放出，无法运行。我做了一些补充完善，使之可以正常运行


使用教程：https://sleele.com/2019/05/12/aria2-trackers/
![示例图片加载失败](https://raw.githubusercontent.com/SuperNG6/pic/master/pic/Xnip2019-05-12_22-45-56.png)
