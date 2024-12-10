import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import type { Document } from "./document";

export const DataSync = <DocumentType extends object>(document: Document<DocumentType>) => ({
  get name() {
    return this.utils.createTaskName(document.key);
  },

  create(...props: unknown[]) {
    TaskManager.defineTask(this.name, async ({ data, error, executionInfo }) => {
      try {
        const now = Date.now();
        console.log(`Got background fetch call at date: ${new Date(now).toISOString()}`);
        console.log(`Data: ${JSON.stringify(data, null, 2)}`);
        console.log(`Error: ${JSON.stringify(error, null, 2)}`);
        console.log(`Execution info: ${JSON.stringify(executionInfo, null, 2)}`);

        await document.push(...props);

        // Be sure to return the successful result type!
        return BackgroundFetch.BackgroundFetchResult.NoData;
      } catch (error) {
        console.error("DataSync", this.name, error);

        // Be sure to return the failed result type!
        return BackgroundFetch.BackgroundFetchResult.Failed;
      }
    });
  },

  async start() {
    return BackgroundFetch.registerTaskAsync(this.name, {
      minimumInterval: 60 * 1, // 1 minute
      stopOnTerminate: false, // android only,
      startOnBoot: true, // android only
    });
  },

  async stop() {
    return BackgroundFetch.unregisterTaskAsync(this.name);
  },

  /**
   * Determine whether the task is registered. Registered tasks are stored in a persistent storage and preserved between sessions.
   * @returns boolean
   */
  async getStatus() {
    return TaskManager.isTaskRegisteredAsync(this.name);
  },

  get utils() {
    return {
      createTaskName: (key: string) => `${key}-sync`,
      canUseBackgroundTasks: async () => BackgroundFetch.getStatusAsync(),
    };
  },
});
