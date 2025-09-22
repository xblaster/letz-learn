# 🚀 Déploiement Kubernetes - Application Luxembourgish

## 📋 Prérequis

1. **Docker** installé et configuré
2. **Registry Docker** accessible (GitHub Container Registry, Docker Hub, etc.)
3. **kubectl** configuré pour votre cluster OVH
4. **Domaine** `lux.lo2k.net` pointant vers `37.59.31.192` (votre Load Balancer)

## 🏗️ Architecture

```
Cloudflare (SSL) → OVH Load Balancer (37.59.31.192) → NGINX Ingress → Service → Pods
```

## 🐳 Fichiers créés

```
├── Dockerfile              # Image multi-stage optimisée
├── nginx.conf              # Configuration NGINX pour SPA
├── .dockerignore           # Fichiers à exclure du build
├── deploy.sh               # Script de déploiement automatisé
└── k8s/
    ├── namespace.yaml      # Namespace dédié
    ├── deployment.yaml     # Déploiement avec 2 replicas
    ├── service.yaml        # Service ClusterIP
    ├── ingress.yaml        # Ingress pour lux.lo2k.net
    └── kustomization.yaml  # Configuration Kustomize
```

## 🚀 Déploiement rapide

### 1. Configurer le registry

Éditez `k8s/deployment.yaml` et remplacez `YOUR_REGISTRY` par votre registry :

```yaml
image: ghcr.io/username/luxembourgish-app:latest
# ou
image: username/luxembourgish-app:latest
```

### 2. Déployer avec le script

```bash
# Build et déploiement automatisé
./deploy.sh v1.0.0

# Ou version latest
./deploy.sh
```

### 3. Déploiement manuel

```bash
# 1. Build de l'image
docker build -t your-registry/luxembourgish-app:v1.0.0 .

# 2. Push
docker push your-registry/luxembourgish-app:v1.0.0

# 3. Déploiement
kubectl apply -k k8s/

# 4. Vérification
kubectl get pods -n luxembourgish-app
```

## 📊 Monitoring

```bash
# Status des pods
kubectl get pods -n luxembourgish-app

# Logs en temps réel
kubectl logs -f deployment/luxembourgish-app -n luxembourgish-app

# Describe pour debugging
kubectl describe ingress luxembourgish-app-ingress -n luxembourgish-app

# Port-forward pour test local
kubectl port-forward service/luxembourgish-app-service 8080:80 -n luxembourgish-app
```

## 🔧 Configuration

### Ingress optimisé pour React SPA

- **SSL géré par Cloudflare** (pas de redirect NGINX)
- **Try-files** pour les routes React
- **Cache** pour les ressources statiques (1 an)
- **Compression gzip** activée

### Déploiement robuste

- **2 replicas** avec anti-affinity
- **Probes** de santé (liveness & readiness)
- **Ressources** limitées (256Mi RAM max)
- **Rolling updates** sans interruption

## 🌐 DNS et SSL

1. **Cloudflare** : Pointer `lux.lo2k.net` vers `37.59.31.192`
2. **SSL** : Activé automatiquement par Cloudflare
3. **Cache** : Configuration recommandée : "Standard"

## 🔄 Mise à jour

```bash
# Nouvelle version
./deploy.sh v1.1.0

# Rollback si problème
kubectl rollout undo deployment/luxembourgish-app -n luxembourgish-app
```

## 📈 Optimisations

### Performance
- Image **multi-stage** (taille réduite)
- Cache **nginx** pour ressources statiques
- **Gzip** compression activée

### Sécurité
- Namespace **isolé**
- **Ressources limitées** par pod
- Headers de **sécurité** NGINX

### Monitoring
- **Health checks** configurés
- **Logs** centralisés accessibles
- **Métriques** via les probes

## 🚨 Troubleshooting

### Pod qui ne démarre pas
```bash
kubectl describe pod -l app=luxembourgish-app -n luxembourgish-app
kubectl logs deployment/luxembourgish-app -n luxembourgish-app
```

### Ingress inaccessible
```bash
kubectl get ingress -n luxembourgish-app
kubectl describe ingress luxembourgish-app-ingress -n luxembourgish-app

# Vérifier la résolution DNS
nslookup lux.lo2k.net
```

### Site ne charge pas
```bash
# Test direct du service
kubectl port-forward service/luxembourgish-app-service 8080:80 -n luxembourgish-app
curl http://localhost:8080
```

---

🎉 **Application accessible sur** : https://lux.lo2k.net