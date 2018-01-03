import {partial, inject} from 'webpack-partial';
import {runtime} from 'webpack-udev-server';

export default () => (config) => {
  const {entry, target, plugins = []} = config;

  // Detect whether or not HMR is enabled to enable hot on the dev server.
  // NOTE: This means devServer has to come _after_ hot is configured.
  // TODO: Checking constructor name might be a little brittle.
  const hot = plugins.some((plugin) => {
    return plugin.constructor.name === 'HotModuleReplacementPlugin';
  });

  // Rewrite all the entry points to include HMR code.
  return partial(config, {
    entry: inject(entry, runtime({target, hot})),
  });
};
