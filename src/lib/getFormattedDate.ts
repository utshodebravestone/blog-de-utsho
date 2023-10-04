export default function getFormattedDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(date)
  );
}
