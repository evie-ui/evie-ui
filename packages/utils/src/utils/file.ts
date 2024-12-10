export const FileHelpers = {
  getFileExtension(fileName: string) {
    return fileName.split(".").pop();
  },

  checkFileType(file: File, acceptedFileTypes: string[] = []) {
    const fileName = file.name;
    const mimeType = file.type.toLowerCase();
    const baseMimeType = mimeType.replace(/\/.*$/, "");

    return acceptedFileTypes.some((type) => {
      const validType = type.trim().toLowerCase();
      if (validType.charAt(0) === ".") return fileName.toLowerCase().endsWith(validType);

      // This is something like a image/* mime type
      if (validType.endsWith("/*")) return baseMimeType === validType.replace(/\/.*$/, "");

      return mimeType === validType;
    });
  },
};
