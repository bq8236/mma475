
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }

  async sendMessage(message: string) {
    try {
      const response = await this.chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }

  async sendMessageStream(message: string, onChunk: (chunk: string) => void) {
    try {
      const result = await this.chat.sendMessageStream({ message });
      for await (const chunk of result) {
        onChunk(chunk.text || "");
      }
    } catch (error) {
      console.error("Gemini API Stream Error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
