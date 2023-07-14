# GinDemo_front


制作镜像：
docker build -t kizunaiix/nginx_gindemo_fe:v1.2 .
(可调试)运行这个命令：
docker run --name gindemo_nginx -v /home/yaodong/codings/GinDemo_front/resources:/usr/share/nginx:ro -p 80:80 -d kizunaiix/nginx_gindemo_fe:v1.2
(最终版)运行这个命令：
docker run --name gindemo_nginx -p 80:80 -d kizunaiix/nginx_gindemo_fe:v1.2