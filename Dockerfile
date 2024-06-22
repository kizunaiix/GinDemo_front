FROM nginx

# 静态文件
COPY reactapp/build /app/reactbuild

# nginx配置文件
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 等docker run的时候再写端口