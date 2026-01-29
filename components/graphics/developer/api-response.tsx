"use client";

import { motion } from "framer-motion";

interface APIResponseProps {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  endpoint?: string;
  statusCode?: number;
  statusText?: string;
  responseTime?: string;
  body?: object;
  className?: string;
  animated?: boolean;
  variant?: "default" | "compact" | "success" | "error";
}

const defaultBody = {
  products: [
    {
      id: 7654321098765,
      title: "Premium T-Shirt",
      vendor: "Talk Shop Store",
      status: "active",
      variants: [
        { id: 1, price: "29.99", inventory_quantity: 150 }
      ]
    }
  ],
  _meta: {
    total: 1,
    page: 1
  }
};

export function DeveloperAPIResponse({
  method = "GET",
  endpoint = "/admin/api/2024-01/products.json",
  statusCode = 200,
  statusText = "OK",
  responseTime = "127ms",
  body = defaultBody,
  className = "",
  animated = true,
  variant = "default",
}: APIResponseProps) {
  const Wrapper = animated ? motion.div : "div";
  const isSuccess = statusCode >= 200 && statusCode < 300;

  const methodColors: Record<string, string> = {
    GET: "bg-green-500/20 text-green-400",
    POST: "bg-blue-500/20 text-blue-400",
    PUT: "bg-orange-500/20 text-orange-400",
    DELETE: "bg-red-500/20 text-red-400",
    PATCH: "bg-purple-500/20 text-purple-400",
  };

  // Format JSON with syntax highlighting
  const formatJSON = (obj: object, indent = 0): string => {
    const spaces = "  ".repeat(indent);
    const entries = Object.entries(obj);

    if (Array.isArray(obj)) {
      if (obj.length === 0) return "[]";
      const items = obj
        .map((item) =>
          typeof item === "object" && item !== null
            ? formatJSON(item, indent + 1)
            : JSON.stringify(item)
        )
        .join(",\n" + spaces + "  ");
      return `[\n${spaces}  ${items}\n${spaces}]`;
    }

    if (entries.length === 0) return "{}";

    const formatted = entries
      .map(([key, value]) => {
        const formattedValue =
          typeof value === "object" && value !== null
            ? formatJSON(value, indent + 1)
            : typeof value === "string"
            ? `<span class="text-lime">"${value}"</span>`
            : `<span class="text-orange-400">${value}</span>`;
        return `${spaces}  <span class="text-cyan-400">"${key}"</span>: ${formattedValue}`;
      })
      .join(",\n");

    return `{\n${formatted}\n${spaces}}`;
  };

  if (variant === "compact") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3 },
        })}
        className={`rounded-lg border border-white/10 bg-slate p-3 select-none ${className}`}
      >
        <div className="flex items-center gap-2 text-sm">
          <span className={`rounded px-1.5 py-0.5 text-xs font-bold ${methodColors[method]}`}>
            {method}
          </span>
          <span className="text-gray-400 font-mono truncate">{endpoint}</span>
          <span className={`ml-auto font-bold ${isSuccess ? "text-shopify" : "text-red-400"}`}>
            {statusCode}
          </span>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      })}
      className={`rounded-xl border ${
        isSuccess ? "border-shopify/20" : "border-red-500/20"
      } bg-[#1E1E1E] overflow-hidden select-none ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 bg-[#252526]">
        <div className="flex items-center gap-3">
          <span className={`rounded px-2 py-1 text-xs font-bold ${methodColors[method]}`}>
            {method}
          </span>
          <span className="text-sm text-gray-400 font-mono">{endpoint}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">{responseTime}</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-bold ${
              isSuccess ? "bg-shopify/20 text-shopify" : "bg-red-500/20 text-red-400"
            }`}
          >
            {statusCode} {statusText}
          </span>
        </div>
      </div>

      {/* Response body */}
      <div className="p-4 overflow-x-auto">
        <motion.pre
          initial={animated ? { opacity: 0 } : undefined}
          animate={animated ? { opacity: 1 } : undefined}
          transition={{ delay: 0.3 }}
          className="text-sm font-mono text-gray-300"
          dangerouslySetInnerHTML={{ __html: formatJSON(body) }}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/5 px-4 py-2 bg-[#252526]">
        <span className="text-xs text-gray-500">Response</span>
        <span className="text-xs text-gray-500">
          {JSON.stringify(body).length} bytes
        </span>
      </div>
    </Wrapper>
  );
}

// Webhook payload example
export function DeveloperWebhookPayload({ className = "" }: { className?: string }) {
  const body = {
    id: 820982911946154500,
    admin_graphql_api_id: "gid://shopify/Order/820982911946154508",
    created_at: "2024-01-15T14:23:11-05:00",
    email: "customer@example.com",
    financial_status: "paid",
    total_price: "127.50",
    line_items: [
      {
        product_id: 788032119674292900,
        title: "Premium Bundle",
        quantity: 1,
        price: "127.50"
      }
    ]
  };

  return (
    <DeveloperAPIResponse
      method="POST"
      endpoint="/webhooks/orders/create"
      statusCode={200}
      statusText="OK"
      responseTime="45ms"
      body={body}
      className={className}
    />
  );
}

// GraphQL response
export function DeveloperGraphQLResponse({ className = "" }: { className?: string }) {
  const body = {
    data: {
      products: {
        edges: [
          {
            node: {
              id: "gid://shopify/Product/123456789",
              title: "Premium T-Shirt",
              totalInventory: 150,
              priceRangeV2: {
                minVariantPrice: { amount: "29.99", currencyCode: "USD" }
              }
            }
          }
        ],
        pageInfo: {
          hasNextPage: true,
          endCursor: "eyJsYXN0X2lkIjo..."
        }
      }
    }
  };

  return (
    <DeveloperAPIResponse
      method="POST"
      endpoint="/admin/api/2024-01/graphql.json"
      statusCode={200}
      statusText="OK"
      responseTime="89ms"
      body={body}
      className={className}
    />
  );
}
