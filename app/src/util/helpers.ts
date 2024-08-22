import config from '@/config';

export default class Helpers {
  public static getApiPath(...segments: string[]) {
    const path = this.joinPaths(config.apiEndpoint, ...segments);
    console.log(path);
    return path;
  }

  private static joinPaths(...segments: string[]) {
    const sanitisedSegments = segments.map((segment) => {
      segment = segment.trim();
      while (segment.startsWith('/')) {
        segment = segment.slice(1);
      }
      while (segment.endsWith('/')) {
        segment = segment.slice(0, -1);
      }
      return segment;
    });
    return sanitisedSegments.join('/');
  }
}
