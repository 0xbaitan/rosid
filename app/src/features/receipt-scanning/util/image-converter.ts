export default class ImageConverter {
  public static toImageBlobUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.startsWith('image/')) {
        reject('Not an image file.');
      }

      const reader = new FileReader();
      reader.onload = () => {
        const blobUrl = reader.result as string;
        resolve(blobUrl);
      };
      reader.onerror = () => {
        reject('Error reading the file.');
      };
      reader.readAsDataURL(file);
    });
  }
}
