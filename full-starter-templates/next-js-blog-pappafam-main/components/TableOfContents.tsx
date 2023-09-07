type Node = {
  text?: string;
};

type Heading = {
  children: Node[];
  subheadings: Heading[];
};

type TableOfContentsProps = {
  outline: Heading[];
};

export const getChildrenText = (props: { children: Node[] }) =>
  props.children
    .map((node) => (typeof node === "string" ? node : node.text || ""))
    .join("");

export const TableOfContents = (props: TableOfContentsProps) => (
  <ol className=" bg-gray-100 w-full lg:w-80 py-4 flex flex-col list-outside px-4 gap-2">
    {props.outline.map((heading: Heading, index: number) => (
      <a
        key={index}
        className=" "
        href={
          "#" + heading.children[0].text?.toLowerCase().replace(/\s+/g, "-")
        }
      >
        <li
          key={index}
          className="font-medium text-black underline p-2 group bg-gray-200 hover:bg-gray-300"
        >
          {getChildrenText({ children: heading.children })}

          {/* <a className=" ">
          {heading.subheadings.length > 0 && (
            <TableOfContents outline={heading.subheadings} />
          )}
        </a> */}
        </li>
      </a>
    ))}
  </ol>
);
