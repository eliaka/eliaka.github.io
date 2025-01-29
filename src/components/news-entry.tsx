import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    // Use flex row to keep everything on one line, 
    // and a small gap (e.g., gap-2) for minimal spacing
    <div className="flex items-center gap-0 leading-none">
      <span className="text-xs text-zinc-500">{news.date}</span>
      <span className="font-serif text-md">
        {news.link ? (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 hover:text-zinc-600 transition-colors duration-300"
          >
            {news.title}
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        ) : (
          news.title
        )}
      </span>
      <span className="text-sm text-zinc-600">{news.description}</span>
    </div>
  );
}

