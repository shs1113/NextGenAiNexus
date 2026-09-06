import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "25mb" }));

  let aiClient: any = null;
  function getGeminiClient() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is not defined in Settings");
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });
    }
    return aiClient;
  }

  app.get("/api/image-proxy", (req, res) => {
    try {
      const { url } = req.query;
      if (!url || typeof url !== "string") {
        return res.status(400).send("Missing image URL");
      }
      
      const allowedDomains = ["ibb.co", "imgur.com", "unsplash.com", "weserv.nl", "wsrv.nl"];
      const isAllowed = allowedDomains.some(domain => url.includes(domain));
      if (!isAllowed) {
        return res.status(403).send("Domain not allowed for proxying");
      }

      const redirectUrl = `https://wsrv.nl/?url=${encodeURIComponent(url)}`;
      return res.redirect(302, redirectUrl);
    } catch (err: any) {
      res.status(404).send("Image unavailable");
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { modelId, message, files } = req.body;
      const client = getGeminiClient();

      const baseInstruction = " IMPORTANT: If the user asks you to write, draw, make, or generate a photo, image, picture, video, or illustration (such as 'draw a kitten', 'make a video of a futuristic subway', or 'generate high fidelity visual landscapes'), you MUST output a descriptive, high-quality, vivid prompt in English. For image requests, use the exact format: [IMAGE_PROMPT: <descriptive prompt, e.g. close-up of a fluffy kitten sitting under sunlight, 8k resolution, photorealistic>]. For video requests, use the exact format: [VIDEO_PROMPT: <descriptive prompt, e.g. walking through a cyberpunk city street with glowing neon lights, rain, high fidelity>]. You can write conversational or explanation text alongside these tags inside your response. Avoid raw JSON schemas.";

      let systemInstruction = "You are Google Gemini, a highly advanced artificial intelligence. Keep responses objective, helpful, and professional." + baseInstruction;
      
      if (modelId === "grok") {
        systemInstruction = "You are xAI Grok. Be witty, analytical, slightly rebellious, and provide clear insights." + baseInstruction;
      } else if (modelId === "chatgpt") {
        systemInstruction = "You are ChatGPT by OpenAI. Be polite, precise, highly structured, and provide excellent code blocks." + baseInstruction;
      } else if (modelId === "meta" || modelId === "llama") {
        systemInstruction = "You are Meta AI. Provide clear, direct, and fast responses with high logical consistency." + baseInstruction;
      } else if (modelId === "neon-banana") {
        systemInstruction = "You are Neon Banana, a fun, styled assistant. Be tech-forward and clean in your design instructions." + baseInstruction;
      } else if (modelId === "notebook-lm") {
        systemInstruction = "You are Google Notebook LM. Help synthesize materials, summarize text, and organize general logs." + baseInstruction;
      } else if (modelId === "plagiarism-checker") {
        systemInstruction = "You are the Plagiarism Checker and rewriting engine. Assist in refining style footprints to make text elegant." + baseInstruction;
      }

      const parts: any[] = [];
      
      if (files && Array.isArray(files)) {
        for (const file of files) {
          if (file.url && file.url.startsWith("data:")) {
            const spl = file.url.split(",");
            if (spl.length > 1) {
              const fileMime = spl[0].split(";")[0].split(":")[1];
              const fileData = spl[1];
              parts.push({
                inlineData: {
                  mimeType: fileMime,
                  data: fileData
                }
              });
            }
          }
        }
      }

      parts.push({ text: message });

      const modelCandidates = ["gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];
      let response = null;
      let lastError: any = null;

      for (const modelCandidate of modelCandidates) {
        try {
          response = await client.models.generateContent({
            model: modelCandidate,
            contents: parts,
            config: {
              systemInstruction
            }
          });
          if (response) {
            break;
          }
        } catch (err: any) {
          lastError = err;
        }
      }

      if (!response) {
        throw lastError || new Error("All model candidates failed to generate content");
      }

      const responseText = response.text || "No response generated";
      res.json({ text: responseText });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message || "An internal error occurred" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on host 0.0.0.0 port ${PORT}`);
  });
}

startServer();
