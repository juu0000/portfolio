FROM openjdk:17-jdk-slim

WORKDIR /app

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .

RUN chmod +x gradlew && ./gradlew build --no-daemon

COPY build/libs/*.jar app.jar

ENV PORT=${{values.port}}
EXPOSE ${{values.port}}
ENTRYPOINT ["java", "-jar", "app.jar"] 