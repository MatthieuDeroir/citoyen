import { Fragment } from "react";

/** Rend le markdown léger du contenu : **gras** et listes "- ". */
function inline(text: string, keyPrefix: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${keyPrefix}-${i}`} className="font-bold">
        {part}
      </strong>
    ) : (
      <Fragment key={`${keyPrefix}-${i}`}>{part}</Fragment>
    ),
  );
}

export function CardText({ text, className }: { text: string; className?: string }) {
  const lines = text.split("\n");
  const blocks: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (key: string) => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={key} className="space-y-1 text-left">
        {listItems.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="text-primary">
              •
            </span>
            <span>{inline(item, `${key}-${i}`)}</span>
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line, i) => {
    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
    } else {
      flushList(`list-${i}`);
      if (line.trim()) {
        blocks.push(<p key={`p-${i}`}>{inline(line, `p-${i}`)}</p>);
      }
    }
  });
  flushList("list-end");

  return <div className={`space-y-2 ${className ?? ""}`}>{blocks}</div>;
}
