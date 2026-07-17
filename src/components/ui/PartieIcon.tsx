import {
  Landmark,
  Building2,
  Scale,
  Map as MapIcon,
  Users,
  ScrollText,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Landmark,
  Building2,
  Scale,
  MapIcon,
  Users,
  ScrollText,
};

export function PartieIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? BookOpen;
  return <Icon className={className} />;
}
