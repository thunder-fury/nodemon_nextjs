import { css } from '@emotion/react'
import React, {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  useEffect
} from "react"

interface IFileTypes {
  id: number
  object: File
}

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDrop?: any
  onDragOver?: any
}

const DragDrop: React.FC<Props> = ({onChange, onDragOver, onDrop}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [files, setFiles] = useState<IFileTypes[]>([])

  const dragRef = useRef<HTMLLabelElement | null>(null)
  const fileId = useRef<number>(0)

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      console.log(`sdafsdf`)
      let selectFiles: File[] = []
      let tempFiles: IFileTypes[] = files

      if (e.type === "drop") {
        selectFiles = e.dataTransfer.files
      } else {
        selectFiles = e.target.files
      }

      for (const file of selectFiles) {
        tempFiles = [
          ...tempFiles,
          {
            id: fileId.current++,
            object: file
          }
        ]
      }

      setFiles(tempFiles)
    },
    [files]
  )

  const handleFilterFile = useCallback(
    (id: number): void => {
      setFiles(files.filter((file: IFileTypes) => file.id !== id))
    },
    [files]
  )

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault()
    e.stopPropagation()

    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault()
    e.stopPropagation()

    if (e.dataTransfer!.files) {
      setIsDragging(true)
    }
  }, [])

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault()
      e.stopPropagation()

      onChangeFiles(e)
      setIsDragging(false)
    },
    [onChangeFiles]
  )

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn)
      dragRef.current.addEventListener("dragleave", handleDragOut)
      dragRef.current.addEventListener("dragover", handleDragOver)
      dragRef.current.addEventListener("drop", handleDrop)
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop])

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn)
      dragRef.current.removeEventListener("dragleave", handleDragOut)
      dragRef.current.removeEventListener("dragover", handleDragOver)
      dragRef.current.removeEventListener("drop", handleDrop)
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop])

  useEffect(() => {
    initDragEvents()

    return () => resetDragEvents()
  }, [initDragEvents, resetDragEvents])

  return (
    <div className="DragDrop">
      <input
        type="file"
        id="fileUpload"
        style={{ display: "none" }}
        multiple={true}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChangeFiles(e)
          onChange && onChange(e)
          onDragOver && onDragOver(e)
          onDrop && onDrop(e)
        }}
      />

      <label
        className={isDragging ? "DragDrop-File-Dragging" : "DragDrop-File"}
        htmlFor={`fileUpload`}
        ref={dragRef}
      >
        <div css={dragDrop.label}>파일을 선택하세요</div>
      </label>

      <div css={dragDrop.files} className="DragDrop-Files">
        {files.length > 0 &&
          files.map((file: IFileTypes) => {
            const {
              id,
              object: { name }
            } = file
            return (
              <div key={id}>
                <div>{name}</div>
                <div
                  className="DragDrop-Files-Filter"
                  onClick={() => handleFilterFile(id)}
                >
                  X
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

const dragDrop = {
  label: css `
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
    padding: 10px;
    border-radius: 20px;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  `,
  files: css `
    font-size: 1.2;
    text-align: center;
  `
}

export default DragDrop