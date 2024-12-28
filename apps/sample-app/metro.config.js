const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const monorepoRoot = path.resolve(projectRoot, '../..');

// Only list the packages within your monorepo that your app uses. No need to add anything else.
// If your monorepo tooling can give you the list of monorepo workspaces linked
// in your app workspace, you can automate this list instead of hardcoding them.
const monorepoPackages = {
    '@evie-ui/types': path.resolve(monorepoRoot, 'packages/types'),
    '@evie-ui/hooks': path.resolve(monorepoRoot, 'packages/hooks'),
    '@evie-ui/utils': path.resolve(monorepoRoot, 'packages/utils'),
    '@evie-ui/sync': path.resolve(monorepoRoot, 'packages/sync'),
    '@evie-ui/components': path.resolve(monorepoRoot, 'packages/components'),
  };

const config = getDefaultConfig(projectRoot);

// 1. Watch the local app directory, and only the shared packages (limiting the scope and speeding it up)
// Note how we change this from `monorepoRoot` to `projectRoot`. This is part of the optimization!
config.watchFolders = [projectRoot, ...Object.values(monorepoPackages)];

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

config.resolver.unstable_enablePackageExports = true;

module.exports = config;
