import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../consts"
import { SectionType, type FromLanguage, type Language } from "../types.d"

import { Form } from "react-bootstrap"

type Props =
  | {
      type: SectionType.FROM
      value: FromLanguage
      onChange: (language: FromLanguage) => void
    }
  | {
      type: SectionType.TO
      value: Language
      onChange: (language: Language) => void
    }

export default function LanguageSelector({ type, value, onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(event.target.value as Language)

  return (
    <Form.Select
      aria-label='Selecciona el idioma'
      value={value}
      onChange={handleChange}
    >
      {type === SectionType.FROM && (
        <option value={AUTO_LANGUAGE}>Detectar idioma</option>
      )}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
