import { Status, statusLabel } from "@/lib/content";

export default function Pill({ status }: { status: Status }) {
  return <span className={`pill ${status}`}>{statusLabel[status]}</span>;
}
