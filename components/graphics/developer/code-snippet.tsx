"use client";

import { motion } from "framer-motion";

interface CodeSnippetProps {
  language?: string;
  filename?: string;
  code?: string;
  highlightLines?: number[];
  className?: string;
  animated?: boolean;
  showLineNumbers?: boolean;
  variant?: "default" | "compact" | "floating";
}

const defaultCode = `// Handle Shopify webhook
app.post('/webhooks/orders', async (req, res) => {
  const hmac = req.get('X-Shopify-Hmac-Sha256');

  if (!verifyWebhook(req.body, hmac)) {
    return res.status(401).send('Unauthorized');
  }

  const order = req.body;
  await processOrder(order);

  res.status(200).send('OK');
});`;

export function DeveloperCodeSnippet({
  language = "javascript",
  filename = "webhook-handler.js",
  code = defaultCode,
  highlightLines = [4, 5, 6],
  className = "",
  animated = true,
  showLineNumbers = true,
  variant = "default",
}: CodeSnippetProps) {
  const lines = code.split("\n");
  const Wrapper = animated ? motion.div : "div";

  // Syntax highlighting (simplified)
  const highlightSyntax = (line: string) => {
    return line
      .replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="text-lime">$1</span>')
      .replace(/\b(const|let|var|async|await|return|if|function|app)\b/g, '<span class="text-purple-400">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-orange-400">$1</span>')
      .replace(/(\d+)/g, '<span class="text-orange-400">$1</span>')
      .replace(/(req|res|hmac|order)/g, '<span class="text-cyan-400">$1</span>');
  };

  if (variant === "compact") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
        })}
        className={`rounded-lg border border-white/10 bg-[#1E1E1E] overflow-hidden text-xs select-none ${className}`}
      >
        <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2 bg-[#252526]">
          <span className="text-gray-500 font-mono">{filename}</span>
        </div>
        <pre className="p-3 overflow-x-auto">
          <code className="font-mono text-gray-300">{code}</code>
        </pre>
      </Wrapper>
    );
  }

  if (variant === "floating") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0, y: 20, rotate: -1 },
          animate: { opacity: 1, y: 0, rotate: 1 },
          transition: { duration: 0.6 },
        })}
        className={`rounded-xl border border-shopify/20 bg-[#1E1E1E] shadow-2xl shadow-shopify/10 overflow-hidden select-none ${className}`}
      >
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5 bg-[#252526]">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="ml-2 text-xs text-gray-500 font-mono">{filename}</span>
        </div>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="font-mono">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={animated ? { opacity: 0, x: -10 } : undefined}
                animate={animated ? { opacity: 1, x: 0 } : undefined}
                transition={{ delay: 0.1 + i * 0.03 }}
                className={`${highlightLines.includes(i + 1) ? "bg-shopify/10 -mx-4 px-4" : ""}`}
              >
                <span
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: highlightSyntax(line) || "&nbsp;" }}
                />
              </motion.div>
            ))}
          </code>
        </pre>
      </Wrapper>
    );
  }

  // Default variant
  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      })}
      className={`rounded-xl border border-white/10 bg-[#1E1E1E] overflow-hidden select-none ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5 bg-[#252526]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-xs text-gray-500 font-mono">{filename}</span>
        </div>
        <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-gray-500 uppercase">
          {language}
        </span>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm">
          <code className="font-mono">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={animated ? { opacity: 0, x: -10 } : undefined}
                animate={animated ? { opacity: 1, x: 0 } : undefined}
                transition={{ delay: 0.1 + i * 0.03 }}
                className={`flex ${highlightLines.includes(i + 1) ? "bg-shopify/10 -mx-4 px-4" : ""}`}
              >
                {showLineNumbers && (
                  <span className="w-8 shrink-0 text-gray-600 select-none">{i + 1}</span>
                )}
                <span
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: highlightSyntax(line) || "&nbsp;" }}
                />
              </motion.div>
            ))}
          </code>
        </pre>
      </div>
    </Wrapper>
  );
}

// Shopify API code example
export function DeveloperShopifyAPISnippet({ className = "" }: { className?: string }) {
  const code = `const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_SECRET,
  scopes: ['read_products', 'write_orders'],
  hostName: process.env.HOST,
});

// Fetch products
const products = await shopify.rest.Product.all({
  session: session,
  limit: 50,
});`;

  return (
    <DeveloperCodeSnippet
      filename="shopify-api.js"
      language="javascript"
      code={code}
      highlightLines={[8, 9, 10, 11]}
      className={className}
    />
  );
}

// Liquid code snippet
export function DeveloperLiquidSnippet({ className = "" }: { className?: string }) {
  const code = `{% for product in collection.products %}
  <div class="product-card">
    <img src="{{ product.featured_image | img_url: '400x' }}"
         alt="{{ product.title }}">
    <h3>{{ product.title }}</h3>
    <p class="price">{{ product.price | money }}</p>
    {% if product.compare_at_price > product.price %}
      <span class="sale-badge">Sale</span>
    {% endif %}
  </div>
{% endfor %}`;

  return (
    <DeveloperCodeSnippet
      filename="product-grid.liquid"
      language="liquid"
      code={code}
      highlightLines={[7, 8, 9]}
      className={className}
    />
  );
}
