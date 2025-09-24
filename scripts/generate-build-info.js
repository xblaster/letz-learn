const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Génère un hash basé sur la date/heure actuelle et un timestamp
const generateBuildHash = () => {
  const timestamp = Date.now().toString();
  const random = Math.random().toString();
  return crypto.createHash('sha256').update(timestamp + random).digest('hex').substring(0, 8);
};

// Récupère la version depuis package.json
const getVersion = () => {
  const packagePath = path.join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  return packageJson.version;
};

// Génère les informations de build
const buildInfo = {
  version: getVersion(),
  buildHash: generateBuildHash(),
  buildTime: new Date().toISOString(),
  commitHash: process.env.REACT_APP_GIT_SHA || 'dev'
};

// Crée le fichier build-info.json
const buildInfoPath = path.join(__dirname, '..', 'public', 'build-info.json');
fs.writeFileSync(buildInfoPath, JSON.stringify(buildInfo, null, 2));

console.log('Build info generated:', buildInfo);