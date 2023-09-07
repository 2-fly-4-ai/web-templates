type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: Block[];
  intro: Block[];
  headline: string;
  publishedAt: string;
  name: string;
  faq: Block[];
  chef: {
    image: Image;
    name: string;
  };
  portion: number;
  instructions: Block[];
  ingredientsOverview: Block[];
  youtubelinkid: string;
  nutritional: {
    calories: number;
    carbs: number;
    protein: number;
    fatContent: number;
  };
  time: number;
  ingredient: {
    _key: string;
    name: string;
    quantity: string;
    wholeNumber: number;
    fraction: number;
    unit: string;
    ingredient: {
      name: string;
    };
  }[];
}

interface YoutubeVideoProps {
  videoId: string;
  height: string;
  width: string;
  autoplay: number;
}

interface Chef extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Seo extends Base {
  keywords: string;
  synonymns: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  assets: Reference;
}

interface Title {
  _type: "string";
  current: string;
}

interface Recipe {
  slug: { current: string };
  mainImage: string;
  name: string;
  time: number;
  ingredient: string[];
  portion: string;
  metaTitle: string;
}

interface BannerProps {
  slug: string;
  title: string;
}

interface BlogData {
  title: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  author: {
    name: string;
  };
  slug: {
    current: string;
  };
  _createdAt: string;
  publishedAt: string;
  _updatedAt: string;
  headline: string;
  body: Block[]; // This should be updated with the appropriate type for the "body" field
}

interface RecipeData {
  chef: {
    name: string;
  };
  time: number;
  publishedAt: string;
  headline: string;
  // ingredients: {
  //   _key: string;
  //   unit: string;
  //   wholeNumber: number;
  //   fraction: number;
  //   ingredient: Ingredient;
  // }[];
  mainImage: Image;
  ingredient: {
    wholeNumber?: number;
    fraction?: number;
    unit?: string;
    ingredient: {
      name: string;
    };
  }[];
  name: string;
  nutritional: {
    calories: number;
    carbs: number;
    protein: number;
    fatContent: number;
  };
  portion: number;
  instructions: {
    _key: string;
    _type: string;
    children: {
      _key: string;
      _type: string;
      marks: any[];
      text: string;
    }[];
    markDefs: any[];
    style: string;
  }[];
}

// interface Ingredient {
//   wholeNumber?: number;
//   fraction?: string;
//   unit?: string;

//   ingredient: {
//     name: string;
//   };
// }

type StructuredDataType = {
  "@context": string;
  "@type": string;
  headline: string;
  alternativeHeadline: string;
  image: string;
  editor: string;
  genre: string;
  keywords: string;
  url: string;
  datePublished: string;
  dateCreated: string;
  dateModified: string;
  description: string;
  articleBody: any;
  author: {
    "@type": string;
    name: string;
  };
  [key: string]: any;
};

interface StructuredDataProps {
  data: Content;
}

// interface AstNode {
//   children?: AstNode[];
//   style?: string;
//   subheadings?: string,
//   heading?: string
//   path?:string
//   style?: string

//   // add any additional properties here
// }

// interface HeadingNode extends AstNode {
//   subheadings: HeadingNode[];

// }
