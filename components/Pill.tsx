import { Status, statusLabel } from "@/lib/content";

export default function Pill({ status, label }: { status: Status; label?: string }) {
  return <span className={`pill ${status}`}>{label ?? statusLabel[status]}</span>;
}
