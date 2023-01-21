import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.developerhub.kanyadanam',
  appName: 'Kanyadanam',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    'cleartext': true
  }
};

export default config;
