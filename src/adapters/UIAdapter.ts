interface UIAdapter {
  createDb(
    name: string,
    tables: {
      name: string;
      columns: string[];
    }[],
  ): void;
  deleteDb(): void;
}
