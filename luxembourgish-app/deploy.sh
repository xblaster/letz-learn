#!/bin/bash

# Script de déploiement pour l'application Luxembourgish
# Usage: ./deploy.sh [IMAGE_TAG]

set -e

# Configuration
APP_NAME="luxembourgish-app"
NAMESPACE="luxembourgish-app"
REGISTRY="xblaster"  # À remplacer par votre registry (ex: ghcr.io/username)
IMAGE_TAG="${1:-latest}"

echo "🚀 Déploiement de l'application Luxembourgish..."
echo "📦 Registry: $REGISTRY"
echo "🏷️  Tag: $IMAGE_TAG"

# 1. Build de l'image Docker
echo "🔨 Build de l'image Docker..."
docker build -t $REGISTRY/$APP_NAME:$IMAGE_TAG .

# 2. Push de l'image
echo "📤 Push de l'image vers le registry..."
docker push $REGISTRY/$APP_NAME:$IMAGE_TAG

# 3. Mise à jour du manifest avec la nouvelle image
echo "📝 Mise à jour du deployment..."
sed -i.bak "s|YOUR_REGISTRY/$APP_NAME:.*|$REGISTRY/$APP_NAME:$IMAGE_TAG|g" k8s/deployment.yaml

# 4. Application des manifests Kubernetes
echo "☸️  Application des manifests Kubernetes..."

# Créer le namespace s'il n'existe pas
kubectl create namespace $NAMESPACE --dry-run=client -o yaml | kubectl apply -f -

# Appliquer tous les manifests
kubectl apply -k k8s/

# 5. Attendre que le déploiement soit prêt
echo "⏳ Attente du déploiement..."
kubectl rollout status deployment/$APP_NAME -n $NAMESPACE --timeout=300s

# 6. Vérifier le statut
echo "✅ Vérification du statut..."
kubectl get pods -n $NAMESPACE
kubectl get ingress -n $NAMESPACE

echo ""
echo "🎉 Déploiement terminé !"
echo "🌐 Application accessible sur: https://lux.lo2k.net"
echo "🔍 Logs: kubectl logs -f deployment/$APP_NAME -n $NAMESPACE"
echo "📊 Status: kubectl get pods -n $NAMESPACE"

# Restaurer le fichier original
mv k8s/deployment.yaml.bak k8s/deployment.yaml 2>/dev/null || true