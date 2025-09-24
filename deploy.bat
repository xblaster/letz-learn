@echo off
setlocal

REM --- Configuration ---
set IMAGE_NAME=xblaster/luxembourgish-app
set NAMESPACE=luxembourgish-app
set DEPLOYMENT_NAME=luxembourgish-app

REM --- Get Git Hash for Image Tag ---
echo "Getting Git commit hash..."
for /f "delims=" %%i in ('git rev-parse --short HEAD') do set GIT_HASH=%%i
if not defined GIT_HASH (
    echo "Error: Could not get Git hash. Are you in a git repository?"
    exit /b 1
)
set IMAGE_TAG=%GIT_HASH%
set FULL_IMAGE_NAME=%IMAGE_NAME%:%IMAGE_TAG%

echo "----------------------------------------"
echo "Image: %FULL_IMAGE_NAME%"
echo "Namespace: %NAMESPACE%"
echo "Deployment: %DEPLOYMENT_NAME%"
echo "----------------------------------------"

REM --- Build Docker Image ---
echo.
echo "Building Docker image..."
docker build -t %FULL_IMAGE_NAME% .
if %errorlevel% neq 0 (
    echo "Error: Docker build failed."
    exit /b 1
)

REM --- Push Docker Image ---
echo.
echo "Pushing Docker image..."
docker push %FULL_IMAGE_NAME%
if %errorlevel% neq 0 (
    echo "Error: Docker push failed. Is docker logged in?"
    exit /b 1
)

REM --- Deploy to Kubernetes ---
echo.
echo "Applying Kubernetes configurations from k8s/ directory..."
kubectl apply -k k8s/
if %errorlevel% neq 0 (
    echo "Error: kubectl apply failed."
    exit /b 1
)

echo.
echo "Updating deployment with the new image to force rollout..."
kubectl set image deployment/%DEPLOYMENT_NAME% %DEPLOYMENT_NAME%=%FULL_IMAGE_NAME% -n %NAMESPACE%
if %errorlevel% neq 0 (
    echo "Error: kubectl set image failed."
    exit /b 1
)

echo.
echo "----------------------------------------"
echo "Deployment initiated successfully!"
echo "Run 'kubectl rollout status deployment/%DEPLOYMENT_NAME% -n %NAMESPACE%' to check progress."
echo "----------------------------------------"

endlocal