export const RenderContentBlock = (block, index) => {
  switch (block.type) {
    case "heading":
      return <h2 key={index}>{block.content}</h2>;

    case "subHeading":
      return <h4 key={index}>{block.content}</h4>;

    case "paragraph":
      return <p key={index}>{block.content}</p>;

    case "parabold":
      return (
        <p key={index}>
          {block.content.map((item, i) => {
            if (typeof item === "string") {
              return item;
            } else if (item.bold) {
              return <strong key={i}>{item.text}</strong>;
            } else if (item.link) {
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              );
            } else {
              return item.text; // fallback in case none of the above match
            }
          })}
        </p>
      );

    case "description":
      return <h5 key={index}>{block.content}</h5>;

    case "list":
      return (
        <ul key={index}>
          {block.items.map((item, i) => (
            <li key={i}>
              {Array.isArray(item)
                ? item.map((part, j) =>
                    typeof part === "string" ? (
                      part
                    ) : part.bold ? (
                      <strong key={j}>{part.text}</strong>
                    ) : (
                      part.text
                    )
                  )
                : item}
            </li>
          ))}
        </ul>
      );

    case "image":
      return (
        <div className="insight-image">
          <img
            src={block.src}
            alt={block.alt || "Image"}
            className="w-full h-auto rounded-lg"
          />
        </div>
      );

    default:
      return null;
  }
};
