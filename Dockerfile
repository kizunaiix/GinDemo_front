FROM nginx

# 添加作者信息
LABEL maintainer="kizunaiix"

# 添加镜像描述
LABEL description="based on next.js."

# 静态文件
COPY my-next-app/out /app/reactbuild

# nginx配置文件
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 等docker run的时候再写端口