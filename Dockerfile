# 构建应用
FROM node:18-alpine AS builder
# 移除musl相关依赖，添加通用构建工具
RUN apk add --no-cache python3 make g++ linux-headers
WORKDIR /app
COPY package.json package-lock.json ./
# 移除--omit=optional参数
RUN npm ci --legacy-peer-deps
ENV NODE_ENV=development
COPY . .
RUN npm run build -- --configuration=production

# 运行环境
FROM nginx:alpine

# 添加健康检查
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost/ || exit 1

COPY --from=builder /app/dist/site.pedyc/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

