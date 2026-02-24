# Stage 1: Build React Frontend
FROM node:20-slim AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build Spring Boot Backend
FROM maven:3.9.6-eclipse-temurin-17 AS backend-build
WORKDIR /app
# Copy pom and src for backend
COPY backend/pom.xml ./backend/
COPY backend/src ./backend/src/
# Copy frontend build to backend static resources
COPY --from=frontend-build /app/frontend/dist ./backend/src/main/resources/static/
# Build backend
WORKDIR /app/backend
RUN mvn clean package -DskipTests

# Stage 3: Run Application
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=backend-build /app/backend/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
