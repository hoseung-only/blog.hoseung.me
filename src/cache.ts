export class Cache {
  private static map = new Map<string, any>();

  public static get<T = any>(key: string): T | null {
    return this.map.get(key) ?? null;
  }

  public static set(key: string, value: any) {
    this.map.set(key, value);
  }
}
