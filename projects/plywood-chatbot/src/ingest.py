"""Ingestion utilities: load text and PDF files, chunk text, and create embeddings.
This is a minimal, clear starting point — adapt chunking and embedding calls to your needs.
"""
from pathlib import Path
from typing import List
import os
from PyPDF2 import PdfReader


def load_text_file(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def load_pdf(path: Path) -> str:
    reader = PdfReader(str(path))
    pages = []
    for p in reader.pages:
        text = p.extract_text()
        if text:
            pages.append(text)
    return "\n".join(pages)


def chunk_text(text: str, chunk_size: int = 800, overlap: int = 100) -> List[str]:
    words = text.split()
    chunks = []
    i = 0
    while i < len(words):
        chunk = words[i : i + chunk_size]
        chunks.append(" ".join(chunk))
        i += chunk_size - overlap
    return chunks


def ingest_folder(folder: Path) -> List[str]:
    """Load every text/pdf in folder and return list of text chunks."""
    texts = []
    for p in folder.glob("**/*"):
        if p.suffix.lower() in [".txt", ".md"]:
            texts.append(load_text_file(p))
        elif p.suffix.lower() == ".pdf":
            texts.append(load_pdf(p))
    # flatten and chunk
    chunks = []
    for t in texts:
        chunks.extend(chunk_text(t))
    return chunks


if __name__ == "__main__":
    # Simple local test: ingest the data directory
    project_root = Path(__file__).parent.parent
    data_dir = project_root / "data"
    if not data_dir.exists():
        print("No data/ directory found. Create and add product/spec files to ingest.")
    else:
        chunks = ingest_folder(data_dir)
        print(f"Created {len(chunks)} chunks from data/")
