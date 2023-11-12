# Image mit Node.js und JMeter

# FROM node:20.9.0-alpine AS build-stage

# RUN apk update && apk add --no-cache \
#     openjdk11-jre \
#     wget \
#     unzip \
#     xvfb \
#     libxi \
#     && rm -rf /var/cache/apk/* \
#     && wget https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.6.2.zip \
#     && unzip apache-jmeter-5.6.2.zip -d /opt/ \
#     && rm apache-jmeter-5.6.2.zip

# WORKDIR /app
# COPY package*.json ./
# RUN npm install

# FROM node:20.9.0-alpine

# COPY --from=build-stage /opt/apache-jmeter-5.6.2 /opt/apache-jmeter-5.6.2
# COPY --from=build-stage /app/node_modules ./node_modules
# COPY --from=build-stage /app/package*.json ./

# COPY tests /app/tests

# CMD ["npm", "test"]



# Image mit Node.js ohne JMeter

FROM node:20.9.0-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM node:20.9.0-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

COPY tests /app/tests

CMD ["npm", "test"]



# Image mit JMeter ohne Node.js

# FROM alpine:3.18 AS jmeter-setup

# RUN apk update && apk add --no-cache openjdk11-jre \
#     && wget https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.6.2.zip \
#     && unzip apache-jmeter-5.6.2.zip -d /opt/ \
#     && rm apache-jmeter-5.6.2.zip

# FROM alpine:3.18

# COPY --from=jmeter-setup /opt/apache-jmeter-5.6.2 /opt/apache-jmeter-5.6.2
# COPY --from=jmeter-setup /usr/lib/jvm/default-jvm /usr/lib/jvm/default-jvm

# ENV JAVA_HOME=/usr/lib/jvm/default-jvm
# ENV PATH="$JAVA_HOME/bin:${PATH}"

# WORKDIR /opt/apache-jmeter-5.6.2

# CMD ["./bin/jmeter", "-n", "-t", "your_test_plan.jmx", "-l", "test_results.jtl"]
