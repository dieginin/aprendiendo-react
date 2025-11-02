import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"

type Props = {
  type: SectionType
  value: string
  onChange: (text: string) => void
  loading?: boolean
}

const commonStyles = { border: 0, height: "200px", resize: "none" as const }

const getPlaceholder = ({
  type,
  loading,
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.FROM) return "Introducir texto"
  return loading ? "Traduciendo..." : "Traducción"
}

export default function TextArea({ type, value, onChange, loading }: Props) {
  const styles =
    type === SectionType.FROM
      ? { ...commonStyles, opacity: loading ? 0.5 : 1 }
      : { ...commonStyles, backgroundColor: "#f5f5f5" }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      disabled={type === SectionType.TO}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      autoFocus={type === SectionType.FROM}
      value={value}
      onChange={handleChange}
    />
  )
}
