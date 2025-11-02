import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from "./components/Icons"
import { Button, Col, Container, Row, Stack } from "react-bootstrap"

import { AUTO_LANGUAGE } from "./consts"
import LanguageSelector from "./components/LanguageSelector"
import { SectionType } from "./types.d"
import TextArea from "./components/TextArea"
import { translateText } from "./services/translate"
import useDebounce from "./hooks/useDebounce"
import { useEffect } from "react"
import useStore from "./hooks/useStore"

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    swapLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  } = useStore()

  const debouncedFromText = useDebounce(fromText, 300)

  useEffect(() => {
    if (debouncedFromText.trim() === "") return setResult("")

    translateText({ fromLanguage, toLanguage, text: debouncedFromText })
      .then((result) => setResult(result || ""))
      .catch((error) => {
        console.error("Error translating text:", error)
        setResult("Error al traducir el texto.")
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromLanguage, toLanguage, debouncedFromText])

  const copyTranslationToClipboard = () => navigator.clipboard.writeText(result)
  const speakTranslation = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLanguage
    speechSynthesis.speak(utterance)
  }

  return (
    <Container fluid>
      <h2>Google Translate Clone</h2>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.FROM}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.FROM}
              value={fromText}
              onChange={setFromText}
              loading={loading}
            />
          </Stack>
        </Col>
        <Col xs='auto' className='d-flex align-items-center'>
          <Button
            variant='link'
            onClick={swapLanguages}
            disabled={fromLanguage === AUTO_LANGUAGE}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.TO}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <div style={{ position: "relative" }}>
              <TextArea
                type={SectionType.TO}
                value={result}
                onChange={setResult}
                loading={loading}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  display: "flex",
                }}
              >
                <Button
                  variant='link'
                  onClick={copyTranslationToClipboard}
                  disabled={!result}
                >
                  <ClipboardIcon />
                </Button>
                <Button
                  variant='link'
                  onClick={speakTranslation}
                  disabled={!result}
                >
                  <SpeakerIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
