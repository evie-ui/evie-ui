export const PromiseHelpers = {
  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },

  retry<P extends Promise<unknown>>(
    promise: P,
    config: {
      retriesLeft: number;
      interval: number;
    } = { retriesLeft: Number.POSITIVE_INFINITY, interval: 1000 },
  ) {
    return new Promise((resolve, reject) => {
      promise.then(resolve).catch((error) => {
        setTimeout(() => {
          if (config.retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          this.retry(promise, {
            retriesLeft: config.retriesLeft - 1,
            interval: config.interval,
          }).then(resolve, reject);
        }, config.interval);
      });
    });
  },
};
