
import { GoogleGenAI, GenerateContentResponse, Content } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class GeminiService {
  // Use gemini-3-pro-preview for complex text tasks such as legal and regulatory interpretation.
  private modelName = 'gemini-3-pro-preview';

  async sendMessage(message: string, history: Content[] = []) {
    try {
      // Create a new instance right before the call to ensure it uses the most up-to-date API key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: this.modelName,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
        history: history,
      });

      const response = await chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }

  async sendMessageStream(message: string, history: Content[] = [], onChunk: (chunk: string) => void) {
    try {
      // Create a new instance right before the call to ensure it uses the most up-to-date API key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: this.modelName,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
        history: history,
      });

      const result = await chat.sendMessageStream({ message });
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        onChunk(c.text || "");
      }
    } catch (error) {
      console.error("Gemini API Stream Error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
