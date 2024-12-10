import { useState, useSyncExternalStore } from "react";
import type { Collection } from "../collection";
import type { Document } from "../document";

export const useDocumentQuery = <DocumentType extends object>(document: Document<DocumentType>) => {
  const [immutableDocument] = useState(document);

  const value = useSyncExternalStore(
    (callback) => immutableDocument.addListener(callback),
    () => immutableDocument.value,
  );

  return [
    value,
    {
      actions: {
        update: immutableDocument.update,
        delete: immutableDocument.delete,
        pull: immutableDocument.pull,
        push: immutableDocument.push,
      },
    },
  ] as const;
};

export const useCollectionQuery = <CollectionType extends object>(collection: Collection<CollectionType>) => {
  const [immutableCollection] = useState(collection);

  const value = useSyncExternalStore(
    (callback) => immutableCollection.addListener(callback),
    () => immutableCollection.value,
  );

  return [
    value,
    {
      actions: {
        set: immutableCollection.set,
        append: immutableCollection.append,
        prepend: immutableCollection.prepend,
        removeAt: immutableCollection.removeAt,
        replaceAt: immutableCollection.replaceAt,
        move: immutableCollection.move,
        insertAt: immutableCollection.insertAt,
        remove: immutableCollection.remove,
        replace: immutableCollection.replace,
        clear: immutableCollection.clear,
      },
    },
  ] as const;
};
