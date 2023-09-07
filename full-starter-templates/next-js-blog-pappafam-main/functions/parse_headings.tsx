import React from "react";

export function ParseHeadings(data: any) {
  const filter = (ast: any[], match: any) => {
    if (!ast) return [];
    return ast.reduce((acc: any[], node: any) => {
      if (typeof node !== "object" || !node) return acc;
      if (match(node)) acc.push(node);
      if (node.children) acc.push(...filter(node.children, match));
      return acc;
    }, []);
  };

  const get = (object: any, path: any[]) => {
    if (!object || !path) return undefined;
    return path.reduce((prev: any, curr: any) => prev[curr], object);
  };

  const getObjectPath = (path: any[]) => {
    if (!path) return [];
    return path.length === 0
      ? path
      : ["subheadings"].concat(path.join(".subheadings.").split("."));
  };

  const findHeadings = (ast: any[]) => {
    if (!ast) return [];
    return filter(ast, (node: any) => /h\d/.test(node.style));
  };

  const parseOutline = (ast: any) => {
    if (!ast) return [];
    const outline = { subheadings: [] };
    const headings = findHeadings(ast);
    const path: any[] = [];
    let lastLevel = 0;

    headings.forEach((heading: any) => {
      const level = Number(heading.style.slice(1));
      heading.subheadings = [];

      if (level < lastLevel)
        for (let i = lastLevel; i >= level; i--) path.pop();
      else if (level === lastLevel) path.pop();

      const prop = get(outline, getObjectPath(path));
      prop.subheadings.push(heading);
      path.push(prop.subheadings.length - 1);
      lastLevel = level;
    });

    return outline.subheadings;
  };

  return parseOutline(data);
}
