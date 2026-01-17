export interface Bookmark {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'product-management' | 'business' | 'design-ux' | 'ai';
  type: 'book' | 'podcast' | 'article' | 'video' | 'website';
}

export interface Category {
  id: string;
  label: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'product-management',
    label: 'Product Management',
    description: 'Aprendizados e exemplos práticos em gestão de produtos digitais',
  },
  {
    id: 'business',
    label: 'Business',
    description: 'Enfoque nos desafios para construir e escalar tech startups',
  },
  {
    id: 'design-ux',
    label: 'Design & UX',
    description: 'Design não é só fazer soluções bonitas. Foco em soluções para o digital',
  },
  {
    id: 'ai',
    label: 'AI',
    description: 'Principais recursos sobre GenAI e LLMs - como e porque essa tecnologia cria novas oportunidades',
  },
];

export const bookmarks: Bookmark[] = [
  // Product Management - Books
  {
    id: 'pm-1',
    title: 'Escaping the Build Trap',
    description: 'How Effective Product Management Creates Real Value, by Melissa Perri',
    url: 'https://www.amazon.com.br/Escaping-Build-Trap-Effective-Management-ebook/dp/B07K3QBWG1',
    category: 'product-management',
    type: 'book',
  },
  {
    id: 'pm-2',
    title: 'Continuous Discovery Habits',
    description: 'Discover Products that Create Customer Value and Business Value, by Teresa Torres',
    url: 'https://www.amazon.com.br/Continuous-Discovery-Habits-Discover-Products-ebook/dp/B094PVB97X',
    category: 'product-management',
    type: 'book',
  },
  {
    id: 'pm-3',
    title: 'Shape Up',
    description: 'Stop Running in Circles and Ship Work that Matters, by Basecamp',
    url: 'https://basecamp.com/shapeup',
    category: 'product-management',
    type: 'book',
  },
  {
    id: 'pm-4',
    title: 'Transformação digital e cultura de produto',
    description: 'Como colocar a tecnologia no centro da estratégia de sua empresa, por Joaquim Torres',
    url: 'https://www.amazon.com.br/Transforma%C3%A7%C3%A3o-digital-cultura-produto-tecnologia-ebook/dp/B0CNSKN11X',
    category: 'product-management',
    type: 'book',
  },
  // Product Management - Podcasts
  {
    id: 'pm-5',
    title: 'Transição de carreira | Mariana Penido',
    description: 'VP de Produtos e Operações do Isaac, Deep Growth Podcast',
    url: 'https://open.spotify.com/episode/3oMv69mGuVllJ8pHcxNBo9',
    category: 'product-management',
    type: 'podcast',
  },
  {
    id: 'pm-6',
    title: 'Lessons from scaling Stripe',
    description: 'Insights on scaling one of the most successful fintech companies, Lenny\'s Podcast',
    url: 'https://open.spotify.com/episode/2FzW8RcTu6XK3NExlHJrVF',
    category: 'product-management',
    type: 'podcast',
  },
  {
    id: 'pm-7',
    title: '4 questions Shreyas Doshi wishes he\'d asked himself sooner',
    description: 'Lessons from Shreyas Doshi, former Product Leader at Stripe, Twitter and Google, Lenny\'s Podcast',
    url: 'https://open.spotify.com/episode/5sRhCbjGYpmSDi0d9jUnzq',
    category: 'product-management',
    type: 'podcast',
  },
  // Product Management - Articles
  {
    id: 'pm-8',
    title: '9 lessons from my 10 years working in product',
    description: 'Key learnings and insights from a decade in product management',
    url: 'https://www.reddit.com/r/ProductManagement/comments/p14pzi/9_lessons_from_my_10_years_working_in_product/',
    category: 'product-management',
    type: 'article',
  },
  {
    id: 'pm-9',
    title: 'What it takes to become a great Product Manager',
    description: 'Harvard Business Review\'s comprehensive guide on product management excellence',
    url: 'https://hbr.org/2017/12/what-it-takes-to-become-a-great-product-manager',
    category: 'product-management',
    type: 'article',
  },
  {
    id: 'pm-10',
    title: 'Opportunity Solution Tree',
    description: 'A visual aid that helps product teams connect the dots between their product work and their desired business outcomes',
    url: 'https://www.producttalk.org/2016/08/opportunity-solution-tree/',
    category: 'product-management',
    type: 'article',
  },
  {
    id: 'pm-11',
    title: 'How Duolingo reignited user growth',
    description: 'The story behind Duolingo\'s 350% growth acceleration, leaderboards, streaks, notifications, and innovative growth model',
    url: 'https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth',
    category: 'product-management',
    type: 'article',
  },
  // Product Management - Videos
  {
    id: 'pm-12',
    title: 'Agile Software Development',
    description: 'Comprehensive playlist on Agile Software Development methodologies and practices',
    url: 'https://www.youtube.com/watch?v=Morb8qk0uT0&list=PLgMNBa0XaIgf6JLOXPCvch9_EueZpUn4Q',
    category: 'product-management',
    type: 'video',
  },
  // Business - Books
  {
    id: 'biz-1',
    title: 'Build: An Unorthodox Guide to Making Things Worth Making',
    description: 'Tony Fadell\'s practical and inspiring guide to building products and companies',
    url: 'https://www.amazon.com.br/Build-Unorthodox-Making-Things-English-ebook/dp/B09BNJ6GBV',
    category: 'business',
    type: 'book',
  },
  {
    id: 'biz-2',
    title: 'No Rules Rules: Netflix and the Culture of Reinvention',
    description: 'Reed Hastings and Erin Meyer on Netflix\'s innovative culture and management style',
    url: 'https://www.amazon.com.br/No-Rules-Netflix-Culture-Reinvention-ebook/dp/B081Y3R657',
    category: 'business',
    type: 'book',
  },
  {
    id: 'biz-3',
    title: 'Competing Against Luck',
    description: 'How do companies know how to grow? Harvard Business School professor Clayton Christensen has the answer.',
    url: 'https://www.amazon.com/Competing-Against-Luck-Innovation-Customer/dp/0062435612',
    category: 'business',
    type: 'book',
  },
  {
    id: 'biz-4',
    title: 'The Hard Thing About Hard Things',
    description: 'Building a Business When There Are No Easy Answers, by Ben Horowitz. Essential reading on the difficult decisions and challenges of running a startup.',
    url: 'https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205',
    category: 'business',
    type: 'book',
  },
  // Business - Podcasts
  {
    id: 'biz-5',
    title: 'Mark Zuckerberg: Meta, Facebook, Instagram, and the Metaverse',
    description: 'Lex Fridman\'s in-depth conversation with Mark Zuckerberg about Meta\'s vision',
    url: 'https://open.spotify.com/episode/2CBS44Q2aTOvMR2gxIAdmp',
    category: 'business',
    type: 'podcast',
  },
  {
    id: 'biz-6',
    title: '20VC: Brex CEO Pedro Franceschi on What Brex Needs to do to be a Public Company',
    description: 'Lessons from Pedro Franceschi, Co-Founder and CEO of Brex, 20VC Podcast',
    url: 'https://open.spotify.com/episode/6mZzkYpgZfuaIiwnnb8LJb?si=406e9b7f2d2e4314',
    category: 'business',
    type: 'podcast',
  },
  {
    id: 'biz-7',
    title: 'The Myth of the Overnight Sensation',
    description: 'Co-founders of 37signals, Jason Fried and David Heinemeier Hansson delve into the chapter title "The Myth of Overnight Sensation" of their book REWORK',
    url: 'https://open.spotify.com/episode/4hhTXjORXvVPb7Lt65C77I?si=867ff6b9e9ff4748',
    category: 'business',
    type: 'podcast',
  },
  {
    id: 'biz-8',
    title: 'Twitter is Still Up',
    description: 'Co-founders of 37signals, Jason Fried and David Heinemeier Hansson discuss the aftermath of Elon\'s controversial acquisition of Twitter',
    url: 'https://open.spotify.com/episode/4iBw7J8MvffXJldOK9pdr8?si=c9aede040c5b4b59',
    category: 'business',
    type: 'podcast',
  },
  {
    id: 'biz-9',
    title: 'How I Built A $30M Business Without A VC',
    description: 'Founder of Ruby on Rails, David Heinemeier Hansson, shares his learnings on how to build a company and have a great life',
    url: 'https://www.youtube.com/watch?v=uAFCvQtjZ7o',
    category: 'business',
    type: 'podcast',
  },
  // Business - Articles
  {
    id: 'biz-10',
    title: 'Amazon\'s original 1997 letter to shareholders',
    description: 'Jeff Bezos\'s first letter to shareholders outlining Amazon\'s long-term thinking and customer obsession philosophy',
    url: 'https://www.aboutamazon.com/news/company-news/amazons-original-1997-letter-to-shareholders',
    category: 'business',
    type: 'article',
  },
  {
    id: 'biz-11',
    title: 'Sam Altman\'s framework to becoming an A.I. billionaire',
    description: 'Sam Altman\'s insights on building successful AI companies and navigating the AI revolution',
    url: 'https://www.aiweekly.com/p/sam-altmans-framework-to-becoming-a-a-i-billionaire',
    category: 'business',
    type: 'article',
  },
  // Design & UX - Videos
  {
    id: 'design-1',
    title: 'WWDC18: The Qualities of Great Design | Apple',
    description: 'Explore the characteristics of great design through the voices of designers from Apple and our developer community',
    url: 'https://www.youtube.com/watch?v=RsbS5JWxFyk',
    category: 'design-ux',
    type: 'video',
  },
  // Design & UX - Websites
  {
    id: 'design-2',
    title: 'Laws of UX',
    description: 'Collection of best practices that designers can consider when building user interfaces',
    url: 'https://lawsofux.com/',
    category: 'design-ux',
    type: 'website',
  },
  {
    id: 'design-3',
    title: 'Built for Mars',
    description: 'UX case studies and analysis of the world\'s best products',
    url: 'https://builtformars.com/',
    category: 'design-ux',
    type: 'website',
  },
  // AI - Videos
  {
    id: 'ai-1',
    title: 'AI Changed How Startups Should Be Structured',
    description: 'AI Changed How Startups Should Be Structured',
    url: 'https://www.youtube.com/watch?v=S06CDLDiFhk',
    category: 'ai',
    type: 'video',
  },
  {
    id: 'ai-2',
    title: 'Andrej Karpathy playlist on AI',
    description: 'Zero to Hero - A course by Andrej Karpathy on building neural networks from scratch',
    url: 'https://karpathy.ai/zero-to-hero.html',
    category: 'ai',
    type: 'video',
  },
  // AI - Websites
  {
    id: 'ai-3',
    title: 'LLM Visualization',
    description: 'Interactive visualization of how Large Language Models work under the hood',
    url: 'https://bbycroft.net/llm',
    category: 'ai',
    type: 'website',
  },
  {
    id: 'ai-4',
    title: 'RLHF: Reinforcement Learning from Human Feedback',
    description: 'Comprehensive overview of RLHF, the technique used to align AI models with human preferences',
    url: 'https://huyenchip.com/2023/05/02/rlhf.html#rlhf_overview',
    category: 'ai',
    type: 'website',
  },
  {
    id: 'ai-5',
    title: 'Spinning Up in Deep RL',
    description: 'OpenAI\'s educational resource for learning deep reinforcement learning, with tutorials, exercises, and key papers',
    url: 'https://spinningup.openai.com/en/latest/user/introduction.html#what-this-is',
    category: 'ai',
    type: 'website',
  },
  // AI - Articles
  {
    id: 'ai-6',
    title: 'Transformers Explained Visually',
    description: 'Visual explanation of how Transformers work - the architecture behind modern AI models',
    url: 'https://towardsdatascience.com/transformers-explained-visually-part-1-overview-of-functionality-95a6dd460452/',
    category: 'ai',
    type: 'article',
  },
  {
    id: 'ai-7',
    title: 'Claude Code in Action',
    description: 'Official Anthropic course on using Claude Code - an AI-powered coding assistant for software development',
    url: 'https://anthropic.skilljar.com/claude-code-in-action/303235',
    category: 'ai',
    type: 'video',
  },
  {
    id: 'ai-8',
    title: 'RLVR Explained: Reinforcement Learning from Verifiable Rewards',
    description: 'Deep dive into RLVR, an advanced technique for training AI models using verifiable rewards instead of human feedback',
    url: 'https://www.promptfoo.dev/blog/rlvr-explained/',
    category: 'ai',
    type: 'article',
  },
];

// Utility to extract domain from URL for favicon fetching
export const getDomain = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return '';
  }
};

// Get favicon URL using Google's favicon service
export const getFaviconUrl = (url: string, size: number = 32): string => {
  const domain = getDomain(url);
  if (!domain) return '';
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
};

// Get high-quality logo using Clearbit (with fallback to Google favicon)
export const getLogoUrl = (url: string): string => {
  const domain = getDomain(url);
  if (!domain) return '';
  return `https://logo.clearbit.com/${domain}`;
};
