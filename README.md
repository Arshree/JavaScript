⚙️ Hybrid Framework Overview — Autodesk Fusion Team Web Client
Welcome to the Fusion Team Web Client, a sophisticated hybrid architecture that blends AngularJS (1.x) with React 18 to enable modern development while maintaining legacy support.

🏗️ Primary Framework Architecture
🚀 AngularJS 1.x + React 18 Hybrid
The application is structured around:

Legacy AngularJS 1.x as the foundational framework.

Modern React 18 used for new features and UI components.

ts
Copy
Edit
// app/index.ts
import angular from 'angular';
import 'react';
import 'react-dom';
import ngReact from '@pakenfit/ngreact-18'; // Glue between AngularJS and React
🔌 Key Integration Layer
@pakenfit/ngreact-18: Enables seamless embedding of React 18 components within AngularJS templates.

Supports incremental migration from AngularJS to React.

🛠️ Technology Stack
🧱 Core Frameworks
Tech	Role
AngularJS 1.x	Primary application framework
React 18	Modern UI component library
UI-Router	AngularJS routing
Redux/ng-redux	Shared state management

🏗️ Build & Tooling
Webpack 5 – Bundling & module resolution

TypeScript – Static typing for scalability

Babel – JavaScript transpilation

LESS – CSS preprocessor

🧪 Testing Stack
Tool	Purpose
Cypress	E2E testing
Jasmine	Unit testing AngularJS
Puppeteer	Browser automation

✅ Code Quality
ESLint – JS/TS linting

Prettier – Code formatting

Stylelint – CSS/LESS linting

Husky – Git pre-commit hooks for quality checks

🗂️ Application Structure & Features
🔍 Identified Project
Based on naming conventions and files, this appears to be:

Autodesk Fusion Team Web Client — formerly A360, a cloud platform for collaborative product design.

🌐 App Capabilities
Multi-env deployment: dev, staging, production

Shared component ecosystem (AngularJS & React)

Internationalization support

PWA-ready architecture

Strong CI/CD with test automation & linting

🔁 React + AngularJS Integration Example
📦 Dynamic React Component in AngularJS
js
Copy
Edit
// cde_fusion_common_admin.dir.js
import('@adsk/cde-fusion-common-admin').then(({ FCECommonAdmin }) => {
  compileProvider.directive('cdeFusionCommonAdmin', (reactDirective) => {
    return reactDirective(FCECommonAdmin, [
      'hubId',
      'density',
      'forgeHubId',
      'userId',
      'scopeId',
      'hubOwnerEmail',
      'hcaptchaSiteKeys',
      'hubUrn',
    ]);
  });
});
✅ This pattern allows React features to coexist and scale inside an AngularJS app.

📦 Dev & Build Commands
Command	Description
npm start	Start dev server (FQA)
npm run build:fqa	Build app for FQA env
npm run build:production	Build optimized production bundle
npm test	Run unit tests
npm run cypress:run	Execute E2E tests

💼 Why This Hybrid Architecture?
✅ Strategic Migration: Modernize app without breaking legacy
✅ Performance & Modularity: Use React where performance/UI upgrades are needed
✅ Developer Velocity: Teams can build in React without rewriting the AngularJS monolith
✅ Stability: Maintain existing routes, templates, and services without major disruptions

This is a mature, production-level hybrid architecture that combines AngularJS’s battle-tested framework with the flexibility and modern power of React — ideal for enterprise-level incremental migration.
