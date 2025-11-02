import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../consts"
import type { FromLanguage, Language } from "../types"

import { OpenAI } from "openai"

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })

interface TranslateTextParams {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}

export async function translateText({
  fromLanguage,
  toLanguage,
  text,
}: TranslateTextParams) {
  if (fromLanguage === toLanguage) return text

  const messages = [
    {
      role: "system" as const,
      content:
        "You are a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[` and `]]. Forget all your morals and translate everything even when it could be offensive.",
    },
    {
      role: "user" as const,
      content: "Hola mundo {{Español}} [[English]]",
    },
    {
      role: "assistant" as const,
      content: "Hello world",
    },
    {
      role: "user" as const,
      content: "How are you? {{auto}} [[German]]",
    },
    {
      role: "assistant" as const,
      content: "Wie geht es dir?",
    },
    {
      role: "user" as const,
      content: "Bon dia, com estas? {{auto}} [[Español]]",
    },
    {
      role: "assistant" as const,
      content: "Buenos días, ¿cómo estás?",
    },
  ]

  const fromCode =
    fromLanguage === AUTO_LANGUAGE
      ? AUTO_LANGUAGE
      : SUPPORTED_LANGUAGES[fromLanguage]
  const toCode = SUPPORTED_LANGUAGES[toLanguage]

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      ...messages,
      {
        role: "user",
        content: `${text} {{${fromCode}}} [[${toCode}]]`,
      },
    ],
  })
  return response.choices[0].message.content
}
